import cv2
import numpy as np
import os

images_dir = "/home/ahmad-ali/Downloads/Vital-apple-health-redesign (1)/images"
os.makedirs(images_dir, exist_ok=True)

def add_camera_noise_and_lighting(img, lux_level=100, noise_std=3, glare=False):
    """Applies realistic camera sensor noise, lighting gradients, and specular glare."""
    h, w, c = img.shape
    float_img = img.astype(np.float32)
    
    # Luminance scaling based on lux level
    lum_mult = np.clip(lux_level / 100.0, 0.1, 2.2)
    float_img = float_img * lum_mult
    
    # Lighting gradient
    x = np.linspace(-1, 1, w)
    y = np.linspace(-1, 1, h)
    xx, yy = np.meshgrid(x, y)
    grad = 1.0 + 0.1 * xx - 0.05 * yy
    for ch in range(3):
        float_img[:, :, ch] *= grad
        
    # Glare spot
    if glare:
        center_x, center_y = int(w * 0.7), int(h * 0.3)
        radius = int(min(w, h) * 0.25)
        y_grid, x_grid = np.ogrid[:h, :w]
        dist = np.sqrt((x_grid - center_x)**2 + (y_grid - center_y)**2)
        glare_mask = np.clip(1.0 - dist / radius, 0, 1) ** 2
        for ch in range(3):
            float_img[:, :, ch] += glare_mask * 150.0
            
    # Gaussian noise
    noise = np.random.normal(0, noise_std, (h, w, c))
    float_img = np.clip(float_img + noise, 0, 255)
    
    return float_img.astype(np.uint8)

def create_conjunctiva_image(filename, r, g, b, lux=100, noise=3):
    """Generates palpebral conjunctiva tissue image with capillary pattern (r, g, b input)."""
    w, h = 320, 240
    # BGR order for OpenCV
    bgr = (int(b), int(g), int(r))
    base = np.zeros((h, w, 3), dtype=np.uint8)
    base[:, :] = bgr
    
    # Add subtle capillary patterns
    for _ in range(8):
        pt1 = (np.random.randint(0, w), np.random.randint(0, h))
        pt2 = (np.random.randint(0, w), np.random.randint(0, h))
        cap_bgr = (int(max(0, b - 20)), int(max(0, g - 30)), int(min(255, r + 20)))
        cv2.line(base, pt1, pt2, cap_bgr, 1)
        
    cv2.GaussianBlur(base, (5, 5), 1, dst=base)
    final_img = add_camera_noise_and_lighting(base, lux_level=lux, noise_std=noise)
    path = os.path.join(images_dir, filename)
    cv2.imwrite(path, final_img)
    print(f"[CREATED] {filename} (R:{r}, G:{g}, B:{b})")

def create_sclera_image(filename, r, g, b, lux=100, noise=3, add_iris=True, glare=False):
    """Generates eye sclera image (r, g, b input)."""
    w, h = 320, 240
    bgr = (int(b), int(g), int(r))
    base = np.zeros((h, w, 3), dtype=np.uint8)
    base[:, :] = bgr
    
    if add_iris:
        center = (int(w * 0.85), int(h * 0.5))
        cv2.circle(base, center, 65, (120, 60, 40), -1) # Iris
        cv2.circle(base, center, 25, (10, 10, 10), -1) # Pupil
        
    cv2.GaussianBlur(base, (5, 5), 1, dst=base)
    final_img = add_camera_noise_and_lighting(base, lux_level=lux, noise_std=noise, glare=glare)
    path = os.path.join(images_dir, filename)
    cv2.imwrite(path, final_img)
    print(f"[CREATED] {filename} (R:{r}, G:{g}, B:{b})")

def generate_all_suite_images():
    # Conjunctival Anemia spectrum (R, G, B inputs mapped to Erythema Index)
    create_conjunctiva_image("real_anemia_severe_pale.png", 245, 238, 232)     # Severe pale mucosal (Hb ~ 5.6, Tier RED)
    create_conjunctiva_image("real_anemia_moderate_pale.png", 232, 208, 198)   # Moderate pale (Hb ~ 8.5, Tier ORANGE)
    create_conjunctiva_image("real_anemia_mild_pallor.png", 220, 170, 160)      # Mild pallor (Hb ~ 8.8, Tier ORANGE)
    create_conjunctiva_image("real_anemia_normal_red.png", 205, 65, 60)         # Normal healthy red (Hb ~ 14.5, Tier GREEN)
    create_conjunctiva_image("real_anemia_hyperemic_red.png", 225, 35, 30)     # Hyperemic red (Hb ~ 16.0, Tier GREEN)
    
    # Scleral Jaundice spectrum (R, G, B inputs)
    create_sclera_image("real_jaundice_severe_yellow.png", 240, 195, 70)       # Deep yellow (isJaundiced: true)
    create_sclera_image("real_jaundice_moderate_yellow.png", 235, 200, 100)   # Moderate yellow
    create_sclera_image("real_jaundice_mild_icterus.png", 230, 205, 130)      # Mild yellow threshold
    create_sclera_image("real_jaundice_normal_white.png", 240, 238, 235)      # Normal clear white
    create_sclera_image("real_jaundice_subconjunctival.png", 220, 75, 70)     # Subconjunctival red

    # Edge cases
    create_conjunctiva_image("real_edge_low_lux_anemia.png", 225, 205, 200, lux=15)
    create_sclera_image("real_edge_glare_jaundice.png", 230, 190, 90, glare=True)
    create_conjunctiva_image("real_edge_noisy_sensor.png", 215, 175, 170, noise=20)

if __name__ == "__main__":
    generate_all_suite_images()
