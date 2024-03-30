import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import CodeCard from "../components/CodeCard"
import HeroSearchSection from "../components/HeroSearchSection"
import GlobalAPI from "../services/GlobalAPI"

export default function Searched() {
    const [codes,setCodes] = useState([])
    const [loading, setLoading] = useState(true);
  let params =useParams()
  // const getCodes = async(name)=>{
  //   const response = await fetch(`http://localhost:3000/codes/`)
  //   const codesData = await response.json()
  //   const object = codesData.filter((obj) => obj.name.toLowerCase().includes(name.toLowerCase()));;
  //   setCodes(object)
  //   setLoading(false);
  //   // console.log(object)
  // }

  // useEffect(() => {
  //     getCodes(params.search)
  // }, [params.search])

    const getCodes = async(name)=>{
      const response = await GlobalAPI.getAllCodes()
      const codesData = response.codes.codes
      const object = codesData.filter((obj) => obj.name.toLowerCase().includes(name.toLowerCase()));
      setCodes(object)
      setLoading(false)
    }
    
    useEffect(() => {
      getCodes(params.search)
    }, [params.search])
  return (
    <>
    <HeroSearchSection/>
    <div className="bg-blue-100 pt-4 pb-4">
      <div className="px-4 lg:px-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {loading ? (
            <div className="text-center font-bold text-blue-900 bg-gray-100 h-48">Loading,please wait...</div>
          ) : codes.length > 0 ? (
            codes.map((code, i) => (
              <CodeCard key={i} code={code} />
            ))
          ) : (
            <div className="text-center font-bold text-red-500 bg-gray-100 h-48">{`Sorry, ${params.search} is not available!`}</div>
          )}
      </div>
    </div>
    </>
  )
}
