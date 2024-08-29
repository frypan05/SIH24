import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  timeSpent: { type: Number, default: 0 }, // Time spent in seconds or milliseconds
});

export default mongoose.models.User || mongoose.model('User', UserSchema);