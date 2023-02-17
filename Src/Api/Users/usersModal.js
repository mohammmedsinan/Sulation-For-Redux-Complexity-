import mongoose from "mongoose";

const Users = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  order_list: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "orders",
  },
  current_cart: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "products",
    require: true,
  },
  cart: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: "products",
    require: true,
  },
  createdDate: {
    type: Date,
    default: Date.now(),
  },
});

const UsersData = mongoose.model("users", Users);
export default UsersData;
