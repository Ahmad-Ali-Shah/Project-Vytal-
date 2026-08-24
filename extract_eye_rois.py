import cv2

def crop_and_save_exact_rois():
    # 1. images (3).jpeg -> Palpebral conjunctiva ROI (Grid 0,0)
    img3 = cv2.imread("images (3).jpeg")
    if img3 is not None:
        h, w, _ = img3.shape
        crop3 = img3[0:int(h/3), 0:int(w/3)]
        cv2.imwrite("images/real_conjunctiva_roi_3.png", crop3)
        print("Updated images/real_conjunctiva_roi_3.png")

    # 2. images (4).jpeg -> Facial baseline & healthy perfusion ROI
    img4 = cv2.imread("images (4).jpeg")
    if img4 is not None:
        cv2.imwrite("images/real_face_roi_4.png", img4)
        print("Updated images/real_face_roi_4.png")

    # 3. images (5).jpeg -> Severe pale conjunctiva ROI (Grid 1,0)
    img5 = cv2.imread("images (5).jpeg")
    if img5 is not None:
        h, w, _ = img5.shape
        crop5 = img5[int(h/3):int(2*h/3), 0:int(w/3)]
        cv2.imwrite("images/real_anemia_roi_5.png", crop5)
        print("Updated images/real_anemia_roi_5.png")

    # 4. images (6).jpeg -> Scleral icterus eye ROI (Grid 0,0)
    img6 = cv2.imread("images (6).jpeg")
    if img6 is not None:
        h, w, _ = img6.shape
        crop6 = img6[0:int(h/3), 0:int(w/3)]
        cv2.imwrite("images/real_sclera_roi_6.png", crop6)
        print("Updated images/real_sclera_roi_6.png")

if __name__ == "__main__":
    crop_and_save_exact_rois()
