import { model, Schema } from "mongoose";

const OrderSchema = new Schema({
  status: {
    type: String,
    required: true,
    unique: true,
  },
  payment_id: {
    type: String,
    required: true,
    unique: true,
  },
  payment_status: {
    type: String,
    required: true,
    unique: true,
  },

  merchant_order_id: {
    type: String,
    required: true,
    unique: true,
  },
});

const Order = model("Order", OrderSchema);
export default Order;
