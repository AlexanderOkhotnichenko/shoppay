import React, { useContext, useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { Context } from "../../context";
import { Select } from "../Select";
import styles from "./product.module.scss";

export function Product() {
  const { productData, selectedOptionSize, setSelectedOptionSize } = useContext(Context);
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const [selectedCount, setSelectedCount] = useState(1);
  const [selectedImg, setSelectedImg] = useState(productData[0]?.img?.src?.front);
  const [listSize, setListSize] = useState([]);
  const auth = cookies.get("token") && cookies.get("user");

  useEffect(() => {
    if (productData.length) {
      productData.map(({ size }) => {
        setListSize(size);
      });

      setSelectedOptionSize(listSize[0]);
    }
  }, [productData, listSize]);

  return (
    <section className={styles.product} id={productData[0]?._id}>
      <div className={styles.product__content}>
        <div className={styles.left}>
          <div className={styles.gallery_hero}>
            <img
              src={productData[0]?.img?.src?.front}
              alt={productData[0]?.img?.alt?.front}
              onClick={() => setSelectedImg(productData[0]?.img?.src?.front)}
            />
            <img
              src={productData[0]?.img?.src?.back}
              alt={productData[0]?.img?.alt?.back}
              onClick={() => setSelectedImg(productData[0]?.img?.src?.back)}
            />
          </div>
          <div className={styles.main_hero}>
            <img src={selectedImg} alt={productData[0]?.img?.alt?.front} />
          </div>
        </div>
        <div className={styles.right}>
          <h1 className={styles.title}>{productData[0]?.title}</h1>
          <div className={styles.price}>
            {productData[0]?.price?.old && (
              <span className={styles.price__old}>
                <s>${productData[0]?.price?.old}</s>
              </span>
            )}
            <span className={styles.price__new}>
              ${productData[0]?.price?.new}
            </span>
          </div>
          <p className={styles.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius harum
            ipsum libero? Ea soluta laudantium placeat voluptatibus, voluptas
            dolores commodi dignissimos, similique sunt, earum praesentium qui
            culpa sapiente laboriosam iure.
          </p>
          {auth && <Select options={listSize} />}
          {!auth && (
            <span className={styles.error_message}>
              You must be logged in to make a purchase!
            </span>
          )}
          {auth && (
            <div className={styles.quantity}>
              <button
                type="button"
                className={styles.minus}
                onClick={() =>
                  setSelectedCount((prev) => (prev === 1 ? 1 : prev - 1))
                }
              >
                <FaMinus />
              </button>
              <span className={styles.count}>{selectedCount}</span>
              <button
                type="button"
                className={styles.plus}
                onClick={() => setSelectedCount((prev) => prev + 1)}
              >
                <FaPlus />
              </button>
            </div>
          )}
          {auth && (
            <button
              type="button"
              className={styles.add_button}
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: productData[0]._id,
                    img: productData[0].img,
                    title: productData[0].title,
                    price: productData[0].price,
                    category: productData[0].category,
                    size: selectedOptionSize,
                    color: productData[0].color,
                    selectedCount,
                  })
                )
              }
            >
              Add to cart
            </button>
          )}
          <hr className={styles.line} />
          <table className={styles.table}>
            <tbody className={styles.tbody}>
              <tr className={styles.tr}>
                <td className={styles.td}>Category:</td>
                <td className={styles.td}>{productData[0]?.category}</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Sizes:</td>
                {listSize.map((item, index) => (
                  <td key={index} className={styles.td}>
                    {item}
                  </td>
                ))}
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Color:</td>
                <td className={styles.td}>
                  <span
                    className={styles.circle}
                    style={{ background: productData[0].color }}
                  ></span>
                </td>
                <td className={styles.td}>{productData[0]?.color}</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>Price:</td>
                <td className={styles.td}>${productData[0]?.price?.new}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
