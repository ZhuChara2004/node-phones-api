import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  userId: String,
  cart: [
    {
      phoneId: String,
      phoneCount: Number,
    }
  ],
  orderSum: { type: Number, default: 0 },
}, { timestamps: true });



export default mongoose.model('Order', OrderSchema);
