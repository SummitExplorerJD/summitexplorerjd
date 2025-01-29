import { FC } from "react";
import './Modal.css';

type ModalProps = {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    id: string;
};
/*
import React, { useState } from "react";
import Modal from "./components/utils/Modal";

const App: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1>Modal Content</h1>
        <p>This is the content inside the modal</p>
      </Modal>
    </div>
  );
};

export default App;
*/
const Modal: FC<ModalProps> = ({ children, isOpen, onClose, id }) => {
    if (!isOpen) return null;

    const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div id={id} className="modal" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;