import React from "react";
import ProductTable from "../components/ProductTable";

const Home = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Artículos</h1>
      <ProductTable />
    </div>
  );
};

export default Home;