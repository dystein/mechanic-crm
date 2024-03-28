import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.logoParent}>
        <Image
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo.svg"
          width={90}
          height={90}
        />

        <div className={styles.dashboardWrapper}>
          <h2 className={styles.dashboard1}>Dashboard</h2>
        </div>
      </div>
      <div className={styles.rightBar}>
        <button className={styles.addNew} id="addNew">
          <div className={styles.button}>Add New</div>
          <div className={styles.iconWrapper}>
            <img className={styles.icon} alt="" src="./public/icon.svg" />
          </div>
        </button>
        <div className={styles.buttonParent}>
          <img
            className={styles.buttonIcon}
            loading="lazy"
            alt=""
            src="./public/button.svg"
          />

          <img
            className={styles.userIcon}
            loading="lazy"
            alt=""
            src="./public/user@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
