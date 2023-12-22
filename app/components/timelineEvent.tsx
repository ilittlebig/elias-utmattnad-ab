type EventProps = {
  index: number,
  text: string,
  side: string,
  selected?: boolean
}

const TimelineEvent = ({ index, text, side, selected }: EventProps) => {
  const isRightSide = side == "right";

  return (
    <div className="relative flex gap-y-8 gap-x-4 lg:gap-x-0 items-center">
      <div className={`flex items-center justify-center rounded-full ${selected ? 'lg:w-16 lg:h-16 w-12 h-12 bg-gray-900' : 'lg:w-12 lg:h-12 w-8 h-8 bg-gray-400'}`}>
	<div className={`text-white ${selected ? 'lg:text-3xl text-2xl' : 'lg:text-xl text-lg'}`}>
	  {index}
	</div>
      </div>

      <div className={`absolute ${isRightSide ? 'left-full' : 'right-full'} h-full lg:flex hidden items-center`}>
	<div className={`w-7 h-2 ${selected ? 'bg-gray-900' : 'bg-gray-400'}`}></div>
      </div>

      <div className={`lg:absolute text-left ${isRightSide ? 'lg:left-full lg:ml-16' : 'lg:right-full lg:mr-16'} ${selected ? '' : 'text-gray-400'} flex items-center`}>
	<div className="text-lg font-rockwell px-2 w-[350px] max-h-32 max-w-xs">
	  {text}
	</div>
      </div>
    </div>
  )
}

export default TimelineEvent;
