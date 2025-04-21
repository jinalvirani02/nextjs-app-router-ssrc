"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

export default function Home() {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://random-data-api.com/api/v2/appliances`);
      const data = await res.json();
      data.randomNum = Math.floor(Math.random() * 100);
      setProduct(data);
    }

    fetchProduct();
  }, []);

  if (!product) {
    return <p className={styles.page}>Loading...</p>;
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h3>Product details</h3>
        <div key={`${product.id}`}>
          <p>randomNum: {product.randomNum}</p>
          <p>id: {product.id}</p>
          <p>uid: {product.uid}</p>
          <p>brand: {product.brand}</p>
          <p>equipment: {product.equipment}</p>
        </div>
      </main>
    </div>
  );
}
