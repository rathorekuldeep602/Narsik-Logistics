import { ArrowUpRight, ChevronDown } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ServicesMenu from '../megaMenu/ServicesMenu'
import SolutionMenu from '../megaMenu/SolutionMenu'
import CompanyMenu from '../megaMenu/CompanyMenu'
import IndustryMenu from '../megaMenu/IndustryMenu'
const ServiceMenu = ({ f }) => {
  return <>
  <div className='relative z-2 m-10'>
    <div className='w-5xl h-95 z-3  mx-auto mt-17.5' onMouseLeave={() => f('service')} ><ServicesMenu/></div>
  </div></>
}
// const SolutionMenu = ({ f }) => {
//   return <>
//     <div className='w-3xl h-75 z-3 border rounded-b-lg mx-auto mt-20' onMouseLeave={() => f('solution')} ><SolutionMenu/></div>
//   </>
// }
// const IndustryMenu = ({ f }) => {
//   return <> <div >
//     <div className='w-3xl h-75 z-3 border rounded-b-lg mx-auto mt-20' onMouseLeave={() => f('industry')} >Industry megamenu</div>
//  </div>
//   </>
// }

// const MegaMenu = {
//   service: <ServiceMenu/>,
//   solution: <SolutionMenu />,
//   industry: <IndustryMenu />,
// }
export default function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleClick = (activemenu) => {
    setActiveMenu(activemenu)
  }
  const handleHide = (activemenu) => {
    activemenu === activeMenu ? setActiveMenu(null) : setActiveMenu(activemenu)
  }

  const MegaMenu = {
    service: <ServiceMenu f={handleHide} />,
    solution: <SolutionMenu f={handleHide} />,
    industry: <IndustryMenu f={handleHide} />,
    company: <CompanyMenu f={handleHide}/>
  }
  return (
    <div className='absolute'>
    <nav className='header '>
        <div className='logo'> <Link> <img src="/assets/favicon-w.webp" alt="logo-narsik" height={44} width={44}/></Link></div>
       <div className='brand-name'> <span id='main-name'>NARSI<span style={{color:"#2463EB"}}>K </span></span>
        <span id='brand-type'>logistics</span>
        </div>
         
         <div className='nav-items'>
            <Link to={"#"} className='nav-link group' onMouseEnter={() => handleClick('service')}  > <div className='flex'>Services<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span> </div></Link>
            <Link to={'#'} className='nav-link group'  onMouseEnter={() => handleClick('solution')}  ><div className='flex'>Solutions<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span> </div></Link>
            <Link to={'#'} className='nav-link group'  onMouseEnter={() => handleClick('industry')}><div className='flex'>Industries<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span> </div></Link>
            <Link to={'#'} className='nav-link group' >Blogs</Link>
            <Link to={'#'} className='nav-link group'  onMouseEnter={() => handleClick('company')}><div className='flex'>Company<span className='text-sm group-hover:rotate-180 p-2 '><ChevronDown size={16} strokeWidth={2.5}/></span> </div></Link>
            <Link to={'#'} className='nav-link group'>Resources</Link>
            <div className='cta-btn'>
                <button id='login-btn'> Customer Login </button>
                <button id='main-btn'>Get a Freight Quote <ArrowUpRight/> </button>
            </div>
         </div>     
    </nav>
      {activeMenu ? MegaMenu[activeMenu] : null}
</div>
  )
}
