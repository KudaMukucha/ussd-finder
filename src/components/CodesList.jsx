import { useState } from "react";
import { useEffect } from "react";
import CodeCard from "./CodeCard";

export default function CodesList() {
const [codes,setCodes] = useState([])
  const getCodes = async()=>{
    const response = await fetch(`http://localhost:3000/codes`)
    const data = await response.json()
    setCodes(data)
    console.log(data)
  }

  useEffect(() => {
    getCodes()
  }, [])
  return (
    <div className="bg-gray-100 pt-4 pb-4">
      <div className="px-4 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {codes.map((code,i)=>{
          return(
            <CodeCard key={i} code ={code} />
          )
        })}
      </div>
    </div>
  )
}