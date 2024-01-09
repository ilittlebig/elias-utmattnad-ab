import { FiTruck, FiGift, FiBox } from 'react-icons/fi'
import Image from 'next/image'

const ProductPerks = () => {
  return (
    <div className="flex flex-col gap-y-6 w-full border-t border-b pt-6 pl-6 pb-6">
      <div className="flex gap-x-4">
	<FiTruck className="w-9 h-9 text-black flex-shrink-0" />

	<div className="flex flex-col text-black">
	  <label className="font-semibold text-sm">Gratis Leverans</label>
	  <label className="text-xs">
	    För leveranser över 1300,00 kr.
	  </label>
	</div>
      </div>

      <div className="flex gap-x-4">
	<FiBox className="w-9 h-9 text-black flex-shrink-0" />

	<div className="flex flex-col text-black">
	  <label className="font-semibold text-sm">Enkla Returer</label>
	  <label className="text-xs">
	    Returnera inom 45 dagar från leveransdatumet mot en avgift på 100,00 kr. Tullavgifter och skatter återbetalas vid retur av produkten.
	  </label>
	</div>
      </div>

      <div className="flex gap-x-4">
	<FiGift className="w-9 h-9 text-black flex-shrink-0" />

	<div className="flex flex-col text-black">
	  <label className="font-semibold text-sm">Skicka Som En Gåva</label>
	  <label className="text-xs">
	    Lägg till en personlig hälsning utan extra kostnad vid utcheckningen.
	  </label>
	</div>
      </div>
    </div>
  )
}

export default ProductPerks;
