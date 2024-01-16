import Image from 'next/image'
import Achievement from '@/(marketplace)/components/achievements/achievement'

const Achievements = () => {
  return (
    <div className="relative flex flex-col gap-y-6 items-center pb-10">
      <div className="absolute w-[70px] h-[70px] top-[-22%] right-[16%] -z-10">
	<Image
	  src="/decorations/OrangeArrow.svg"
	  fill
	  style={{ objectFit: "contain" }}
	  alt="Orange Arrow"
	/>
      </div>

      <label className="text-black text-opacity-60 font-semibold text-[13px]">
	Varje siffra har sin historia av framsteg
      </label>

      <div className="lg:flex gap-x-32 hidden">
	<Achievement title="Kunder" number={1000} suffix="+" />
	<Achievement title="Designs" number={250} suffix="+" />
	<Achievement title="Nöjdhet" number={95} suffix="%" />
	<Achievement title="Donationer" number={1500} suffix="+" />
      </div>

      <div className="flex flex-col gap-y-4 w-[270px] lg:hidden">
        <div className="flex justify-between">
	  <Achievement title="Kunder" number={1000} suffix="+" />
	  <Achievement title="Designs" number={250} suffix="+" />
	</div>

        <div className="flex justify-between">
	  <Achievement title="Nöjdhet" number={95} suffix="%" />
	  <Achievement title="Donationer" number={1500} suffix="+" />
	</div>
      </div>
    </div>
  )
}

export default Achievements;
