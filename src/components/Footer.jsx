import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}>
        <div className={styles.line}>
          <div className={styles.logo}></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
