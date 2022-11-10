import React from "react";
import styles from "./crawl.module.css";
export default function Crawl({ children }) {
  return (
    <div className={styles.crawl_box}>
      <div className={styles.fade}></div>

      <section className={styles.star_wars}>
        <div className={styles.crawl}>{children}</div>
      </section>
    </div>
  );
}
