import React from "react";
import styles from "./PremiumFood.module.css";
import Image from "next/image";

const PremiumFood = () => {
  return (
    <div className={styles["premiumFood"]}>
      <div className={styles["premiumFood-left"]}>
        <Image
          src="/Images/Food-4.png"
          alt="My Logo"
          width={53.17}
          height={52}
          style={{
            position: "absolute",
            top: "52px",
            left: "18px",
          }}
        />
        <div className={styles["premiumFood-image-container"]}>
          <Image
            src="/Images/Vector 165.png"
            alt="My Logo"
            width={649.3}
            height={630}
          />
          <Image
            src="/Images/Group 1 1.png"
            alt="My Logo"
            width={606.35}
            height={534}
            className={styles["overlay-image"]}
          />
        </div>
        <Image
          src="/Images/Food-4.png"
          alt="My Logo"
          width={117.59}
          height={126}
          style={{
            position: "absolute",
            bottom: "-7px",
            left: "18px",
          }}
        />
      </div>
      <Image
        src="/Images/Group 2 1.png"
        alt="My Logo"
        width={249.49}
        height={187}
        className={styles["premiumFood-organic-image"]}
      />
      <Image
        src="/Images/Food-4.png"
        alt="My Logo"
        width={26}
        height={26}
        style={{
          position: "absolute",
          bottom: "142px",
          right: "853px",
        }}
      />
      <div className="premiumFood-right">
        <Image
          src="/Images/Food-3.png"
          alt="My Logo"
          width={91}
          height={98}
          style={{
            position: "absolute",
            top: "40px",
            right: "100px",
          }}
        />
        <div className={styles["premiumFood-text-container"]}>
          <h1>Dogs do speak, but only to those who know how to listen.</h1>
          <p>
            Sweet roll ice cream powder candy canes ice cream donut pudding
            biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
            fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding
            biscuit caramels topb
          </p>
          <button>EXPLORE NOW</button>
        </div>
        <Image
          src="/Images/Food-4.png"
          alt="My Logo"
          width={53.17}
          height={52}
          style={{
            position: "absolute",
            bottom: "140px",
            right: "100px",
          }}
        />
      </div>
    </div>
  );
};

export default PremiumFood;
