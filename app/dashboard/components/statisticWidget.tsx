import { RiBox3Line } from 'react-icons/ri'

type StatisticProps = {
  title: string,
  value: string | number
};

const StatisticWidget = ({ title, value }: StatisticProps) => {
  return (
    <div className="relative bg-white drop-shadow-card justify-between rounded-lg p-4 w-[300px] h-[150px]">
      <div className="flex flex-col gap-y-4">
	<div className="text-md text-gray-600 font-medium">{title}</div>
	<div className="text-4xl font-bold">
	  {value}
	</div>
	<div className="text-sm text-gray-400 font-medium">
	  +12 nyligen tillagda
	</div>
      </div>

      <div className="absolute flex right-0 top-0 p-2 mt-3 mr-3 bg-white border rounded-full items-center justify-center">
        <RiBox3Line className="w-8 h-8" />
      </div>
    </div>
  )
}

export default StatisticWidget;
