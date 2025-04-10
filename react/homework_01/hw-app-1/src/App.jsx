import './App.css'
import { useState, useEffect } from 'react';
import Modal from './components/Modal';
import Header from './components/Header'
import { addToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import ProductList from './components/ProductList';

function App() {
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    if (products.length) {
      addToLocalStorage("products", products);
    }
  }, [products]);

  return (
    <>
      <Header></Header>
      <ProductList 
        data={products} 
      >
      </ProductList>

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

      <Modal 
        type = "text" 
        isOpen = {isSecondModalOpen} 
        onClose = {() => setSecondModalOpen(false)}
        header = '' 
        image2 = '/images/pills.png'
        body = "The product added to the cart"
        firstText = 'Ok' firstClick={() => console.log("Add to cart clicked")}>
      </Modal> */}
    </>
  )
}

export default App
