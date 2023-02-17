import mongoose from "mongoose";

const Products = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  stock: {
    type: Number,
    require: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const ProductsData = mongoose.model("products", Products);
export default ProductsData;
