import React from "react";
import styles from "./Box.module.css";

export default function Box({ children, onClick, style, size }) {
  let classNames = styles.box_container;
  if (size) {
    classNames = `${styles.box_container} ${styles["box_size_" + size]}`;
  }
  return (
    <div className={classNames} onClick={onClick} style={style}>
      <div className={styles.box_container_content}>{children}</div>
    </div>
  );
}
