import React from "react";
import styles from "./Explore.module.css";
import Image from "next/image";

const Explore = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.exploreParagraphTexts}>
        <h1>Explore #dubidoo</h1>
        <p>
          Simply tag <span className={styles.boldText}>@pet food</span> in your
          caption on Instagram or Twitter to be <br />
          featured on our website.
        </p>
      </div>
      <div className={styles.exploreContainer}>
        <div className={styles.exploreProduct}>
          <Image
            src="/Images/Rectangle-dog.png"
            alt="My Logo"
            width={405}
            height={502}
          />
          <div className={styles.imageTexts}>
            <p className={styles.imageTextsParag}>
              Simply tag <span className={styles.boldText}>@pet food</span> in
              your caption on Instagram or Twitter to be featured on our
              website.
            </p>
            <div className={styles.instaText}>
              <div>
                <p className={styles.instaTextParag}>Instagram User</p>
                <p>48 min ago</p>
              </div>
              <Image
                src="/Images/instagram.png"
                alt="My Logo"
                width={34.52}
                height={34.57}
              />
            </div>
          </div>
        </div>
        <div className={styles.exploreProduct}>
          <div className={styles.exploreProductrectangle}>
            <Image
              src="/Images/heart-icon.png"
              alt="My Logo"
              width={20}
              height={18}
            />
            <h1>
              “I think having an animal in your life makes you a better human.”{" "}
            </h1>
          </div>
          <div className={styles.instaText}>
            <div>
              <p className={styles.instaTextParag}>Instagram User</p>
              <p className={styles.instTextTime}>48 min ago</p>
            </div>
            <Image
              src="/Images/instagram.png"
              alt="My Logo"
              width={34.52}
              height={34.57}
            />
          </div>
          <div>
            <Image
              src="/Images/Rectangle-sleepdog.png"
              alt="My Logo"
              width={405}
              height={238}
            />
            <div className={styles.instaText}>
              <div>
                <p className={styles.instaTextParag}>Instagram User</p>
                <p>48 min ago</p>
              </div>
              <Image
                src="/Images/instagram.png"
                alt="My Logo"
                width={34.52}
                height={34.57}
              />
            </div>
          </div>
        </div>
        <div className={styles.exploreProduct}>
          <Image
            src="/Images/Rectangle-dogfood.png"
            alt="My Logo"
            width={405}
            height={494}
          />
          <div className={styles.imageTexts}>
            <p>
              Simply tag <span className={styles.boldText}>@pet food</span> in
              your caption on Instagram or Twitter to be featured on our
              website.
            </p>
            <div className={styles.instaText}>
              <div>
                <p className={styles.instaTextParag}>Instagram User</p>
                <p>48 min ago</p>
              </div>
              <Image
                src="/Images/instagram.png"
                alt="My Logo"
                width={34.52}
                height={34.57}
              />
            </div>
          </div>
        </div>
        <div className={styles.exploreProduct}>
          <Image
            src="/Images/Rectangle-babydog.png"
            alt="My Logo"
            width={405}
            height={328}
          />
          <div>
            <p>
              Simply tag @pet food in your caption on Instagram or Twitter to be
              featured on our website.
            </p>
            <div className={styles.instaText}>
              <div>
                <p className={styles.instaTextParag}>Instagram User</p>
                <p>48 min ago</p>
              </div>
              <Image
                src="/Images/instagram.png"
                alt="My Logo"
                width={34.52}
                height={34.57}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
