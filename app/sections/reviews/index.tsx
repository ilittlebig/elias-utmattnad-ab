import Card from './card'

const ReviewsSection = () => {
  return (
    <div className="flex flex-col py-32 gap-y-8">
      <div className="flex flex-col text-center mx-auto font-rockwell gap-y-6">
	<div className="flex items-center gap-x-3">
	  <div className="w-32 bg-black hidden lg:block rounded-full h-1"></div>

	  <h1 className="lg:text-5xl text-4xl font-bold">
	    Kundomdömen
	  </h1>

	  <div className="w-32 bg-black hidden lg:block rounded-full h-1"></div>
	</div>
      </div>

      <div className="flex lg:flex-row flex-col gap-y-6 px-4 lg:px-4 justify-between">
        <Card
	  author="Elias Sjödin"
	  paragraph="Fantastisk matta med hög kvalitet. Utmärkt service och snabb leverans. Rekommenderas varmt!"
	  rating={4}
	/>

        <Card
	  author="Lars Andersson"
	  paragraph="Vacker och unik matta. Längre leveranstid än väntat, men värt väntan."
	  rating={4}
	/>

        <Card
	  author="Sara Lundgren"
	  paragraph="Underbara kuddar med imponerande kvalitet. Älskar det handgjorda hantverket!"
	  rating={5}
	/>
      </div>

      <div className="flex gap-x-6 items-center mx-auto">
      	<div className="w-3 h-3 bg-primary rounded-full" />
      	<div className="w-2 h-2 bg-gray-500 rounded-full" />
      	<div className="w-2 h-2 bg-gray-500 rounded-full" />
      	<div className="w-2 h-2 bg-gray-500 rounded-full" />
      </div>
    </div>
  )
}

export default ReviewsSection;
