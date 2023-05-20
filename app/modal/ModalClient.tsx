"use client";

import { useState } from "react";
import Modal from "./components/Modal";

const ModalClient = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col space-y-20">
      <button onClick={() => setIsOpen(true)}>show</button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
        description="Modal description"
      >
        Children
      </Modal>
    </div>
  );
};

export default ModalClient;
