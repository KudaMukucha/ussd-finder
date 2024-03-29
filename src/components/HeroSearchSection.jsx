import {HiMagnifyingGlass }from 'react-icons/hi2'
import { Link } from 'react-router-dom'
export default function HeroSearchSection() {
    const searchButtonTags = [
        {
            id:1,
            name:'All',
             path:'/'
        },
        {
            id:2,
            name:'Banking',
            path:'/codes/banking'
        },
        {
            id:3,
            name:'Telco',
             path:'/codes/telecom'
        },
        {
            id:4,
            name:'Mobile Money',
             path:'/codes/mobile-money'
        },

    ]
  return (
    <div className='flex flex-col items-center text-center space-y-4 bg-slate-100  '>
        <h2 className='mt-5 font-extrabold text-5xl'>USSD Finder for Zimbabwe</h2>
        <div className="relative flex items-center px-3 py-1 w-[350px] rounded-md">
  <input type="text" className="outline-none rounded-sm py-1.5 px-3 p-1 w-full" placeholder='Search bank, telcom, mobile money... ' />
  <div className="absolute right-3 mr-2">
    <HiMagnifyingGlass />
  </div>
</div>
        <h3>Find USSD codes available across various mobile network operators, banks, telcos, industries, and utilities.</h3>
        <div className='pb-7'>
           {
            searchButtonTags.map((tag,i)=>{
                return(
                    <Link to={tag.path} key={i} className={'border border-slate-300 ml-2 px-4 py-2 rounded-md bg-white font- hover:text-blue-700 hover:border-blue-700 hover:font-semibold hover:scale-110 transition-all duration-300'}>
                            {tag.name}
                    </Link>
                )
            })
           }
        </div>
    </div>
  )
}
