import React from "react";
import { useFetch } from "../hooks/useFetch";
import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProductList/ProductList";
// import { Search } from "../components/Filter/Search";
import { Categorys } from "../components/Filter/Categorys";
import { Loading } from "../components/Loading";
import styles from "../App.module.scss";

export function ShopPage() {
  const { data, listGoods, loading } = useFetch('/api/products');

  return (
    <div className={styles.container_stores}>
      <Filter loading={loading} fetchProducts={data} />
      <div className={styles.container_products}>
        <Categorys fetchProducts={listGoods} loading={loading} />
        {/* <Search feachProducts={listGoods} loading={loading} /> */}
        {loading ? <Loading /> : <ProductList goods={listGoods} />}
      </div>
    </div>
  );
}
