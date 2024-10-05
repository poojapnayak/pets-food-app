import React from "react";
import styles from "./ConnectUs.module.css";
import Image from "next/image";

const ConnectUs = () => {
  return (
    <div className={styles.connectUs}>
      <div className={styles.connectUsLeft}>
        <h1>Stay connected with us.</h1>
        <p>
          Choose your pet and subscribe! Receive exclusive discounts to always
          buy at the best price in Petshop.
        </p>
        <div className={styles.checkboxContainer}>
          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>Dog</p>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>Cat</p>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>Small Pets</p>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>Fish</p>
          </div>
          <div className={styles.checkBox}>
            <input type="checkbox" />
            <p>Birds</p>
          </div>
        </div>
        <div className={styles.newletterBtn}>
          <input type="text" placeholder="Signup for Newsletter" />
          <button>Submit</button>
        </div>
      </div>
      <div className={styles.connectUsRight}>
        <Image
          src="/Images/connect-dog.png"
          alt="My Logo"
          width={404}
          height={398}
        />
      </div>
    </div>
  );
};

export default ConnectUs;
