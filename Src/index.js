import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import Users from "./Api/Users/usersRoute.js";
import Events from "./Api/Events/events.js";
import Orders from "./Api/Orders/ordersRoute.js";
import Products from "./Api/Products/products.js";

const app = express();
app.use(bodyParser.json({ limit: "1mb" }));
app.use(cors());
dotenv.config();

const PORT = 5000;
const MONGO_URI = "mongodb://0.0.0.0:27017/test";

app.get("/", (req, res) => {
  res
    .status(201)
    .send('<h1 style="text-align:center">This is Home of Tweeter API</h1>');
});
app.use("/users", Users);
app.use("/products", Products);
app.use("/events", Events);
app.use("/orders", Orders);
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (e) =>
    app.listen(PORT, () => console.log(`server is running now in port ${PORT}`))
);
