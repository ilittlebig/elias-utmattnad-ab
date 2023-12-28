import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  href: {
    type: String,
    required: true,
  },
});

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema, "categories");

export default Category;
