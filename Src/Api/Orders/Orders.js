import mongoose from "mongoose";
import OrderModel from "./ordersModel.js";

// ----------Create an Order------------------
export async function createOrder(req, res) {
  const orderDetails = req.body;
  const newOrder = new OrderModel(orderDetails);
  try {
    await newOrder.save().then((orderDetails) => {
      res.status(200).json(orderDetails);
    });
  } catch (err) {
    res.status(401).json({
      message: "create Order failed",
      error: err,
    });
  }
}
// ----------Get order Details------------------
export async function orderDetails(req, res) {
  const _id = req.params.id;
  try {
    if (mongoose.Types.ObjectId.isValid(_id)) {
      OrderModel.find({ _id })
        .populate("customer details")
        .then((data) => res.status(201).json(data[0]));
    }
  } catch (error) {
    res.status(401).json({
      error,
      message: "failed while fetching order's details ",
    });
  }
}
// ----------Get All orders inside the DB------------------
export async function Orders(req, res) {
  const BodyReq = req.body.id;
  try {
    //search if the user didn't send any filter
    if (BodyReq === undefined) {
      //return all the Users
      await OrderModel.find({})
        .populate("customer details")
        .then((order) => {
          res.status(201).json({
            message: "Get all users work successfully",
            data: order,
            pageSize: 10,
            total: order.length,
          });
        });
    } else {
      //return users by the filter that sent from front-end
      console.log(BodyReq);
    }
  } catch (error) {
    res.status(401).json({
      message: "Get user didn't work, something went wrong",
      error,
    });
  }
}
// ----------Update An Order------------------
export async function updateAnOrder(req, res) {
  const _id = req.body.id;
  const data = req.body;
  try {
    const Order = await OrderModel.findOneAndUpdate({ _id }, { ...data });
    await Order.save((err, u) => {
      if (err) res.json(err).status(401);
    });
  } catch (error) {
    res.json({
      message: "Something went wrong while updating this order",
      error,
    });
  }
}
// ----------Order Close------------------
export async function closeOrder(req, res) {
  const _id = req.body._id;
  try {
    const Order = await OrderModel.findOneAndUpdate(
      { _id },
      { status: "done" }
    );
    await Order.save((err, u) => {
      if (err) res.json(err).status(401);
    });
  } catch (error) {
    res.json({
      message: "Something went wrong while closing this order",
      error,
    });
  }
}

// ----------Delete An Order------------------
export async function deleteAnOrder(req, res) {
  const _id = req.body.id;
  try {
    await OrderModel.deleteOne({ _id }).then((e) => {
      res.status(201).json({
        message: "deleted this Product successfully",
        data: e,
      });
    });
  } catch (error) {
    res.json({
      message: "Something went wrong while updating this order",
      error,
    });
  }
}
