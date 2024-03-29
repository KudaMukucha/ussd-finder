import { useState } from 'react'
import { useEffect } from 'react'
import {HiMagnifyingGlass }from 'react-icons/hi2'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function HeroSearchSection() {
    const location = useLocation()
    const navigate = useNavigate()
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
            name:'Telecom',
             path:'/codes/telecom'
        },
        {
            id:4,
            name:'Mobile Money',
             path:'/codes/mobile-money'
        },

    ]
    const [input,setInput] =useState('')
    const submitHandler=(e)=>{
        e.preventDefault()
        navigate('/results/'+input)
        // console.log('hey kuda,im so low')
    }

    // useEffect(() => {
    //   console.log(location);
    // }, [])
  return (
    <div className='flex flex-col items-center text-center space-y-4 bg-blue-100  '>
        <h2 className='mt-5 font-extrabold text-5xl text-blue-950'>USSD Finder for Zimbabwe</h2>
        <div className="relative flex items-center px-3 py-1 w-[350px] rounded-md">
    <form className='w-full' onSubmit={submitHandler}>
    <input type="text" className="outline-none rounded-lg py-2 px-3 p-1 w-full" placeholder='Search bank, telcom, mobile money... ' value={input} onChange={(e)=>setInput(e.target.value)} />
    </form>
  <div className="absolute right-3 mr-2">
    <HiMagnifyingGlass />
  </div>
</div>
        <h3 className='text-slate-700'>Find USSD codes available across various mobile network operators, banks, telcos, industries, and utilities.</h3>
        <div className='pb-7'>
           {
            searchButtonTags.map((tag,i)=>{
                return(
                    <Link to={tag.path} key={i} className={`border border-slate-300 ml-2 px-4 py-2 rounded-md bg-white font- hover:text-blue-700 hover:border-blue-700 hover:font-semibold hover:scale-110 transition-all duration-300 ${location.pathname === tag.path ? 'border-blue-700':''}`}>
                            {tag.name}
                    </Link>
                )
            })
           }
        </div>
    </div>
  )
}
