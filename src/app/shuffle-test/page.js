import Image from "next/image";
import styles from "../page.module.css";

export default async function Home() {
  const res = await fetch(`https://random-data-api.com/api/v2/appliances`)
  console.log(res)
  const product = await res.json();
  product.randomNum = Math.floor(Math.random() * 100);
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