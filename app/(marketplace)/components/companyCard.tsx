import Image from 'next/image'

type CompanyProps = {
  image: string
};

const CompanyCard = ({ image }: CompanyProps) => {
  return (
    <div className="flex group items-center justify-center bg-gray-50 hover:bg-zinc-100 transition-all hover:grayscale-0 duration-700 px-8 py-6 grayscale rounded-md w-[244px] h-[138px]">
      <Image
	src={`/companies/${image}`}
	height={50}
	width={180}
	className="opacity-20 group-hover:opacity-100 transition-opacity duration-700"
	alt="Logo"
      />
    </div>
  )
}

export default CompanyCard;
