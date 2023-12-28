import React from "react";
import { Link } from "react-router-dom";
import styles from "./total.module.scss";

export function Total({ total }) {
  return (
    <section className={styles.total}>
      <div className={styles.row}>
        <h2 className={styles.title}>Total</h2>
        <span className={styles.price}>${total}</span>
      </div>
      <Link to={"#"} className={styles.checkout}>Proceed to order</Link>
    </section>
  );
}
