import Image from 'next/image'

type ProductImageProps = {
  key: number,
  src: string
};

const ProductImage = ({ key, src }: ProductImageProps) => {
  return (
    <div key={key} className="relative w-[350px] h-[350px]">
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
