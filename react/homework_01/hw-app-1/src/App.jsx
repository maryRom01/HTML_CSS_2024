import './App.css'
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import Header from './components/Header'
import AppRoutes from './AppRoutes';
import { addToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import modalStyles from "./components/Modal/Modal.module.scss";
import { useImmer } from "use-immer";
import axios from 'axios';
import { fetchProducts } from './slices/productsSlice';
import { setCart } from './slices/cartSlice';
import { setFavorite } from './slices/favoriteSlice';
import { openFirstModal, closeFirstModal, openSecondModal, closeSecondModal } from './slices/modalSlice';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const cart = useSelector((state) => state.cart.items);
  const favorite = useSelector((state) => state.favorite.items);
  const error = useSelector((state) => state.products.error);
  const isFirstModalOpen = useSelector((state) => state.modal.isFirstModalOpen);
  const isSecondModalOpen = useSelector((state) => state.modal.isSecondModalOpen);
  const [selectedItem, setSelectedItem] = useState(null);

  const [cartCount, setCartCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const storedCart = getFromLocalStorage('cart');
    if (storedCart) {
      dispatch(setCart(storedCart));
    }
  }, [dispatch]);
  
  useEffect(() => {
    const storedFavorite = getFromLocalStorage('favorite');
    if (storedFavorite) {
      dispatch(setFavorite(storedFavorite));
    }
  }, [dispatch]);
  
  useEffect(() => {
    if (cart.length > 0) {
      addToLocalStorage('cart', cart);
    }
  }, [cart]);
  
  useEffect(() => {
    if (favorite.length > 0) {
      addToLocalStorage('favorite', favorite);
    }
  }, [favorite]);

  // useEffect(() => {
  //   const storedCartCount = getFromLocalStorage('cartCount');
  //   const storedFavoriteCount = getFromLocalStorage('favoriteCount');
  
  //   if (storedCartCount !== null) {
  //     setCartCount(storedCartCount);  
  //   }
  
  //   if (storedFavoriteCount !== null) {
  //     setFavoriteCount(storedFavoriteCount);  
  //   }
  // }, []);

  // const [cartCount, setCartCount] = useState(0);
  // const [favoriteCount, setFavoriteCount] = useState(0);

  // useEffect(() => {
  //   if (cart.length > 0) {
  //     addToLocalStorage('cart', cart);
  //     addToLocalStorage('cartCount', cart.length);
  //   }
  // }, [cart, cartCount]);

  // useEffect(() => {
  //   if (favorite.length > 0) {
  //     addToLocalStorage('favorite', favorite);
  //     addToLocalStorage('favoriteCount', favorite.length);
  //   }
  // }, [favorite, favoriteCount]);

  // useEffect(() => {
  //   if (cartCount !== 0) {
  //     addToLocalStorage('cartCount', cartCount);
  //   }
  //   if (favoriteCount !== 0) {
  //     addToLocalStorage('favoriteCount', favoriteCount);
  //   }
  // }, [cartCount, favoriteCount]);

  // useEffect(() => {
  //   const storedCartCount = getFromLocalStorage('cartCount');
  //   const storedFavoriteCount = getFromLocalStorage('favoriteCount');
    
  //   if (storedCartCount !== null) {
  //     setCartCount(storedCartCount);  
  //   }

  //   if (storedFavoriteCount !== null) {
  //     setFavoriteCount(storedFavoriteCount);  
  //   }
  // }, []);

  return (
    <>
      <Header
        cartCount = {cartCount}
        favoritesCount = {favoriteCount}
      >
        Store
      </Header>
      <main>
        <AppRoutes  products={products}
                    cart={cart}
                    favorite={favorite}
                    isFirstModalOpen={isFirstModalOpen}
                    setFirstModalOpen={(value) => dispatch(value ? openFirstModal() : closeFirstModal())}
                    setSecondModalOpen={(value) => dispatch(value ? openSecondModal() : closeSecondModal())}
                    selectedItem={selectedItem}
                    setSelectedItem={setSelectedItem}
                    // setCartCount={setCartCount}
                    // setFavoriteCount={setFavoriteCount}
                    // cartCount={cartCount}
                    // favoriteCount={favoriteCount}
        >     
        </AppRoutes>
      </main>

      {isSecondModalOpen && (
        <div className={modalStyles.modalbackdrop}>
            <Modal 
                type = "text" 
                isOpen = {isSecondModalOpen}
                onClose = {() => dispatch(closeSecondModal())}
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
