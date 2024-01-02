import { ImQuotesRight } from 'react-icons/im'
import Image from 'next/image'

type CardProps = {
  author: string,
  paragraph: string,
  rating: number
}

const Card = ({ author, paragraph, rating }: CardProps) => {
  return (
    <div className="flex flex-col rounded-2xl lg:w-1/3 gap-y-4 justify-between bg-white text-lg drop-shadow-xl p-6 max-w-sm">
      <div className="flex justify-between items-center">
        <div className="flex gap-x-4">
	  <div className="bg-red-500 relative rounded-full w-14 h-14">
	    <Image
	      src="/collection.png"
	      fill
	      style={{ objectFit: "cover" }}
	      className="rounded-full"
	      alt="Avatar"
	    />
	  </div>

	  <div className="flex flex-col gap-y-0">
	    <p className="text-black font-semibold">{author}</p>

	    <div className="flex gap-x-3">
	      <p className="text-black font-semibold">{rating}.0</p>

	      <div className="flex justify-between">
		<div className="flex gap-x-3">
		  {[...Array(5)].map((_, index) => (
		    <Image
		      key={index}
		      src="/star.png"
		      width={15}
		      height={15}
		      className={`object-contain ${index < rating ? 'opacity-100' : 'opacity-25'}`}
		      alt="Star"
		    />
		  ))}
		</div>
	      </div>
	    </div>
	  </div>
	</div>

	<ImQuotesRight className="w-12 h-12 opacity-10" />
      </div>
      <p className="italic opacity-40">{paragraph}</p>
    </div>
  )
}

export default Card;
