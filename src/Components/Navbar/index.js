import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";
import { useProduct } from "../../Context/ProductContext";
import styles from "./styles.module.css";

const Navbar = () => {
  const { categories, setCategory } = useProduct();
  const { count } = useCart();

  return (
    <>
      <div className="bg-zinc-900/10 mt-3 mx-auto h-[2px] shadow-sm"></div>
      <div className={styles.categoryNav}>
        <div className={styles.link}>
          <Link to="favourite">
            <HeartIcon className={styles.favButton}></HeartIcon>
          </Link>
        </div>
        <div className={styles.link}>
          <p className="text-red-600 -mb-3 mr-2 float-right">{count}</p>
          <Link to="cart">
            <ShoppingCartIcon
              className={styles.shoppingCartIcon}
            ></ShoppingCartIcon>
          </Link>
        </div>
      </div>
      <nav className={styles.categoryNav}>
        <>
          <Link to="/" className={styles.categoryLink}>
            <h1
              className="truncate capitalize mx-4"
              onClick={() => setCategory("")}
            >
              All
            </h1>
          </Link>
        </>
        {categories &&
          categories.map((i, index) => (
            <div key={index}>
              <Link to={`/${i}`} className={styles.categoryLink}>
                <h1
                  className="truncate capitalize mx-4"
                  onClick={() => setCategory(i)}
                >
                  {i}
                </h1>
              </Link>
            </div>
          ))}
      </nav>
      <div className="bg-zinc-900/10 mx-auto h-[2px] shadow-sm"></div>
    </>
  );
};

export default Navbar;
