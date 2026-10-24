import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
<>
 <footer className='bg-[#020617] bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] relative bg-size-[64px_64px] w-auto text-white mt-20 '>
  <div className='text-center z-20  max-w-7xl px-4 pt-14 md:px-6 md:pt-24 '>
    <div className='border border-white/10 bg-white/3 p-6 text-center shadow-2xl shadow-black/40 backdrop-blur-xl md:p-5 m-5 rounded-2xl mb-10'>
    <div className='grid grid-cols-1 justify-center'>
    <img src="	https://www.narsiklogistics.com/_next/image?url=%2Fassets%2Fbrand%2Fpng%2Flogo-w.png&w=1920&q=75" alt="logo-img" className='w-27.5 rounded-lg text-center ms-130' />
    <h3 className='text-6xl font-bold w-2xl ms-70'>Freight Movement,
     <span className='bg-linear-to-r from-blue-400 via-white to-slate-500 bg-clip-text text-transparent'> Engineered for India.</span>
    </h3>
    <p className='ps-65 pe-75 mt-5 text-white/60'> NARSIK Logistics provides B2B freight and transport solutions including FTL, PTL, interstate
      transportation, warehousing, and specialized cargo movement from Jaipur across India.</p> <br />
    <p className='text-sm font-semibold'>NARSIK Logistics, Jaipur, Rajasthan, India · +91-9929031702 · info@narsiklogistics.com </p>
  </div>
  </div>
  </div>
  <hr className='text-slate-700 mb-20' />
  <div className='flex gap-57.5'>
    <div>
      <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm '>S e r v i c e s</h4>
      <ul className='text-center text-white/60'>
        <li><Link to="https://www.narsiklogistics.com/services/ftl-transport-services-in-jaipur">FTL
            transport</Link></li>
        <li><Link to="https://www.narsiklogistics.com/services/ptl-transport-services-in-jaipur">PTL/Part
            Load</Link></li>
        <li><Link to="https://www.narsiklogistics.com/services/cold-chain-logistics-in-india">Cold Chain</Link>
        </li>
        <li><Link to="https://www.narsiklogistics.com/services/container-transport-services-in-jaipur">Container
            Transport</Link></li>
        <li><Link to="https://www.narsiklogistics.com/services/project-cargo-transport-in-india">Project
            Cargo</Link></li>
      </ul>
    </div>
    <div>
      <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm'>S o l u t i o n s</h4>
      <ul className='text-center text-white/60'>
        <li><Link to>Warehousing</Link></li>
        <li><Link to>Reverse Logistics</Link></li>
        <li><Link to>eCommerce Fulfilment</Link></li>
        <li><Link to>Last Mile Delivery</Link></li>
      </ul>
    </div>
    <div>
      <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm'>C o m p a n y</h4>
      <ul className='text-center text-white/60'>
        <li><Link to>About</Link></li>
        <li><Link to>Fleet</Link></li>
        <li><Link to>Careers</Link></li>
        <li><Link to>Contact</Link></li>
        <li><Link to>Blog</Link></li>
        <li><Link to>FAQ</Link></li>
      </ul>
    </div>
    <div>
      <h4 className='text-center font-extrabold text-blue-400 uppercase text-sm'>L e g a l</h4>
      <ul className='text-center text-white/60'>
        <li><Link to>Pricing</Link></li>
        <li><Link to>Privacy</Link></li>
        <li><Link to>Terms</Link></li>
        <li><Link to>Insurance</Link></li>
        <li><Link to>Tracking</Link></li>
        <li><Link to>Booking</Link></li>
        <li><Link to>Sitemap</Link></li>
      </ul>
    </div>
  </div>
<div className='flex justify-between p-5'>
            <p className='text-slate-400'>© SINCE 2026 NARSIK LOGISTICS.| ALL RIGHTS RESEVERD</p>
            
            <div className='flex items-center gap-4'>

              <div className='flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/50 p-2'>
                <i className='fa-solid fa-shield text-blue-500 text-lg'></i>
                <span className='text-slate-400 text-sm font-semibold tracking-[1px]'>
                  UDYAM REGISTERED
                </span>
              </div>

              <div className='flex items-center gap-3 rounded-full border border-slate-800 bg-slate-900/50 p-2'>
                <i className='fa-solid fa-globe text-blue-500 text-lg'></i>
                <span className='text-slate-400 text-sm font-semibold tracking-[1px]'>
                  ISO CERTIFIED
                </span>
              </div>

              <div className='flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50'>
                <i className='fa-brands fa-linkedin-in text-slate-400 text-xl'></i>
              </div>

              <div className='flex h-14 w-14 items-center justify-center rounded-full border border-slate-800 bg-slate-900/50'>
                <i className='fa-brands fa-twitter text-slate-400 text-xl'></i>
              </div>

            </div>
          </div>
  <div className="last-div text-[92px] font-black uppercase leading-none tracking-tighter text-white/8.5 sm:text-[145px] md:text-[230px] lg:text-[330px] ">
    NARSIK
  </div>
</footer>

</>
  )
}
