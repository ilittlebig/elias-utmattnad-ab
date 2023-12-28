const LoadingInformation = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col gap-y-6">
	<div className="flex flex-col gap-y-2">
	  <div className="w-full h-8 bg-gray-100 rounded-full" />
	  <div className="w-full h-6 bg-gray-100 rounded-full" />
	  <div className="w-full h-6 bg-gray-100 rounded-full" />
	</div>

	<div className="w-full h-32 bg-gray-100 rounded-md" />
	<div className="w-full h-6 bg-gray-100 rounded-full" />
      </div>
    </div>
  )
}

export default LoadingInformation;
