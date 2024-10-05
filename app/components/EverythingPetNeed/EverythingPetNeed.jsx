import React from "react";
import styles from "./EverythingPetNeed.module.css";
import Image from "next/image";

const EverythingPetNeed = () => {
  return (
    <div className={styles.everythingPetNeed}>
      <div className={styles.everythingPetNeedHeader}>
        <h2>
          Everything Your <p>Pet Needs</p>
        </h2>
        <button className={styles.everythingPetNeedBtn}>
          VIEW ALL PRODUCTS
          <Image
            src="/Images/thin_long_right.png"
            alt="My Logo"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className={styles.everythingPetNeedContainer}>
        <div className={styles.greyscaleImage}>
          <Image
            src="/Images/greyscale-shot-cute-hamster-covered-by-white-blanket 1.png"
            alt="My Logo"
            width={352.6}
            height={526}
          />
          <p>HEMI & RAT TA TAT</p>
        </div>
        <div className={styles.maxwellImage}>
          <Image
            src="/Images/maxwell-ingham-ghUwNQIVntU-unsplash 1.png"
            alt="My Logo"
            width={353}
            height={460}
          />
          <p>MEOW MEOW</p>
        </div>
        <div className={styles.dogsImage}>
          <Image
            src="/Images/w2x4ANRu4m 1.png"
            alt="My Logo"
            width={352.6}
            height={526}
          />
          <p>FOR DOGS & DOGS LOVER</p>
        </div>
        <div className={styles.birdsImage}>
          <Image
            src="/Images/kevin-mueller-aeNg4YA41P8-unsplash 1.png"
            alt="My Logo"
            width={353}
            height={460}
          />
          <p>BIRDS LOVER</p>
        </div>
        <div className={styles.petAccesories}>
          <Image
            src="/Images/xBOUOuCjAg 1.png"
            alt="My Logo"
            width={352.6}
            height={526}
          />
          <p>PET ACCESSORIES</p>
        </div>
      </div>
    </div>
  );
};

export default EverythingPetNeed;
