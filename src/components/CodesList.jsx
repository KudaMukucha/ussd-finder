import { useState } from "react";
import { useEffect } from "react";
import GlobalAPI from "../services/GlobalAPI";
import CodeCard from "./CodeCard";

export default function CodesList() {
const [codes,setCodes] = useState([])
const [loading, setLoading] = useState(true);
  // const getCodes = async()=>{
  //   const response = await fetch(`http://localhost:3000/codes`)
  //   const data = await response.json()
  //   setCodes(data)
  //   setLoading(false);
  //   // console.log(data)
  // }

  // useEffect(() => {
  //   getCodes()
  // }, [])

  const getCodes = async() =>{
    const response = await GlobalAPI.getAllCodes()
    const data = response.codes.codes
    setCodes(data)
    setLoading(false)
    // console.log(data);
  }
  useEffect(() => {
    getCodes()
  }, [])
  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-300  pt-4 pb-4">
      <div className="px-4 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {loading ? (
            <div className="text-center font-bold text-blue-900 bg-gray-100 h-48">Loading,please wait...</div>
          ) : (
            codes.map((code, i) => (
              <CodeCard key={i} code={code} />
            ))
          )}
      </div>
    </div>
  )
}
