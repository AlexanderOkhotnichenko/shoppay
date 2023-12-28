import React, { useContext, useEffect, useState } from "react";
import { Product as SkeletonProduct } from "../components/Skeleton/Product";
import { Product } from "../components/Product/Product";
import { Context } from "../context";

export function ProductPage() {
  const { productData } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productData.length) setLoading(false);
  }, [productData]);

  return (
    <>
      {loading ? (
        <div style={{ padding: "2.5rem 3rem" }}>
          <SkeletonProduct />
        </div>
      ) : (
        <Product />
      )}
    </>
  );
}