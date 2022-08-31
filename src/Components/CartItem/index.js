import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { useCart } from "../../Context/CartContext";

const CartItem = ({ item }) => {

  const {
    cartProducts,
    setCartProducts,
    favouriteProducts,
    setFavouriteProducts,
    count,
    setCount,
    totalprice,
    setTotalPrice
  } = useCart();

  const handleaddToCartButton = () => {
    setCartProducts([]);
    const totalItem = cartProducts;
    localStorage.removeItem("cart");

    totalItem.forEach((ele) => {
      if (ele.id !== item.id) {
        setCartProducts((e) => [...e, ele]);
        localStorage.setItem("cart", JSON.stringify(cartProducts));
      }
    });
    setTotalPrice(JSON.parse(localStorage.getItem('price'))-item.price);
    localStorage.setItem('price',JSON.stringify(totalprice));
    setCount(count-1)
    // console.log(count);
    // localStorage.removeItem('fav');
    // localStorage.setItem('fav',JSON.stringify(favouriteProducts))
  };

  const handleAddToFavButton = () => {
    const fav = localStorage.getItem("fav")
      ? JSON.parse(localStorage.getItem("fav"))
      : [];
    let duplicate = true;
    fav.forEach((element) => {
      if (element.id === item.id) {
        duplicate = false;
      }
    });

    if (duplicate) {
      setFavouriteProducts((e) => [...e, item]);
      fav.push(item);
      localStorage.setItem("fav", JSON.stringify(fav));
    }
  };

  return (
    <div className={styles.card}>


      <div className={styles.cardLink}>
        <button className={styles.favButton} onClick={handleAddToFavButton}>
          <HeartIcon />
        </button>

        <div className={styles.cardHeader}>
          <Link to={`product/${item.id}`}>
            <img className={styles.cardImg} src={item.image} alt="" />
          </Link>
        </div>

        <div className={styles.cardBody}>
          <>
            <p className={styles.cardTitle}>
              <span className={styles.brand}>Brand,</span>
              {item.title}
            </p>
          </>
          <div className={styles.rating}>
            {[...Array(Math.round(item.rating.rate))].map((e, i) => (
              <StarIcon
                key={`star-${i}`}
                className={styles.starIcon}
                aria-hidden="true"
              />
            ))}
            {[...Array(5 - Math.round(item.rating.rate))].map((e, i) => (
              <StarIcon
                key={`star-${i}`}
                className={styles.emptyStarIcon}
                aria-hidden="true"
              />
            ))}
            <p className="text-xs ml-1 font-light mt-0.5">
              {item.rating.count}
            </p>
          </div>

          <div>
            <div className="my-auto">
              <span>${item.price}</span>
            </div>
          </div>

          <div className={styles.addToCart}>
            <button
              className={styles.addToCartButton}
              onClick={handleaddToCartButton}
            >
              <ShoppingCartIcon
                className={styles.shoppingCartIcon}
              ></ShoppingCartIcon>
              <span className={styles.buttonText}>Remove from cart!</span>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default CartItem;