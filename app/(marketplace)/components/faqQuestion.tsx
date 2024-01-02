"use client"
import { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'

type QuestionProps = {
  question: string,
  answer: string
}

const Question = ({ question, answer }: QuestionProps) => {
  const [isToggled, setToggled] = useState(false);

  return (
    <div
      className="flex justify-between items-center select-none w-full bg-white lg:py-6 py-4 w-full rounded-md border-primary border-2 px-6"
      onClick={() => setToggled(!isToggled)}
    >
      <div className="flex flex-col w-full">
	<div className="flex justify-between items-center">
	  <div className="font-semibold lg:text-xl text-md">
	    {question}
	  </div>

	  <FaAngleDown className={`w-6 h-6 transition duration-300 ${isToggled ? "rotate-180" : ""}`} />
	</div>

	<div className={`lg:text-md text-md overflow-hidden transition-max-height duration-300 ${isToggled ? "max-h-[500px] pt-4" : "max-h-0 py-0"}`}>
	  {answer}
	</div>
      </div>

    </div>
  )
}

export default Question;
