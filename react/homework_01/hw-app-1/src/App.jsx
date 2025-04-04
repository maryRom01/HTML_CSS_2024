import './App.css'
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import { addToLocalStorage, getFromLocalStorage } from './utils/localStorage';

function App() {
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const isModalOpen = isFirstModalOpen || isSecondModalOpen;

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
      {!isModalOpen && (
        <>
          <Button type="default" onClick={() => setFirstModalOpen(true)} classNames="first">Open first modal</Button>
          <Button type="default" onClick={() => setSecondModalOpen(true)} classNames="second">Open second modal</Button>
        </>
      )}

      <Modal type="image" isOpen={isFirstModalOpen} onClose={() => setFirstModalOpen(false)} 
        header="Product Delete!" body="By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted."
        firstText="No, Cancel"  secondText="Yes, delete" firstClick={() => console.log("Cancel clicked")} secondClick={() => console.log("Delete clicked")}
        image="./images/product/img1.jpg">
      </Modal>

      <Modal type="text" isOpen={isSecondModalOpen} onClose={() => setSecondModalOpen(false)}
        header='Add Product "NAME"' body="Description for you product"
        firstText='Add to favorite' firstClick={() => console.log("Add to favorite clicked")}>
      </Modal>
    </>
  )
}

export default App
