import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { FaChevronLeft } from "react-icons/fa6"

export default function CodeDetails() {
    const [details,setDetails] = useState({})
    const params = useParams()
    const fetchDetails = async()=>{
        const response = await fetch(`http://localhost:3000/codes/`)
        const detailsData = await response.json()
        const object = detailsData.find(obj => obj.name === params.name);
        setDetails(object)
        // console.log(object);
       
    }

    useEffect(() => {
        fetchDetails()
    }, [params.name])
  return (
    <div className="bg-gray-100 px-4 lg:px-20 pt-10 space-y-10 h-screen">
       <Link to={'/'} className={'text-blue-700 font-medium text-[17px] flex items-center space-x-1'}>
            <FaChevronLeft className="text-slate-800"/>
            <span className="">Back to home</span>
       </Link>

         <h2 className="text-3xl text-slate-800 font-bold ">{details.name}</h2>

         <div className="p-6 bg-white border border-gray-200 rounded-lg shadow h-40">
            <p className="text-blue-900">{details.description}</p>
         </div>

         <div>
          <p className="font-bold text-slate-800">Disclaimer:</p>
         <p className="text-gray-700">The provided tool is intended solely for informational purposes. Although we strive to provide accurate data, users should acknowledge that this website assumes no liability for its accuracy.</p>
         </div>
    </div>
  )
}
