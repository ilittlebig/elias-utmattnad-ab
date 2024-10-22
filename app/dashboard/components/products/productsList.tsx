"use client"
import { useProductsContext } from '@/contexts/productsContext'
import ProductsHeader from '@/dashboard/components/products/productsHeader'
import ProductEntry from '@/dashboard/components/products/productEntry'

const ProductsList = () => {
  const { products, isLoading } = useProductsContext();

  return (
    <div className="flex flex-col w-full overflow-auto">
      <ProductsHeader />

      <div className="flex flex-col py-2">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          Array.isArray(products) && products.length > 0 ? (
            products.map((product, index) => (
              <ProductEntry
                key={index}
                id={product._id}
                name={product.name}
                description={product.description}
                category={product.category}
                inventory={product.inventory}
              />
            ))
          ) : (
            <div>No products available</div>
          )
        )}
      </div>
    </div>
  );
};

export default ProductsList;
