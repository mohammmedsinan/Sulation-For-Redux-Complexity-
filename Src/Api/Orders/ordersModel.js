import mongoose from "mongoose";

const Orders = mongoose.Schema({
  customer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "users",
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  order_number: {
    type: Number,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  details: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "products",
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  receive: {
    type: Date,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const OrdersData = mongoose.model("orders", Orders);
export default OrdersData;
