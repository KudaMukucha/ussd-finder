import { useState } from "react"
import {FaMinus, FaPlus} from 'react-icons/fa6'

export default function Accordion({question,answer}) {
    const [accordionOpen,setAccordionOpen] =useState(false)
  return (
    <div className="py-8 mt-3 bg-gray-200 p-4 rounded-lg">
        <button onClick={()=>setAccordionOpen(!accordionOpen)} className="flex justify-between items-center w-full text-blue-950 font-semibold">
            <span className="flex items-center">{question}</span>
            {accordionOpen ? (<FaMinus/>): (<FaPlus/>)}
        </button>
      <div className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-[14.5px] ${accordionOpen ? 'grid-rows-[1fr] opacity-100':'grid-rows-[0fr] opacity-0'}`}>
      <div className="overflow-hidden mt-1" >
            {answer}
        </div>
      </div>
    </div>
  )
}
