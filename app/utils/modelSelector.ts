import Product from '@/models/product'
import Category from '@/models/category'

type ModelType = "product" | "category";

const getModelByType = (type: ModelType): typeof Product | typeof Category => {
  switch (type) {
    case "product":
      return Product;
    case "category":
      return Category;
    default:
      throw new Error("Invalid type specified");
  }
}

export default getModelByType;
