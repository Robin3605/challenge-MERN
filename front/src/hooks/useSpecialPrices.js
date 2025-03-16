import { useState, useEffect } from "react";
import { getSpecialPrice } from "../services/api";
import { getProducts } from "../services/api";

const useSpecialPrices = (userId) => {
  const [specialPrices, setSpecialPrices] = useState({});

  useEffect(() => {
    const fetchSpecialPrices = async () => {
      const prices = {};
      const productsData = await getProducts();

      for (const product of productsData) {
        const specialPrice = await getSpecialPrice(userId, product._id);
        if (specialPrice) {
          prices[product._id] = specialPrice.specialPrice;
        }
      }

      setSpecialPrices(prices);
    };

    if (userId) {
      fetchSpecialPrices();
    }
  }, [userId]);

  return { specialPrices };
};

export default useSpecialPrices;