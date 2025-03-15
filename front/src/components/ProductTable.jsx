import React, { useEffect, useState } from "react";
import { getProducts, getSpecialPrice } from "../services/api";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [specialPrices, setSpecialPrices] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);

      // Obtener precios especiales para el usuario actual
      const userId = "123"; // Reemplaza con el ID del usuario actual
      const prices = {};
      for (const product of productsData) {
        const specialPrice = await getSpecialPrice(userId, product._id);
        if (specialPrice) {
          prices[product._id] = specialPrice.specialPrice;
        }
      }
      setSpecialPrices(prices);
    };

    fetchData();
  }, []);

  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2">Nombre</th>
          <th className="p-2">Description</th>
          <th className="p-2">Precio</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product._id} className="border-b">
            <td className="p-2">{product.name}</td>
            <td className="p-2">{product.description}</td>
            <td className="p-2">{specialPrices[product._id] || product.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;