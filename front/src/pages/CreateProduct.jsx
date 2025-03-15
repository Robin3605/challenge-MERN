import React from "react";
import CreateProductForm from "../components/CreateProductForm";

const CreateProduct = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Crear Producto</h1>
      <CreateProductForm />
    </div>
  );
};

export default CreateProduct;