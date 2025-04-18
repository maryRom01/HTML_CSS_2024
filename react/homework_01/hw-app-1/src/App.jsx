import './App.css'
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Header from './components/Header'
import AppRoutes from './AppRoutes';
import { addToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import modalStyles from "./components/Modal/Modal.module.scss";
import { useImmer } from "use-immer";

function App() {
  const [products, setProducts] = useState([]);
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [cartCount, setCartCount] = useState(0);
  const [favoritesCount, setFavoritesCount] = useState(0);
  const [error, setError] = useState(null);
  const [cart, updateCart] = useImmer([]);
  const [favorite, updateFavorite] = useImmer([]);

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

  useEffect(() => {
    const storedCartCount = getFromLocalStorage('cartCount');
    const storedFavoritesCount = getFromLocalStorage('favoritesCount');
    
    if (storedCartCount !== null) {
      setCartCount(storedCartCount);  
    }

    if (storedFavoritesCount !== null) {
      setFavoritesCount(storedFavoritesCount);  
    }
  }, []);

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

  useEffect(() => {
    const storedCart = getFromLocalStorage('cart');
    if (storedCart) {
      updateCart(() => storedCart);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      addToLocalStorage('cart', cart);
    }
  }, [cart]);

  return (
    <>
      <Header
        cartCount = {cartCount}
        favoritesCount = {favoritesCount}
      >
        Pharmacy
      </Header>
      <main>
        <AppRoutes  data={products} 
                    setFirstModalOpen={setFirstModalOpen}
                    setSecondModalOpen={setSecondModalOpen}
                    setSelectedItem={setSelectedItem}
                    setCartCount={setCartCount}
                    setFavoritesCount={setFavoritesCount}
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
                image2 = '/images/pills.png'
                body = "The product added to the cart"
                firstText = 'Ok' firstClick={() => console.log("Add to cart clicked")}
            >
            </Modal>
        </div>
      )}

      {isFirstModalOpen && selectedItem && (
        <div className={modalStyles.modalbackdrop}>
          <Modal 
            type="image" 
            isOpen={isFirstModalOpen} 
            onClose={() => setFirstModalOpen(false)} 
            header={selectedItem.name} 
            body={`${selectedItem.name} will be deleted.`}
            firstText="No, Cancel"  
            secondText="Yes, delete" 
            firstClick={() => console.log("Cancel clicked")} 
            secondClick={() => console.log("Delete clicked")}
            image={selectedItem.image}
          />
        </div>
      )}
      
    </>
  )
}

export default App
