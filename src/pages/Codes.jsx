import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CodeCard from '../components/CodeCard'
import HeroSearchSection from "../components/HeroSearchSection";
export default function Codes() {
  const [codes,setCodes] = useState([])
  const [loading, setLoading] = useState(true);
  let params =useParams()
  const getCodes = async(category)=>{
    const response = await fetch(`http://localhost:3000/codes/`)
    const codesData = await response.json()
    const object = codesData.filter(obj => obj.category === `${category}`);
    setCodes(object)
    setLoading(false);
    // console.log(object)
  }

  useEffect(() => {
      getCodes(params.type)
  }, [params.type])
  return (
    <>
    <HeroSearchSection/>
    <div className="bg-gray-100 pt-4 pb-4">
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
    </>
  )
}
