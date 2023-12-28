import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  dimensions: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  inventory: {
    type: Number,
    required: true,
  },
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
