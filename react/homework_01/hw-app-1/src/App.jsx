import './App.css'
import { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [isFirstModalOpen, setFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);

  const isModalOpen = isFirstModalOpen || isSecondModalOpen;

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
