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
      className="flex justify-between items-center select-none w-full bg-white drop-shadow-card lg:py-6 py-4 w-full rounded-md border-primary border-2 px-6"
      onClick={() => setToggled(!isToggled)}
    >
      <div className="flex flex-col w-full">
	<div className="flex justify-between">
	  <div className="lg:text-2xl text-xl">
	    {question}
	  </div>

	  <FaAngleDown className={`w-8 h-8 transition duration-300 ${isToggled ? "rotate-180" : ""}`} />
	</div>

	<div className={`lg:text-xl text-xl overflow-hidden transition-max-height duration-300 ${isToggled ? "max-h-[500px] pt-4" : "max-h-0 py-0"}`}>
	  {answer}
	</div>
      </div>

    </div>
  )
}

export default Question;
