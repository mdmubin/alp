import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },

  orderedItems: [{
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Product',
    },

    quantity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },
  }],

  shippingAddr: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    postCode: { type: String, required: true },
  },

  paymentMethod: {
    type: String,
    required: true,
  },

  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },

  paidOn: {
    type: Date,
  },

  isDelivered: {
    type: Boolean,
    required: true,
    default: false,
  },

  deliveredOn: {
    type: Date,
  },
}, {
  timeStamps: true,
});

const Order = mongoose.Model('Order', orderSchema);

export default Order;
