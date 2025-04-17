import './App.css'
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Header from './components/Header'
import AppRoutes from './AppRoutes';
import { addToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import modalStyles from "./components/Modal/Modal.module.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [error, setError] = useState(null);

  const getProducts = async () => {
    try {
      const localStorageData = getFromLocalStorage("products");

      if (localStorageData) {
        setProducts(localStorageData);
      } else {
        const data = await fetch("./products.json").then((res) => res.json());
        setProducts(data);
        addToLocalStorage("products", data);
      }
    } catch(error) {
      setError(error.message);
    } 
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   const storedCartCount = getFromLocalStorage('cartCount');
  //   const storedFavoritesCount = getFromLocalStorage('favoritesCount');
    
  //   if (storedCartCount !== null) {
  //     setCartCount(storedCartCount);  
  //   }

  //   if (storedFavoritesCount !== null) {
  //     setFavoritesCount(storedFavoritesCount);  
  //   }
  // }, []);

  useEffect(() => {
    if (products.length) {
      addToLocalStorage("products", products);
    }
  }, [products]);

  useEffect(() => {
    if (cartCount !== 0) {
      addToLocalStorage('cartCount', cartCount);
    }
    if (favoritesCount !== 0) {
      addToLocalStorage('favoritesCount', favoritesCount);
    }
  }, [cartCount, favoritesCount]);

  return (
    <>
      <Header
        cartCount = {cartCount}
        favoritesCount = {favoritesCount}
      >
      </Header>
      <main>
        <AppRoutes  data={products} 
                    setFirstModalOpen={setFirstModalOpen}
                    setSecondModalOpen={setSecondModalOpen}
                    setCartCount={setCartCount}
                    setFavoritesCount={setFavoritesCount}>
        </AppRoutes>
      </main>

      {isSecondModalOpen && (
        <div className={modalStyles.modalbackdrop}>
            <Modal 
                type = "text" 
                isOpen = {isSecondModalOpen}
                onClose = {() => setSecondModalOpen(false)}
                header = '' 
                image2 = '/images/pills.png'
                body = "The product added to the cart"
                firstText = 'Ok' firstClick={() => console.log("Add to cart clicked")}
            >
            </Modal>
        </div>
      )}

      {/* <Modal 
        type="image" 
        isOpen={isFirstModalOpen} 
        onClose={() => setFirstModalOpen(false)} 
        header="Product Delete!" 
        body="By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted."
        firstText="No, Cancel"  
        secondText="Yes, delete" 
        firstClick={() => console.log("Cancel clicked")} 
        secondClick={() => console.log("Delete clicked")}
        image="./images/product/img1.jpg">
      </Modal>
      */}
    </>
  )
}

export default App
