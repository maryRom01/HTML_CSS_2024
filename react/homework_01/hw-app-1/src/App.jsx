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
        <h2>First Modal</h2>
        <p>This is the first modal content.</p>
      </Modal>

      <Modal type="text" isOpen={isSecondModalOpen} onClose={() => setSecondModalOpen(false)}>
        <h2>Second Modal</h2>
        <p>This is the second modal content.</p>
      </Modal>
    </>
  )
}

export default App
