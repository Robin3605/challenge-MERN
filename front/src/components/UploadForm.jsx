import React, { useState } from "react";
import { createSpecialPrice } from "../services/api";
import useProducts from "../hooks/useProducts";
import useUsers from "../hooks/useUsers";


const UploadForm = () => {
  const [userId, setUserId] = useState("");
  const [productId, setProductId] = useState("");
  const [specialPrice, setSpecialPrice] = useState("");
  const { users } = useUsers();
  const { products } = useProducts();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createSpecialPrice({ userId, productId, specialPrice });
      alert("Precio especial creado correctamente");
      setUserId("");
      setProductId("");
      setSpecialPrice("");
    } catch (error) {
        console.log(error);
      alert("Error al crear el precio especial");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700">Usuario</label>
        <select
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecciona un usuario</option>
          {users.map((user) => (
            <option key={user._id} value={user._id}>
              {user.name} {user.lastName} ({user.email})
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Producto</label>
        <select
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Selecciona un producto</option>
          {products.map((product) => (
            <option key={product._id} value={product._id}>
              {product.name} - ${product.price}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Precio Especial</label>
        <input
          type="number"
          value={specialPrice}
          onChange={(e) => setSpecialPrice(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Crear Precio Especial
      </button>
    </form>
  );
};

export default UploadForm;