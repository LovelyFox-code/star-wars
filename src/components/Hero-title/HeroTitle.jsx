import React from "react";
import styles from "./hero-title.module.css";
export default function HeroTitle({ children }) {
  return <div className={styles.title}>{children}</div>;
}
