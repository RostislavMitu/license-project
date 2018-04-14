import mongoose from 'mongoose';

const apartmentSchema = mongoose.Schema({
  title: { type: String, required: true, unique: false },
  rooms: { type: Number, required: true },
  amenities: { type: Array },
  price: { type: Number },
  rules: { type: Array },
  accessibility: { type: Array },
  description: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Apartment', apartmentSchema);
