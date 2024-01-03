"use client"
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

type QuestionProps = {
  question: string,
  answer: string,
  index: number
}

const Question = ({ question, answer, index }: QuestionProps) => {
  const [isToggled, setToggled] = useState(false);

  return (
    <div
      className="flex justify-between cursor-pointer items-center select-none w-full bg-white w-full rounded-md px-6"
      onClick={() => setToggled(!isToggled)}
    >
      <div className="flex flex-col w-full">
	<div className="flex flex-col gap-y-8">
	  <div className="flex justify-between items-center">
	    <div className="flex gap-x-2 items-center font-semibold lg:text-xl text-md">
	      0{index}.
	      <div>
		{question}
	      </div>
	    </div>

	    <FaAngleDown className={`w-6 h-6 transition duration-300 ${isToggled ? "rotate-180" : ""}`} />
	  </div>

	  <div className="w-full border" />
	</div>

        <div className={`lg:text-md text-md transition-all duration-300 ease-in-out overflow-hidden ${isToggled ? "max-h-[500px] pt-6 opacity-100" : "max-h-0 pt-0 opacity-0"}`}>
	  {answer}
	</div>
      </div>

    </div>
  )
}

export default Question;
