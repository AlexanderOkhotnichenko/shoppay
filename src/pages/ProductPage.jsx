import React, { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { Product as SkeletonProduct } from "../components/Skeleton/Product";
import { Product } from "../components/Product/Product";

export function ProductPage() {
  const [loading, setLoading] = useState(true);

  const { data } = useFetch('/api/products');

  useEffect(() => {
    if (data.length) setLoading(false);
  }, [data]);

  return (
    <>
      {loading ? (
        <div style={{ padding: "2.5rem 3rem" }}>
          <SkeletonProduct />
        </div>
      ) : (
        <Product products={data} />
      )}
    </>
  );
}