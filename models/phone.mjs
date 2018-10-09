import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PhoneSchema = new Schema({
  title: String,
  image: String,
  description: String,
  price: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model('Phone', PhoneSchema);
