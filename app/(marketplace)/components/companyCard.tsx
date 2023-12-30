import Image from 'next/image'

type CompanyProps = {
  image: string
};

const CompanyCard = ({ image }: CompanyProps) => {
  return (
    <div className="flex items-center justify-center bg-gray-50 px-8 py-6 grayscale rounded-md max-h-[138px]">
      <Image
	src={`/companies/${image}`}
	height={50}
	width={180}
	className="opacity-20"
	alt="Logo"
      />
    </div>
  )
}

export default CompanyCard;
