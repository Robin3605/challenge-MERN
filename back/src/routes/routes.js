import { Router } from "express";
import productsRouter from "./products.route.js";
import pricesRouter from "./prices.route.js";
import usersRouter from "./user.route.js";

const router = Router();

router.use("/products", productsRouter);
router.use("/prices", pricesRouter);
router.use("/users", usersRouter);


export default router;