import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();
  }, []);

  return { products };
};

export default useProducts;