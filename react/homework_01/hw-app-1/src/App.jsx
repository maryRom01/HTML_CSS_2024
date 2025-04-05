import './App.css'
import { useState, useEffect } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import Header from './components/Header'
import { addToLocalStorage, getFromLocalStorage } from './utils/localStorage';
import ProductList from './components/ProductList';

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
    } finally {
      setIsLoading(false);
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

  // if (isLoading) {
  //   return (
  //     <main>
  //       <h1>Loading...</h1>
  //     </main>
  //   );
  // }

  // if (!isLoading && error) {
  //   return (
  //     <main>
  //       <h3 style={{ color: "red" }}>{error}</h3>
  //     </main>
  //   );
  // }

  return (
    <>
      <Header></Header>
      <ProductList data={products}></ProductList>
    </>
  )
}

export default App
