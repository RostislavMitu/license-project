import mongoose from 'mongoose';

const apartmentSchema = mongoose.Schema({
  title: { type: String, required: true, unique: false },
  rooms: { type: Number, required: true },
  amenities: { type: Array },
  price: { type: Number },
  rules: { type: Array },
  accessibility: { type: Array },
  description: { type: String },
  createdAt: { type: Date, default: Date.now }
});

apartmentSchema.methods.title = function() {
  return this.price;
};
