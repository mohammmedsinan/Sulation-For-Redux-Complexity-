import express from "express";
import {
  createProduct,
  GetAllProducts,
  DeleteProductById,
  GitSingleProduct,
  updateProduct,
} from "./productsControl.js";

const router = express.Router();
router.post("/create", createProduct);
router.get("/get/:id", GitSingleProduct);
router.post("/all", GetAllProducts);
router.delete("/delete/:id", DeleteProductById);
router.put("/update/:id", updateProduct);

export default router;
