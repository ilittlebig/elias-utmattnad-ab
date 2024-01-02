import Image from 'next/image'

type CardProps = {
  author: string,
  paragraph: string,
  rating: number
}

const Card = ({ author, paragraph, rating }: CardProps) => {
  return (
    <div className="flex flex-col rounded-lg lg:w-1/3 justify-between bg-white text-lg shadow-lg h-40 py-3 px-4 max-w-sm">
      <p className="font-medium">{paragraph}</p>

      <div className="flex justify-between">
	<p className="text-zinc-400">{author}</p>

	<div className="flex gap-x-3">
	  {[...Array(5)].map((_, index) => (
	    <Image
	      key={index}
	      src="/star.png"
	      width={20}
	      height={20}
	      className={`object-contain ${index < rating ? 'opacity-100' : 'opacity-25'}`}
	      alt="Star"
	    />
	  ))}
	</div>
      </div>
    </div>
  )
}

export default Card;
