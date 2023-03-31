import React from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.container}>
      <div className={styles.gradient}></div>
      <img src="Logo.gif" alt="Loading..." className={styles.logo} loop />
    </div>
  );
}

export default Loading;
