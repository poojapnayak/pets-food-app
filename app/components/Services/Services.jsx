import React from "react";
import styles from "./Services.module.css";
import Image from "next/image";

const Services = () => {
  return (
    <div className={styles.services}>
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <div className={styles.servicesImage}>
            <Image
              src="/Images/Vector 164.png"
              alt="My Logo"
              width={15}
              height={22}
            />
          </div>
          <h1>Fresh Product</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies turpis proin nulla.
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.servicesImage}>
            <Image
              src="/Images/Group 5719.png"
              alt="My Logo"
              width={26}
              height={17}
            />
          </div>
          <h1>Fast Shipping, Always</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies turpis proin nulla.
          </p>
        </div>
        <div className={styles.service}>
          <div className={styles.servicesImage}>
            <Image
              src="/Images/Order@1x.png"
              alt="My Logo"
              width={20}
              height={20}
            />
          </div>
          <h1>Flexible Delivery</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies turpis proin nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
