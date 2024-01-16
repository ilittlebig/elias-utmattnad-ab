import Image from 'next/image'

type ProductImageProps = {
  key?: number,
  src: string
};

const ProductImage = ({ key, src }: ProductImageProps) => {
  return (
    <div key={key} className="relative lg:w-[350px] lg:h-[350px] w-full h-[430px]">
      <Image
	src={src}
	fill
	style={{ objectFit: "contain" }}
	alt="Product Image"
      />
    </div>
  )
}

export default ProductImage;
