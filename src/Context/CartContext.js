const { createContext, useContext, useState, useEffect } = require("react");

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [favouriteProducts, setFavouriteProducts] = useState([]);
  const [waiting, setWaiting] = useState(false);
  const [count, setCount] = useState(0); 
  const [totalPrice,setTotalPrice] = useState(0);
  
//   const [isCart, setIsCart] = useState();
//   const [isFavourite, setIsFavourite] = useState();

  useEffect(()=>{
    const price = localStorage.getItem("price");
    if (price) {
        setTotalPrice(parseInt(price));
    }
    else{
        localStorage.setItem('price',JSON.stringify(0));
    }
  },[])

  useEffect(() => {
    const cart = (localStorage.getItem("cart"));
    if (cart) {
      setCartProducts(JSON.parse(cart));
      setCount(JSON.parse(cart).length)
    }
  }, []);

  useEffect(() => {
    const favourite = JSON.parse(localStorage.getItem("fav"));
    if (favourite) {
      setFavouriteProducts(favourite);
    }
  }, []);
  // items state
  // store items in localstorage - localStorage.setItem('key',value); localStorage.getItem('key');
  // make functions addToCart and removeFromCart

  const values = {
    cartProducts,
    setCartProducts,
    favouriteProducts,
    setFavouriteProducts,
    waiting,
    setWaiting,
    count,
    setCount,
    totalPrice,
    setTotalPrice
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
