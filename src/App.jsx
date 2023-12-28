import React, { useEffect, useState } from "react";
import axios from "./axios";
import { Context } from "./context";
import { routers } from "./routers";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer";
import styles from "./App.module.scss";

function App() {
  // FILTERES PAGE STORES
  const [selectedSize, setSelectedSize] = useState([
    { id: 1, checked: false, label: "XS" },
    { id: 2, checked: false, label: "SM" },
    { id: 3, checked: false, label: "MD" },
    { id: 4, checked: false, label: "LG" },
    { id: 5, checked: false, label: "XL" },
  ]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([0, 60]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  const [listGoods, setListGoods] = useState([]);
  // CARD
  const [productData, setProductData] = useState([]);
  const [selectedOptionSize, setSelectedOptionSize] = useState('');

  return (
    <div className={styles.app}>
      <Context.Provider
        value={{
          selectedSize,
          setSelectedSize,
          selectedColor,
          setSelectedColor,
          selectedPrice,
          setSelectedPrice,
          selectedCategory,
          setSelectedCategory,
          searchValue,
          setSearchValue,

          productData,
          setProductData,
          selectedOptionSize,
          setSelectedOptionSize,

          listGoods,
          setListGoods,
        }}
      >
        <Header />
        <Main>{routers()}</Main>
        <Footer />
      </Context.Provider>
    </div>
  );
}

export default App;
