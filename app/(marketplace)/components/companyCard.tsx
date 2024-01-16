import Image from 'next/image'

type CompanyProps = {
  image: string
};

const CompanyCard = ({ image }: CompanyProps) => {
  return (
    <div className="flex group items-center justify-center px-8 py-6 grayscale rounded-md min-w-[244px] max-w-[244px] h-[138px]">
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
