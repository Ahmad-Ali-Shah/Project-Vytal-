import cv2
import numpy as np
import os

images_dir = "/home/ahmad-ali/Downloads/Vital-apple-health-redesign (1)/images"
os.makedirs(images_dir, exist_ok=True)

def create_subconjunctival_hemorrhage_image(filename):
    """Sclera image with blood-red subconjunctival hemorrhage patch + yellow sclera background."""
    w, h = 320, 240
    # Yellow sclera base (BGR: B=70, G=195, R=240)
    base = np.zeros((h, w, 3), dtype=np.uint8)
    base[:, :] = (70, 195, 240)
    
    # Blood-red hemorrhage spot on left side (BGR: B=35, G=30, R=220)
    cv2.ellipse(base, (80, 120), (50, 35), 15, 0, 360, (35, 30, 220), -1)
    cv2.GaussianBlur(base, (7, 7), 2, dst=base)
    
    path = os.path.join(images_dir, filename)
    cv2.imwrite(path, base)
    print(f"[CREATED] {filename} (Subconjunctival Hemorrhage)")

def create_scleral_melanocytosis_image(filename):
    """Sclera image with dark melanin spots (Nevus of Ota) + yellow icterus sclera."""
    w, h = 320, 240
    # Yellow sclera base (BGR: B=80, G=200, R=238)
    base = np.zeros((h, w, 3), dtype=np.uint8)
    base[:, :] = (80, 200, 238)
    
    # Dark brown/black melanin freckles (BGR: B=35, G=40, R=50)
    cv2.circle(base, (70, 80), 18, (35, 40, 50), -1)
    cv2.circle(base, (110, 160), 12, (30, 35, 45), -1)
    cv2.GaussianBlur(base, (5, 5), 1, dst=base)
    
    path = os.path.join(images_dir, filename)
    cv2.imwrite(path, base)
    print(f"[CREATED] {filename} (Scleral Melanocytosis)")

def create_split_color_temp_face_image(filename):
    """Face image with dual color temperature lighting (Warm 2700K left, Blue 6500K right)."""
    w, h = 320, 240
    base = np.zeros((h, w, 3), dtype=np.float32)
    
    for x in range(w):
        factor = x / float(w) # 0 (left) to 1 (right)
        # Left side: Warm yellow light (R=220, G=180, B=100)
        # Right side: Blue skylight (R=120, G=150, B=230)
        r = 220 * (1 - factor) + 120 * factor
        g = 180 * (1 - factor) + 150 * factor
        b = 100 * (1 - factor) + 230 * factor
        base[:, x] = [b, g, r] # BGR
        
    final_img = np.clip(base, 0, 255).astype(np.uint8)
    path = os.path.join(images_dir, filename)
    cv2.imwrite(path, final_img)
    print(f"[CREATED] {filename} (Split Color Temp)")

def create_phototherapy_blue_jaundice_image(filename):
    """Neonatal jaundice sclera under 460 nm NICU phototherapy blue light cast."""
    w, h = 320, 240
    # Jaundice yellow tissue (RGB: 240, 200, 80) illuminated by heavy blue lamp (B+130, R-80)
    # BGR: B=220, G=160, R=140
    base = np.zeros((h, w, 3), dtype=np.uint8)
    base[:, :] = (220, 160, 140)
    cv2.GaussianBlur(base, (5, 5), 1, dst=base)
    path = os.path.join(images_dir, filename)
    cv2.imwrite(path, base)
    print(f"[CREATED] {filename} (Phototherapy Blue Cast)")

def create_cyanotic_mucosa_image(filename):
    """Cyanotic mucosal tissue (blue/purple hypoxemic shift, SpO2 < 85%)."""
    w, h = 320, 240
    # Bluish purple mucosal tissue (BGR: B=170, G=115, R=105)
    base = np.zeros((h, w, 3), dtype=np.uint8)
    base[:, :] = (170, 115, 105)
    cv2.GaussianBlur(base, (5, 5), 1, dst=base)
    path = os.path.join(images_dir, filename)
    cv2.imwrite(path, base)
    print(f"[CREATED] {filename} (Cyanotic Mucosa)")

def generate_difficult_suite_images():
    create_subconjunctival_hemorrhage_image("difficult_subconjunctival_hemorrhage.png")
    create_scleral_melanocytosis_image("difficult_scleral_melanocytosis.png")
    create_split_color_temp_face_image("difficult_split_color_temp.png")
    create_phototherapy_blue_jaundice_image("difficult_phototherapy_blue_jaundice.png")
    create_cyanotic_mucosa_image("difficult_cyanotic_mucosa.png")

if __name__ == "__main__":
    generate_difficult_suite_images()
