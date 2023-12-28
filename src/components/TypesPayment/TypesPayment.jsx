import React from "react";
import paypal from "../../assets/img/paypal.png";
import mastercard from "../../assets/img/mastercard.png";
import visa from "../../assets/img/visa.png";
import googlepay from "../../assets/img/googlepay.png";
import applepay from "../../assets/img/applepay.png";
import styles from "./typespayment.module.scss";

export function TypesPayment() {
  return (
    <section className={styles.types_payment}>
      <div className={styles.types_payment__content}>
        <h1 className={styles.title}>Pay by any convenient way for you!</h1>
        <div className={styles.list_types}>
          <div className={styles.list_types__col}>
            <img src={paypal} alt="PayPal" />
          </div>
          <div className={styles.list_types__col}>
            <img src={mastercard} alt="MasterCard" />
          </div>
          <div className={styles.list_types__col}>
            <img src={visa} alt="Visa" />
          </div>
          <div className={styles.list_types__row}>
            <div className={styles.list_types__col}>
              <img src={googlepay} alt="Google Pay" />
            </div>
            <div className={styles.list_types__col}>
              <img src={applepay} alt="Apple Pay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
