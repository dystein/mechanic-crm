import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.frame}>
      <div className="logo-parent">
        <img
          className="logo-icon"
          loading="lazy"
          alt=""
          src="./public/logo.svg"
        />

        <div className="dashboard-wrapper">
          <h2 className="dashboard1">Dashboard</h2>
        </div>
      </div>
      <div className="right-bar">
        <button className="add-new" id="addNew">
          <div className="button">Add New</div>
          <div className="icon-wrapper">
            <img className="icon" alt="" src="./public/icon.svg" />
          </div>
        </button>
        <div className="button-parent">
          <img
            className="button-icon"
            loading="lazy"
            alt=""
            src="./public/button.svg"
          />

          <img
            className="user-icon"
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
