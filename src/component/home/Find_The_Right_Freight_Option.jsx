import React from 'react'
import { Link } from 'react-router-dom'

export default function Find_The_Right_Freight_Option() {
  return (
    <>
   <section className='m-5'>
  <div className='w-190'>
    <p className='text-blue-600 font-semibold uppercase text-xs mt-2 text-25' >FIND THE RIGHT FREIGHT OPTION</p>
    <h2 className='font-bold text-4xl mt-4 mb-4'>Choose the right transport solution for your cargo.</h2>
    <p className='font-semibold text-black/80 text-md leading-7'>From full truckload and part truckload transportation to specialized cargo and warehousing support,
      NARSIK helps businesses match their shipment requirements with the right logistics solution.</p>
  </div>
  <div className='grid grid-cols-4 m-5 ms-auto'>
    <div className='p-5 border border-slate-200 w-70 rounded-2xl'>
         <div className=' border border-black/10 p-5 w-16 rounded-lg font-bold bg-slate-100'> 
    <i className="fa-sharp fa-regular fa-truck text-black/70 "></i></div>
      <h3 className='font-bold uppercase mt-4 text-sm '>Full Truckload (FTL)</h3>
      <p className='text-sm text-black/80 mb-6 leading-7'>Dedicated truck transportation for larger consignments, bulk freight, and time-sensitive business
        shipments.</p>
      <span className='text-xs  uppercase font-bold text-black/60'>Explore Option ↗ </span>
    </div>
    <div className='p-5 border border-slate-200 w-70 rounded-2xl '>
         <div className=' border border-black/10 p-5 w-16 rounded-lg font-bold bg-slate-100'> 
    <i className="fa-sharp fa-regular fa-truck text-black/70 "></i></div>
      <h3  className='font-bold uppercase mt-4 text-sm '>Part Truckload (PTL)</h3>
      <p className='text-sm text-black/80 mb-6 leading-7'>Flexible part-load transportation for shipments that do not require a full truck, helping
        optimize freight costs.</p>
      <span className='text-xs  uppercase font-bold text-black/60'>Explore Option ↗ </span>
    </div>
    <div className='p-5 border border-slate-200 w-70 rounded-2xl'>
         <div className=' border border-black/10 p-5 w-16 rounded-lg font-bold bg-slate-100'> 
    <i className="fa-sharp fa-regular fa-truck text-black/70 "></i></div>
      <h3  className='font-bold uppercase mt-4 text-sm '>Specialized Cargo</h3>
      <p className='text-sm text-black/80 mb-6 leading-7'>Transport planning for temperature-sensitive, project, industrial, heavy, or other cargo with
        specific handling needs.</p>
      <span className='text-xs  uppercase font-bold text-black/60'>Explore Option ↗ </span>
    </div>
    <div className='p-5 border border-slate-200 w-70 rounded-2xl'>
         <div className=' border border-black/10 p-5 w-16 rounded-lg font-bold bg-slate-100'> 
    <i className="fa-sharp fa-regular fa-truck text-black/70 "></i></div>
      <h3  className='font-bold uppercase mt-4 text-sm '>Warehousing &amp; Storage</h3>
      <p className='text-sm text-black/80 mb-6 leading-7'>Storage and logistics support for businesses that need cargo held, managed, or coordinated with
        transportation.</p>
      <span className='text-xs  uppercase font-bold text-black/60'>Explore Option ↗ </span>
    </div>
  </div>
  <div className='m-10 bg-slate-900 rounded-2xl text-white p-7 flex justify-between'>
    <div className='w-140'>
      <p className='text-blue-600 font-semibold uppercase text-xs mt-2'>NOT SURE WHAT YOU NEED?</p>
      <h2 className='font-[Space_Grotesk_sans-serif] text-3xl font-bold'>Tell us about your shipment.</h2>
      <p>Share your cargo, pickup location, destination, approximate weight, and delivery requirement. Our
        team can help identify the appropriate freight solution.</p>
    </div>
    <div  className='bg-blue-600 border rounded-lg px-3 py-2 h-10 text-end mt-12 border-none'>
        <Link to={'#'}>Get a Freight Quote →</Link>
  </div>
  </div>
</section>

    </>
  )
}
