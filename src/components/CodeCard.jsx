import {FaPhone} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
export default function CodeCard({code}) {
  return (
    <div>
       

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   <FaPhone className='w-7 h-7 text-gray-500 dark:text-gray-400 mb-3'/>
    <Link to={'/item/'+ code.name}>
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white hover:text-gray-700">{code.name}</h5>
    </Link>
    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{code.description}</p>
   <div className='flex items-center justify-between'>
   <a href="#" className="inline-flex font-bold items-center text-slate-950 text-2xl hover:text-blue-600 hover:scale-105 transition-all duration-75">
       {code.code}
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
    <p className='text-blue-600 font-medium'>{code.category}</p>
   </div>
</div>

    </div>
  )
}
