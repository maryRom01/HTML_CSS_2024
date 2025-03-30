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

      <Modal type="image" isOpen={isFirstModalOpen} onClose={() => setFirstModalOpen(false)}>
        <h2>Product Delete</h2>
        <p>By clicking the “Yes, Delete” button, PRODUCT NAME will be deleted.</p>
      </Modal>

      <Modal type="text" isOpen={isSecondModalOpen} onClose={() => setSecondModalOpen(false)}>
        <h2>Add Product "NAME"</h2>
        <p>Description for you product</p>
      </Modal>
    </>
  )
}

export default App
