"use client"
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { FaMinus } from 'react-icons/fa'

type AccordionProps = {
  title: string,
  content: string
};

const Accordion = ({ title, content }: AccordionProps) => {
  const [isToggled, setToggled] = useState(false);

  return (
    <div className="flex flex-col select-none">
      <div
        className="flex items-center justify-between border-b pb-6 cursor-pointer"
	onClick={() => setToggled(!isToggled)}
      >
	<label className="text-md font-medium text-black cursor-pointer">
	  {title}
	</label>

	{isToggled ? (
	  <FaMinus className="w-3 h-3" />
	) : (
	  <FaPlus className="w-3 h-3" />
	)}
      </div>

      <div className={`${isToggled ? "max-h-[500px] pt-6 opacity-100" : "max-h-0 pt-0 opacity-0"} text-sm text-black transition-all duration-300 ease-in-out overflow-hidden`}>
	{content}
      </div>
    </div>
  )
}

export default Accordion;
