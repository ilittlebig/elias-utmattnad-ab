import { TfiSearch } from 'react-icons/tfi'

const SearchBar = () => {
  return (
    <div className="flex gap-x-2 items-center border-b w-64">
      <TfiSearch className="w-6 h-6 text-black" />
      <input
        id="search"
	type="text"
	placeholder="Sök Produkter"
	className="w-full appearance-none focus:outline-none text-black text-xs py-2"
      />
    </div>
  )
}

export default SearchBar;
