import { ImQuotesRight } from 'react-icons/im'
import Image from 'next/image'

type CardProps = {
  author: string,
  paragraph: string,
  rating: number
}

const Card = ({ author, paragraph, rating }: CardProps) => {
  return (
    <div className="flex flex-col rounded-2xl min-w-[360px] gap-y-4 bg-white hover:bg-zinc-50 group text-lg transition-bg duration-300 border hover:border-primary p-6 max-w-sm">
      <div className="flex justify-between">
        <div className="flex gap-x-4">
	  <div className="relative rounded-full w-[41px] h-[41px]">
	    <Image
	      src="/collection.png"
	      fill
	      style={{ objectFit: "cover" }}
	      className="rounded-full"
	      alt="Avatar"
	    />
	  </div>

	  <div className="flex flex-col">
	    <p className="text-black text-sm font-semibold">{author}</p>

	    <div className="flex gap-x-2">
	      <p className="text-black text-sm font-semibold">{rating}.0</p>

	      <div className="flex justify-between">
		<div className="flex gap-x-1">
		  {[...Array(5)].map((_, index) => (
		    <Image
		      key={index}
		      src="/Star.svg"
		      width={13}
		      height={13}
		      className={`object-contain ${index < rating ? 'opacity-100' : 'opacity-25'}`}
		      alt="Star"
		    />
		  ))}
		</div>
	      </div>
	    </div>
	  </div>
	</div>

	<ImQuotesRight className="w-10 h-10 opacity-10 group-hover:text-black group-hover:opacity-100 transition-all duration-300" />
      </div>

      <p className="leading-6 text-opacity-60 text-black text-[16px] font-semibold group-hover:text-opacity-100 transition-all duration-300">
        {paragraph}
      </p>
    </div>
  )
}

export default Card;
