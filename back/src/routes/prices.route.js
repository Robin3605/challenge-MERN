import { Router } from "express";
import { createSpecialPrice, deleteSpecialPrice, getAllPrices, getSpecialPrice, updateSpecialPrice } from "../controllers/prices.controller.js";



const router = Router();

router.get("/", getAllPrices);
router.get("/:userId/:productId", getSpecialPrice);
router.post("/", createSpecialPrice);
router.put("/:id", updateSpecialPrice);
router.delete("/:id", deleteSpecialPrice);

export default router;
