import React from "react";
import styles from "./ProductGallery.module.css";
import Image from "next/image";

const ProductGallery = () => {
  return (
    <div className={styles["productGallery"]}>
      <p className={styles["productGallery-title"]}>
        BASED ON VETERINARY DOCTOR&apos;S
      </p>
      <h2>Some Of Our Favourites To Care For Their Whole Health</h2>
      <div className={styles["productGallery-group"]}>
        <div className={styles["productGallery-item"]}>
          <Image
            src="/Images/Cat Fcae.png"
            alt="My Logo"
            width={24}
            height={24}
          />
          <p>CAT</p>
        </div>
        <div className={styles["productGallery-item"]}>
          <Image
            src="/Images/Dog Fcae.png"
            alt="My Logo"
            width={24}
            height={24}
          />
          <p>DOG</p>
        </div>
        <div className={styles["productGallery-item"]}>
          <Image
            src="/Images/Small Pets Face.png"
            alt="My Logo"
            width={24}
            height={24}
          />
          <p className={styles["no-wrap"]}>NEW BORN</p>
        </div>
        <div className={styles["productGallery-item"]}>
          <Image src="/Images/Fish.png" alt="My Logo" width={24} height={24} />
          <p>FISH</p>
        </div>
        <div className={styles["productGallery-item"]}>
          <Image src="/Images/Bird.png" alt="My Logo" width={24} height={24} />
          <p>BIRD</p>
        </div>
      </div>
      <div className={styles["productGallery-container"]}>
        <div className={styles["productGallery-image"]}>
          <Image
            src="/Images/pet-accessories-still-life-with-food-bowl-dog-leash 2.png"
            alt="My Logo"
            width={546}
            height={546}
            className={styles["productGallery-image1"]}
          />
          <p className={styles["food-combo"]}>ACCESSORIES + FOOD COMBO</p>
          <h3>OFCOURSE WE SALE PRODUCT WITH LOVE</h3>
          <button>Order Now</button>
        </div>
        <div className={styles["productGallery-yellowbox"]}>
          <h3>PEANUT BUTTER COOKIES</h3>
          <p>Lectus commodo pharetra, sit aliquam tristique neque in.</p>
          <button>Order Now</button>
          <Image
            src="/Images/50e77193-9aba-4c8f-97d3-f0882cefcb01 2.png"
            alt="My Logo"
            width={215}
            height={307}
            className={styles["productGallery-peanutImage"]}
          />
        </div>
        <div className={styles["productGallery-reactangles"]}>
          <div className={styles["productGallery-rectangles1"]}>
            <div>
              <p>Axel & blue</p>
              <h3>Made from the real chocolate ingidriant </h3>
              <button>Order Now</button>
            </div>
            <div className={styles["productGallery-rectangles1-right"]}>
              <Image
                src="/Images/Package-Design-Ellen-Degneres-7 1.png"
                alt="My Logo"
                width={200}
                height={263}
                className={styles["productGallery-meat"]}
              />
            </div>
          </div>
          <div className={styles["productGallery-rectangles2"]}>
            <div>
              <p>Axel & blue</p>
              <h3>Made from the real chocolate ingidriant </h3>
              <button>Order Now</button>
            </div>
            <div>
              <Image
                src="/Images/Package-Design-Ellen-Degneres-7 2.png"
                alt="My Logo"
                width={200}
                height={263}
                className={styles["productGallery-elencodog"]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
