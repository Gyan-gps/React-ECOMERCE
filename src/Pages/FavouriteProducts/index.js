import React, {} from 'react'
import { useCart } from '../../Context/CartContext';
import Favourite from '../../Components/Favourite';
import styles from './styles.module.css';

const FavouriteProducts = () => {
    // const favourite = JSON.parse(localStorage.getItem('fav'));
    const {favouriteProducts, waiting} = useCart();
  return (
    <div className={styles.cardGroup}>
        {
            waiting ? (<h1>loading...</h1>):
            favouriteProducts.map((item)=>{
                    return (
                        <Favourite item={item} key={item.id}/>
                    )
                })
        }
    </div>
  )
}

export default FavouriteProducts
