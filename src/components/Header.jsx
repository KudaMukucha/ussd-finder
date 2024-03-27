import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import { FaBars,FaXmark } from  'react-icons/fa6'
import { useState } from 'react'
export default function Header() {
  const navItems =[
    {
      name:'Home',
      path:'/'
    },
    {
      name:'FAQs',
      path:'/faqs'
    },
    {
      name:'Blog',
      path:'/blog'
    },

  ]

  const [isMenuOpen,setIsMenuOpen] = useState(false)
  const [isSticky,setIsSticky] = useState(false)
  // set toggle menu
  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className=''>
      <nav className='lg:px-20 px-4 py-4'>
        <div className={`flex justify-between items-center ${isSticky ? 'sticky top-0 left-0 right-0 border-b bg-white duration-300':''}`}>
          <a href="/" className='flex items-center space-x-1'>
            <img src={logo} alt="logo" className='w-10 h-10 inline-block items-center' />
            <span className='font-semibold'>USSD Finder</span>
          </a>

          <div className='md:flex hidden items-center gap-10'>
             {/* Nav items for large screens */}
          <ul className='flex space-x-10 '>
            {
              navItems.map((item,i)=>{
                return(
                  <NavLink key={i} to={item.path} className={'text-gray-700 font-[400] text-base block hover:text-black hover:font-medium'}>
                    {item.name}
                  </NavLink>
                )
              })
            }
          </ul>

          {/* btn for large screens */}
          <Link className='flex bg-blue-700 text-white px-4 py-2 shadow-xl rounded-bl-lg rounded-tr-lg hover:text-slate-300 hover:shadow-none transition-all duration-300'>Get App</Link>
          </div>
      
            {/* menu for small screens */}
            <div className='md:hidden'>
              <button className='text-blue-700 focus:outline-none' onClick={toggleMenu}>
                  {
                    isMenuOpen ? (<FaXmark className='w-6 h-6'/>) : (<FaBars className='w-6 h-6'/>)
                  }
              </button>
            </div>
        </div>

        {/* nav items for mobile device */}
        <div className={`${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'} mt-16 py-7 px-4 bg-slate-100 space-y-4`}>
          <ul className='space-y-4'>
          {
            navItems.map((item,i)=>{
              return(
                <NavLink key={i} to={item.path} className={'block text-base space-y-10'}>
                    {item.name}
                </NavLink>
              )
            })
          }

          </ul>
          <Link className='flex bg-blue-700 text-white px-4 py-2 shadow-xl rounded-bl-lg rounded-tr-lg hover:text-slate-300 hover:shadow-none transition-all duration-300'>Get App</Link>
        </div>
      </nav>
    </header>
  )
}
