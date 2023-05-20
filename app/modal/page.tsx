import React from "react";
import ModalClient from "./ModalClient";

const ModalPage = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1">
      <div>
        <div>Modal</div>
      </div>
      <ModalClient />
    </div>
  );
};

export default ModalPage;
