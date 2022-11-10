import React from "react";
import styles from "./flex-container.module.css";
export default function FlexContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
