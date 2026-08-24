import cv2
import numpy as np
from PIL import Image
import os, json

image_files = ["images (3).jpeg", "images (4).jpeg", "images (5).jpeg", "images (6).jpeg"]

# Load Haar cascades for face and eye detection
face_cascade_path = cv2.data.haarcascades + 'haarcascade_frontalface_default.xml'
eye_cascade_path = cv2.data.haarcascades + 'haarcascade_eye.xml'

face_cascade = cv2.CascadeClassifier(face_cascade_path)
eye_cascade = cv2.CascadeClassifier(eye_cascade_path)

def analyze_image(img_path):
    img = cv2.imread(img_path)
    if img is None:
        return {"error": "Failed to read image"}
    
    h, w, c = img.shape
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    
    # Detect faces
    faces = face_cascade.detectMultiScale(gray, 1.1, 4)
    eyes = eye_cascade.detectMultiScale(gray, 1.1, 4)
    
    # Calculate overall image stats
    mean_b, mean_g, mean_r, _ = cv2.mean(img)
    lum = 0.299 * mean_r + 0.587 * mean_g + 0.114 * mean_b
    
    # Erythema Index calculation over non-background pixels
    r_norm = np.maximum(1, rgb[:, :, 0]) / 255.0
    g_norm = np.maximum(1, rgb[:, :, 1]) / 255.0
    ei_map = 100 * (np.log10(1.0 / g_norm) - np.log10(1.0 / r_norm))
    mean_ei = np.mean(ei_map)
    
    # Scleral Yellowing ratio (Hue 35-70, Sat >= 0.15, Brightness >= 40)
    hue = hsv[:, :, 0] # 0-180 in OpenCV
    sat = hsv[:, :, 1] / 255.0
    val = hsv[:, :, 2]
    
    # Yellow hue in OpenCV: 35/2 to 70/2 -> 17.5 to 35
    yellow_mask = (hue >= 17) & (hue <= 35) & (sat >= 0.15) & (val >= 40)
    yellow_ratio = np.sum(yellow_mask) / float(w * h)
    
    # Estimate Hemoglobin (Hb) based on Vytal continuous Erythema Index
    # clampedHb = 4.5 + meanEi * 0.85
    estimated_hb = 4.5 + mean_ei * 0.85
    clamped_hb = min(16.0, max(5.0, round(estimated_hb, 1)))
    
    # Lighting tier estimation
    if lum < 25:
        lighting_tier = "poor"
    elif lum > 215:
        lighting_tier = "overexposed"
    elif 25 <= lum < 70:
        lighting_tier = "dim"
    else:
        lighting_tier = "good"
        
    return {
        "filename": os.path.basename(img_path),
        "dimensions": f"{w}x{h}",
        "faces_detected": len(faces),
        "eyes_detected": len(eyes),
        "mean_rgb": [round(mean_r, 1), round(mean_g, 1), round(mean_b, 1)],
        "luminance": round(lum, 1),
        "lighting_tier": lighting_tier,
        "mean_erythema_index": round(float(mean_ei), 2),
        "estimated_hb_gdL": clamped_hb,
        "yellow_pixel_ratio": round(float(yellow_ratio) * 100, 2),
        "is_jaundiced_proxy": bool(yellow_ratio >= 0.18)
    }

results = []
for f in image_files:
    res = analyze_image(f)
    results.append(res)
    print(f"=== {f} ===")
    print(json.dumps(res, indent=2))
