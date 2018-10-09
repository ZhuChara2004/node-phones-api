import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
}, { timestamps: true });

export default mongoose.model('User', UserSchema);
