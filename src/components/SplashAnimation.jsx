import { useEffect, useRef, useState } from 'react'

export default function SplashAnimation({ onFinish }) {
  const [stage, setStage] = useState('intro')
  const onFinishRef = useRef(onFinish)
  const finishedRef = useRef(false)

  useEffect(() => {
    onFinishRef.current = onFinish
  }, [onFinish])

  useEffect(() => {
    const finish = () => {
      if (finishedRef.current) return
      finishedRef.current = true
      onFinishRef.current?.()
    }

    const traceTimer = setTimeout(() => setStage('trace'), 200)
    const titleTimer = setTimeout(() => setStage('title'), 900)
    const fadeTimer = setTimeout(() => setStage('fadeout'), 2600)
    const finishTimer = setTimeout(finish, 3100)

    return () => {
      clearTimeout(traceTimer)
      clearTimeout(titleTimer)
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [])

  function skipIntro() {
    if (finishedRef.current) return
    setStage('fadeout')
    setTimeout(() => {
      if (finishedRef.current) return
      finishedRef.current = true
      onFinishRef.current?.()
    }, 300)
  }

  return (
    <div
      className={`splash-overlay${stage === 'fadeout' ? ' is-fading' : ''}`}
      onClick={skipIntro}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') skipIntro()
      }}
      aria-label="Skip Vytal introduction"
    >
      <div className="splash-card">
        <div className="splash-logo-box" aria-hidden="true">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none" className="splash-svg">
            <path
              d="M 15 50 L 35 50 L 45 20 L 58 80 L 70 42 L 80 50 L 95 50"
              stroke="#ff4d5e"
              strokeWidth="4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="splash-pulse-path"
            />
          </svg>
        </div>
        <div className={`splash-text${stage === 'title' || stage === 'fadeout' ? ' show' : ''}`}>
          <h1 className="splash-brand">VYTAL</h1>
          <p className="splash-sub">Camera-Based Screening Prototype</p>
          <span className="splash-skip-hint">Click or tap anywhere to skip</span>
        </div>
      </div>
    </div>
  )
}
