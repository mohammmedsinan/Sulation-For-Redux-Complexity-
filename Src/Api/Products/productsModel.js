import mongoose from "mongoose";
import moment from "moment";

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
  bought_items: {
    type: [Number],
    require: true,
  },
  createdDate: {
    type: Number,
    default: moment().unix(),
  },
});

const ProductsData = mongoose.model("products", Products);
export default ProductsData;
