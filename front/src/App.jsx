import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import CreateUser from "./pages/CreateUser";
import CreateProduct from "./pages/CreateProduct";


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </div>
  );
};

export default App;