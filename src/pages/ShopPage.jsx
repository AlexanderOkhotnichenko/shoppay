import React, { useContext } from "react";
import { useFetch } from "../hooks/useFetch";
import { Filter } from "../components/Filter";
import { ProductList } from "../components/ProductList/ProductList";
// import { Search } from "../components/Filter/Search";
import { Categorys } from "../components/Filter/Categorys";
import { Loading } from "../components/Loading";
import styles from "../App.module.scss";
import { NavPagination } from "../components/Filter/NavPagination";
import { Context } from "../context";

export function ShopPage() {
  const { currentPage, setCurrentPage } = useContext(Context);
  const { data, listGoods, loading } = useFetch('/api/products');

  // PAGINATION PAGE
  const goodsPerPage = 8;
  const lastIndex = currentPage * goodsPerPage;
  const firstIndex = lastIndex - goodsPerPage;
  const pageCount = Math.ceil(listGoods.length / goodsPerPage);
  const numbers = [...Array(pageCount + 1).keys()].slice(1);
  const result = listGoods.slice(firstIndex, lastIndex);

  return (
    <div className={styles.container_stores}>
      <Filter loading={loading} fetchProducts={data} />
      <div className={styles.container_products}>
        <Categorys fetchProducts={result} loading={loading} />
        {/* <Search feachProducts={listGoods} loading={loading} /> */}
        {loading ? <Loading /> : <ProductList goods={result} />}
        <NavPagination paginationCount={numbers} pageCount={pageCount} />
      </div>
    </div>
  );
}
