import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTexts}>
        <div className={styles.footerTextsLeftContainer}>
          <div className={styles.footerTextLeft}>
            <Image
              src="/Images/Logo_Petfood.png"
              alt="My Logo"
              width={189.06}
              height={50}
              className={styles["footerLogo"]}
            />
            <p>© 2021 PetStore. All Rights Reserved.</p>
          </div>
          <p>
            Egestas nec etiam maecenas aliquam a, lorem ornare eget non nec
            placerat elit a enim fermentum ac integer eget ante mattis cursus
            purus volutpat
          </p>
          <div className={styles.footerContactSection}>
            <div className={styles.footerContacts}>
              <Image
                src="/Images/emailicon.png"
                alt="My Logo"
                width={20}
                height={16}
                className={styles["logo-petfood"]}
              />
              <p>sayhi@dubidoo.com</p>
            </div>
            <div className={styles.footerContacts}>
              <Image
                src="/Images/callicon.png"
                alt="My Logo"
                width={16}
                height={16}
                className={styles["logo-petfood"]}
              />
              <p>(252) 555-0126</p>
            </div>
          </div>
        </div>
        <div className={styles.footerMiddle}>
          <h2>Our Service</h2>
          <div className={styles.footerLinks}>
            <a href="#" class="footer-links">
              TRACK ORDER
            </a>
            <a href="#" class="footer-links">
              RETURNS
            </a>
            <a href="#" class="footer-links">
              SHIPPING INFO
            </a>
            <a href="#" class="footer-links">
              CERTIFICATES
            </a>
          </div>
        </div>
        <div className={styles.footerMiddle2}>
          <h2>Pet wise food</h2>
          <div className={styles.footLinkLists}>
            <div className={styles.footerLinksList}>
              <a href="">DOG</a>
              <a href="">CAT</a>
              <a href="">MAMMALS</a>
              <a href="">HAMSTERS</a>
              <a href="">EAGLE</a>
            </div>
            <div className={styles.footerLinksList}>
              <a href="">OWL</a>
              <a href="">GOLDFISH</a>
            </div>
          </div>
        </div>
        <div className={styles.footerSocialMediaContainer}>
          <h2>Social Media</h2>
          <div className={styles.footerSocialMedia}>
            <Image
              src="/Images/facebookicon.png"
              alt="My Logo"
              width={20}
              height={19.88}
              className={styles.footerSocialMedia}
            />
            <Image
              src="/Images/instaicon.png"
              alt="My Logo"
              width={18}
              height={18}
              className={styles.footerSocialMedia}
            />
            <Image
              src="/Images/youtubeicon.png"
              alt="My Logo"
              width={20.02}
              height={14}
              className={styles.footerSocialMedia}
            />
            <Image
              src="/Images/linkedInicon.png"
              alt="My Logo"
              width={18}
              height={18}
              className={styles.footerSocialMedia}
            />
          </div>
        </div>
      </div>
      <div className={styles.footerAd}>
        <a href="">Privacy Policy</a>
        <p>|</p>
        <a href="">T&C</a>
        <p>|</p>
        <a href="">FAQ</a>
        <p>|</p>
        <a href="">Return Policy</a>
      </div>
    </div>
  );
};

export default Footer;
