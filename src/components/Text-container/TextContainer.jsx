import React from "react";
import styles from "./text-container.module.css";

export default function TextContainer({ children }) {
  return <div className={styles.text_container}>{children}</div>;
}
