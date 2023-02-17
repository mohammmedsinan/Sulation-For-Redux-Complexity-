import express from "express";
import {
  Orders,
  closeOrder,
  createOrder,
  updateAnOrder,
  orderDetails,
  deleteAnOrder,
} from "./Orders.js";

const router = express.Router();
router.post("/create", createOrder);
router.get("/get/:id", orderDetails);
router.post("/all", Orders);
router.put("/edit", updateAnOrder);
router.put("/close", closeOrder);
router.delete("/delete", deleteAnOrder);

export default router;
