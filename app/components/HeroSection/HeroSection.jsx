import React from "react";
import styles from "./HeroSection.module.css";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className={styles["heroSection"]}>
      <Image
        src="/Images/furr 1.png"
        alt="My Logo"
        width={189.06}
        height={50}
        className={styles["hero-furr-image"]}
      />
      <h2>The only thing you need is all here</h2>
      <p>
        Sagittis in et purus euismod lorem nunc varius porta. Semper elit
        porttitor vestibulum, habitant duis arcu sit feugiat diam.
      </p>
      <button className={styles["heroSectionBtn"]}>SHOP NOW</button>
      <div className={styles["heroSection-dots"]}>
        <Image
          src="/Images/coolicon.png"
          alt="My Logo"
          width={10}
          height={10}
        />{" "}
        <Image
          src="/Images/coolicon.png"
          alt="My Logo"
          width={10}
          height={10}
          className={styles["heroSection-dot"]}
        />
        <Image
          src="/Images/coolicon.png"
          alt="My Logo"
          width={10}
          height={10}
          className={styles["heroSection-dot"]}
        />
        <Image
          src="/Images/coolicon.png"
          alt="My Logo"
          width={10}
          height={10}
          className={styles["heroSection-dot"]}
        />
      </div>
    </div>
  );
};

export default HeroSection;
