import { pricesDao } from "../dao/specialPrices.dao.js";

export const getAllPrices = async (req, res) => {
  try {
    const prices = await pricesDao.getAll();
    res.json(prices);
  } catch (error) {
    console.log("Error in get all prices controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSpecialPrice = async (req, res) => {
  try {
    const { userId, productId } = req.params;
    const price = await pricesDao.getOne({ userId, productId });
    res.json(price);
  } catch (error) {
    console.log("Error in get special price controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createSpecialPrice = async (req, res) => {
  try {
    const { userId, productId, precioEspecial } = req.body;
    const newSpecialPrice = await pricesDao.create({ userId, productId, precioEspecial });
    await newSpecialPrice.save();
    res.status(201).json(newSpecialPrice);
    
  } catch (error) {
    console.log("Error in create special price controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateSpecialPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const price = await pricesDao.update(id, req.body);
    res.json(price);
  } catch (error) {
    console.log("Error in update special price controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteSpecialPrice = async (req, res) => {
  try {
    const { id } = req.params;
    const price = await pricesDao.remove(id);
    res.json(price);
  } catch (error) {
    console.log("Error in delete special price controller", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
