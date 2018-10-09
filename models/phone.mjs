import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
  title: String,
  image: String,
  description: String,
  price: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model('Phone', PhoneSchema);
