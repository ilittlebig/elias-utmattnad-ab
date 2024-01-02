"use client"
import { useState, useEffect } from 'react'
import { useCategories, Category } from '@/hooks/categories'
import { ProductDetails } from '@/hooks/productForm'

import Dropdown from '@/components/dropdown'
import InputForm from '@/components/inputForm'
import FileDrop from '@/dashboard/components/fileDrop'

type FormProps = {
  onFormChange?: () => void,
  onDropdownChange?: () => void,
  productDetails: ProductDetails
};

const ProductForm = ({
  onFormChange,
  onDropdownChange,
  productDetails
}: FormProps) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const { fetchCategories } = useCategories();

  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <div className="flex flex-col gap-y-4 rounded-md border bg-white w-full p-6">
      <div className="flex justify-between items-center">
	<div className="flex flex-col">
	  <div className="font-semibold text-lg">
	    Ladda upp bild
	  </div>
	  <div className="text-md font-medium text-gray-500">
	    Välj en bild som visar produkten.
	  </div>
	</div>

	<div className="font-semibold text-2xl">
	  #37802
	</div>
      </div>

      <div className="w-full border" />

      <div className="flex gap-x-6">
	<div className="flex flex-col gap-y-2">
	  <div className="font-semibold text-md">
	    Miniatyr
	  </div>

	  <FileDrop />
	</div>

	<div className="flex flex-col w-full font-medium gap-y-4 pt-8">
	  <InputForm
	    id="name"
	    htmlFor="name"
	    label="Namn"
	    text={productDetails.name}
	    type="text"
	    required
	    onChange={onFormChange}
	  />

	  <InputForm
	    id="description"
	    htmlFor="description"
	    label="Beskrivning"
	    text={productDetails.description}
	    required
	    onChange={onFormChange}
	    type="text"
	  />

	  <InputForm
	    id="dimensions"
	    htmlFor="dimensions"
	    label="Dimensioner"
	    text={productDetails.dimensions}
	    required
	    onChange={onFormChange}
	    type="text"
	  />

	  <InputForm
	    id="material"
	    htmlFor="material"
	    label="Material"
	    text={productDetails.material}
	    required
	    onChange={onFormChange}
	    type="text"
	  />

	  <Dropdown
	    label="Kategori"
	    text={productDetails.category}
	    required
	    onChange={onDropdownChange}
	  >
	    {categories.map((child, index) => (
	      <div key={index}>
		{child.href}
	      </div>
	    ))}
	  </Dropdown>

	  <div className="max-w-sm">
	    <InputForm
	      id="price"
	      htmlFor="price"
	      label="Pris"
	      type="number"
	      text={productDetails.price}
	      required
	      onChange={onFormChange}
	    />
	  </div>

	  <div className="max-w-sm">
	    <InputForm
	      id="inventory"
	      htmlFor="inventory"
	      label="Inventory"
	      type="number"
	      text={productDetails.inventory}
	      required
	      onChange={onFormChange}
	    />
	  </div>

	  <div className="max-w-sm">
	    <InputForm
	      id="rating"
	      htmlFor="rating"
	      label="Betyg"
	      type="number"
	      text={productDetails.rating}
	      required
	      onChange={onFormChange}
	    />
	  </div>
	</div>
      </div>
    </div>
  )
}

export default ProductForm;
