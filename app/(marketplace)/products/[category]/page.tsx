import Image from 'next/image'

import Categories from '@/(marketplace)/components/categories/index'
import ProductsContainer from '@/(marketplace)/components/products/productsContainer'
import Button from '@/components/button'

const ProductsPage = () => {
  return (
    <div>
      <div className="flex relative h-[319px]">
	<div className="absolute left-0 w-full h-[319px]">
	  <Image
	    src="/winterCollection.png"
	    layout="fill"
	    objectFit="cover"
	    className="rounded-md"
	    alt="Hero"
	  />
	</div>

	<div className="flex flex-col items-center gap-y-6 justify-center mx-auto z-10">
	  <h1 className="text-4xl text-white text-center">
	    Utforska Vår Vinterkollektion
	  </h1>

	  <Button
	    actionText="Se Kollektionen"
	    href="winter-2023"
	  />
	</div>
      </div>

      <div className="flex flex-col lg:flex-row gap-x-12 py-6 pt-12">
	<Categories />
	<ProductsContainer />
      </div>
    </div>
  )
}

export default ProductsPage;
