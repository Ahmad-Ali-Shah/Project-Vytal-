export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', label: 'English' },
  { code: 'ur', name: 'Urdu', label: 'اردو' },
  { code: 'ps', name: 'Pashto', label: 'پښتو' },
  { code: 'sd', name: 'Sindhi', label: 'سنڌي' },
  { code: 'ar', name: 'Arabic', label: 'العربية' },
]

export function getStressLabel(stressScore) {
  if (stressScore == null) return 'Unavailable'
  if (stressScore < 30) return 'Normal'
  if (stressScore < 60) return 'Slightly high'
  return 'High'
}

export function isFlaggedReferral(hr, br, stressScore) {
  if (hr == null) return false
  const pulseOutsideBaselineRange = hr > 100 || hr < 50
  const breathingOutsideBaselineRange = br != null && (br > 22 || br < 10)
  const elevatedStressProxy = stressScore != null && stressScore >= 60
  return pulseOutsideBaselineRange || breathingOutsideBaselineRange || elevatedStressProxy
}

function displayBreathing(br, unitText) {
  return br == null ? 'unavailable' : `${br} ${unitText}`
}

export function generateOfflineExplanation(hr, br, stressScore, langCode = 'en') {
  const flagged = isFlaggedReferral(hr, br, stressScore)

  if (langCode === 'ur') {
    return flagged
      ? `اس ابتدائی اسکریننگ میں دل کی دھڑکن ${hr} bpm یا دستیاب دوسرے اشارے بنیادی حد سے باہر آئے ہیں۔ یہ تشخیص نہیں ہے؛ پرسکون حالت میں دوبارہ چیک کریں اور ضرورت ہو تو صحت کے کارکن سے مشورہ کریں۔`
      : `اس ابتدائی اسکریننگ میں دستیاب اشاروں پر کوئی بنیادی فالو اپ فلیگ نہیں آیا۔ سانس کی رفتار ${br == null ? 'دستیاب نہیں' : `${br} فی منٹ`} ہے؛ یہ صرف اسکریننگ نتیجہ ہے، طبی تشخیص نہیں۔`
  }

  if (langCode === 'ps') {
    return flagged
      ? `په دې لومړنۍ سکریننګ کې د زړه درزا ${hr} bpm یا نور موجود شاخصونه د بنسټیز حد څخه بهر دي. دا تشخیص نه دی؛ په ارام حالت کې بیا ازموینه وکړئ او که اړتیا وي له روغتیايي کارکوونکي سره مشوره وکړئ.`
      : `په دې لومړنۍ سکریننګ کې موجود شاخصونو د بنسټیز تعقیب نښه نه ده فعاله کړې. دا یوازې د سکریننګ نتیجه ده، طبي تشخیص نه دی.`
  }

  if (langCode === 'sd') {
    return flagged
      ? `هن ابتدائي اسڪريننگ ۾ دل جي ڌڙڪن ${hr} bpm يا ٻيا موجود اشارا بنيادي حد کان ٻاهر آهن. هي تشخيص ناهي؛ آرام ۾ ٻيهر چيڪ ڪريو ۽ ضرورت هجي ته صحت جي عملي سان رابطو ڪريو.`
      : `هن ابتدائي اسڪريننگ ۾ موجود اشارن تي بنيادي فالو اپ فليگ نه لڳو. هي صرف اسڪريننگ نتيجو آهي، طبي تشخيص ناهي.`
  }

  if (langCode === 'ar') {
    return flagged
      ? `في هذا الفحص الأولي، ظهرت نبضات القلب ${hr} نبضة/دقيقة أو مؤشرات متاحة أخرى خارج النطاق الأساسي. هذه ليست نتيجة تشخيصية؛ أعد الفحص أثناء الراحة واستشر عاملاً صحياً عند الحاجة.`
      : `في هذا الفحص الأولي لم تُفعّل المؤشرات المتاحة علامة المتابعة الأساسية. هذه نتيجة فحص مبدئي وليست تشخيصاً طبياً.`
  }

  const breathing = displayBreathing(br, 'br/min')
  return flagged
    ? `This baseline screening found a heart rate of ${hr} bpm or another available indicator outside its simple resting-range rules. Breathing rate: ${breathing}. This is not a diagnosis; repeat the reading at rest and seek clinical review when appropriate.`
    : `This baseline screening did not trigger its simple follow-up rule for the available indicators. Heart rate: ${hr} bpm; breathing rate: ${breathing}. This is a screening result, not a medical diagnosis.`
}

export async function fetchAIExplanation({ hr, br, stress, langCode = 'en' }) {
  return generateOfflineExplanation(hr, br, stress, langCode)
}
