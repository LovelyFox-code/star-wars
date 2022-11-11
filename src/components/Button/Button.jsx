import React from "react";
import styles from "./button.module.css";
export default function Button({ children, onClick }) {
  return (
    <div className={styles.btn_container} onClick={onClick}>
      <button className={styles.btn}>{children}</button>
    </div>
  );
}
