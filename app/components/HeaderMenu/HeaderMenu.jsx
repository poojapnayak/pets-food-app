import React from "react";
import styles from "./HeaderMenu.module.css";
import Link from "next/link";

//Images
import Image from "next/image";

const HeaderMenu = () => {
  return (
    <div className="headerMenu">
      <div className={styles.headerMenuAd}>
        <Image
          src="/Images/Vector 18.png"
          alt="My Logo"
          width={6}
          height={12}
        />
        <p>Free same-day delivery on orders $35+ when you order by 2PM.</p>
        <Image
          src="/Images/Vector 17.png"
          alt="My Logo"
          width={6}
          height={12}
        />
      </div>
      <div className="menuBG">
        <Image
          src="/Images/Logo_Petfood.png"
          alt="My Logo"
          width={189.06}
          height={50}
          className={styles["logo-petfood"]}
        />
        <ul className={styles["header-menu-list"]}>
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            className={styles["header-dropdown-image"]}
          >
            Pets Food
            <Image
              src="/Images/chevron_big_down.png"
              alt="My Logo"
              width={24}
              height={24}
            />
          </Link>
          <Link
            href="/"
            style={{ textDecoration: "none" }}
            className={styles["header-dropdown-image"]}
          >
            Accessories
            <Image
              src="/Images/chevron_big_down.png"
              alt="My Logo"
              width={24}
              height={24}
            />
          </Link>
        </ul>
        <div className={styles["searchText-container"]}>
          <Image
            src="/Images/search_icon.png"
            alt="My Logo"
            width={22.14}
            height={22.14}
            className={styles["searchText-container-image"]}
          />
          <p className={styles["searchText"]}>Search For Product</p>
        </div>
        <div className={styles["headerMenu-images"]}>
          <Image
            src="/Images/heart_line_.png"
            alt="My Logo"
            width={32}
            height={32}
            className={styles["heart-image"]}
          />
          <Image
            src="/Images/user.png"
            alt="My Logo"
            width={32}
            height={32}
            className={styles["user-image"]}
          />
          <Image
            src="/Images/Cat_bag.png"
            alt="My Logo"
            width={32}
            height={32}
            className={styles["cat-bag-image"]}
          />
          <div className={styles["cat-bag-count"]}>1</div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
