import './App.css'
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Header from './components/Header'
import AppRoutes from './AppRoutes';
import { addToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import modalStyles from "./components/Modal/Modal.module.scss";
import { useImmer } from "use-immer";
import axios from 'axios';

function App() {
  const MAIN_URL = 'https://fakestoreapi.com/products/';
  const [products, setProducts] = useState([]);
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [error, setError] = useState(null);
  const [cart, updateCart] = useImmer([]);
  const [favorite, updateFavorite] = useImmer([]);

  // const getProducts = async () => {
  //   try {
  //     const localStorageData = getFromLocalStorage("products");

  //     if (localStorageData) {
  //       setProducts(localStorageData);
  //     } else {
  //       const data = await fetch("./products.json").then((res) => res.json());
  //       setProducts(data);
  //       addToLocalStorage("products", data);
  //     }
  //   } catch(error) {
  //     setError(error.message);
  //   } 
  // };

  const getProducts = async () => {
    try {
          const localStorageData = getFromLocalStorage("products");

          if (localStorageData) {
            setProducts(localStorageData);
          } else {
            const { data } = await axios.get(MAIN_URL);
            console.log(data);
            setProducts(data);
            addToLocalStorage("products", data);
          }
        } catch(error) {
          setError(error.message);
        } 
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (products.length) {
      addToLocalStorage("products", products);
    }
  }, [products]);

  useEffect(() => {
    const storedCart = getFromLocalStorage('cart');
    if (storedCart) {
      updateCart(() => storedCart);
    }
  }, []);

  useEffect(() => {
    const storedFavorite = getFromLocalStorage('favorite');
    if (storedFavorite) {
      updateFavorite(() => storedFavorite);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      addToLocalStorage('cart', cart);
      addToLocalStorage('cartCount', cart.length);
    }
  }, [cart, cartCount]);

  useEffect(() => {
    if (favorite.length > 0) {
      addToLocalStorage('favorite', favorite);
      addToLocalStorage('favoriteCount', favorite.length);
    }
  }, [favorite, favoriteCount]);

  useEffect(() => {
    if (cartCount !== 0) {
      addToLocalStorage('cartCount', cartCount);
    }
    if (favoriteCount !== 0) {
      addToLocalStorage('favoriteCount', favoriteCount);
    }
  }, [cartCount, favoriteCount]);

  useEffect(() => {
    const storedCartCount = getFromLocalStorage('cartCount');
    const storedFavoriteCount = getFromLocalStorage('favoriteCount');
    
    if (storedCartCount !== null) {
      setCartCount(storedCartCount);  
    }

    if (storedFavoriteCount !== null) {
      setFavoriteCount(storedFavoriteCount);  
    }
  }, []);

  return (
    <>
      <Header
        cartCount = {cartCount}
        favoritesCount = {favoriteCount}
      >
        Store
      </Header>
      <main>
        <AppRoutes  data={products} 
                    isFirstModalOpen={isFirstModalOpen}
                    setFirstModalOpen={setFirstModalOpen}
                    setSecondModalOpen={setSecondModalOpen}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    setCartCount={setCartCount}
                    setFavoriteCount={setFavoriteCount}
                    cart={cart}
                    updateCart={updateCart}
                    favorite={favorite}
                    updateFavorite={updateFavorite}
        >     
        </AppRoutes>
      </main>

      {isSecondModalOpen && (
        <div className={modalStyles.modalbackdrop}>
            <Modal 
                type = "text" 
                isOpen = {isSecondModalOpen}
                onClose = {() => setSecondModalOpen(false)}
                header = '' 
                image2 = '/images/product.png'
                body = "The product added to the cart"
                firstText = 'Ok' firstClick={() => console.log("Add to cart clicked")}
            >
            </Modal>
        </div>
      )}
    </>
  )
}

export default App
