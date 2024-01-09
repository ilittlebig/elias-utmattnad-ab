import Image from 'next/image'

type StoryProps = {
  image: string,
  title: string,
  description: string,
  leftSideText?: boolean
};

const Story = ({ image, title, description, leftSideText }: StoryProps) => {
  return (
    <div className={`flex ${leftSideText ? "flex-row-reverse" : ""} justify-center gap-x-28`}>
      <div className="relative w-[450px] h-[450px]">
	<Image
	  src={image}
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Image"
	/>
      </div>

      <div className="flex flex-col gap-y-12 w-[450px] text-black">
	<label className="text-[22px] font-semibold">
	  {title}
	</label>

	<label className="text-lg leading-8">
	  {description}
	</label>
      </div>
    </div>
  )
}

export default Story;
