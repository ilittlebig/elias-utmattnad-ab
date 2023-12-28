const ProductsHeader = () => {
  return (
    <div className="grid grid-cols-3 sticky top-0 bg-[#F9FAFB] font-medium px-6 py-2">
      <div className="flex gap-x-4">
	<input
	  type="checkbox"
	  className="w-5 h-5 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
	/>
	<div className="text-md text-gray-600">Produkter / Beskrivning</div>
      </div>

      <div className="grid grid-cols-3 gap-64">
	<div className="text-md text-gray-600">Kategori</div>
	<div className="text-md text-gray-600">Inventory</div>
	<div className="text-md text-gray-600">Status</div>
      </div>

      <div className="flex justify-end items-center">
	<div className="text-md text-gray-600">Actions</div>
      </div>
    </div>
  )
}

export default ProductsHeader;
