import React, { useContext } from "react";
import { Context } from "../../context";
import { Product } from "./Product";
import { NoResult } from "../NoResult";
import styles from "./products.module.scss";

export function ProductList({ goods }) {
  const { searchValue, setProductData } = useContext(Context);

  const isAddCard = (event) => {
    const id = event.target.parentNode.id;

    goods.map((card) => {
      if (card._id === id) setProductData([card]);
    });
  }

  return (
    <section className={`${styles.product_list} ${searchValue ? styles.overlay : ''}`}>
      <div className={styles.product_list__content}>
        {goods.length ? (
          goods.map((product) => (
            <Product
              {...product}
              key={product._id}
              isAddCard={isAddCard}
            />
          ))
        ) : (
          <NoResult />
        )}
      </div>
    </section>
  );
}
