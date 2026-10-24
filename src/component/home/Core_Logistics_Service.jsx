import React from 'react'
import { Link } from 'react-router-dom'

export default function Core_Logistics_Service() {
  return (
   <>
   <section className=''>
    <div  className='flex justify-between'>
  <div className='w-160 ms-10' >
    <div >
    <p className='text-blue-600 font-semibold uppercase text-xs mt-2 leading-7'>CORE LOGISTICS SERVICE</p>
    <h2 className='font-bold text-5xl w-2xl leading-12'>Freight &amp; Logistics <br /><span className='text-blue-500'>Services Across India</span></h2>
  </div>
    <p className='mt-10'>NARSIK Logistics provides FTL, PTL, interstate freight, warehousing, cold chain, project cargo and
      last-mile logistics services for businesses moving goods across India.</p></div>
   <div className='mt-50 text-end font-bold text-black/60 text-xs m-8'><Link to={"#"}>EXPLORE ALL LOGISTICS SERVICES</Link></div> 
  </div>
  <div className='grid grid-cols-4 gap-3 p-3 mx-auto'>
    <div className=' border border-black/10 p-5 rounded-lg w-70'><Link to={'#'}>
    <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>Full Truckload (FTL) Transport</h3>
        <p>Dedicated truck transportation for bulk and commercial freight moving across India.</p>
        <span>view service</span>
      </Link>
    </div>
    <div className=' border border-black/10 p-5 rounded-lg w-70'><Link to={'#'}>
     <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>Part Truckload (PTL) Transport</h3>
        <p>Flexible part-load freight transportation for shipments that do not require a full truck.</p>
        <span>view service</span>
      </Link>
    </div>
    <div className=' border border-black/10 p-5 rounded-lg w-70'>
      <Link to={'#'}>
       <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>Warehousing &amp; Storage</h3>
        <p>Secure storage and warehousing support connected with your wider transport and distribution
          needs.</p>
        <span>view service</span>
      </Link>
    </div>
    <div className=' border border-black/10 p-5 rounded-lg w-70'>
      <Link to={'#'}>
       <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>Cold Chain Logistics</h3>
        <p>Temperature-controlled transportation for pharmaceutical, food and other sensitive cargo.</p>
        <span>view service</span>
      </Link>
    </div>
    <div className=' border border-black/10 p-5 rounded-lg w-70'>
      <Link to={'#'}>
       <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>Project Cargo Transport</h3>
        <p>Specialized transportation for machinery, industrial equipment, heavy and complex cargo.</p>
        <span>view service</span>
      </Link>
    </div>
    <div className=' border border-black/10 p-5 rounded-lg w-70'>
      <Link to={'#'}>
       <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>Interstate Transport Services</h3>
        <p>Reliable freight movement between Rajasthan and major business destinations across India.</p>
        <span>view service</span>
      </Link>
    </div>
    <div className=' border border-black/10 p-5 rounded-lg w-70'>
      <Link to={'#'}>
       <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>Last Mile Delivery</h3>
        <p>Final-mile transportation for businesses, retail networks and distribution operations.</p>
        <span>view service</span>
      </Link>
    </div>
    <div className=' border border-black/10 p-5 rounded-lg w-70'>
      <Link to={'#'}>
       <div className=' border border-black/10 p-5 w-16 rounded-lg'> 
    <i className="fa-sharp fa-regular fa-truck text-black/20 "></i></div>
        <h3 className='font-bold text-lg'>eCommerce Logistics</h3>
        <p>Transportation and fulfilment support for online sellers, D2C brands and growing businesses.
        </p>
        <span>view service</span>
      </Link>
    </div>
  </div>
  <div className='m-10 bg-slate-900 rounded-2xl text-white p-7 flex justify-between'>
    <div className='w-140'>
      <p className='text-blue-600 font-semibold uppercase text-xs mt-2'>Custom Freight Requirement</p>
      <h3 className='font-[Space_Grotesk_sans-serif] text-3xl font-bold'>Need the right transport solution for your cargo?</h3>
      <p>Tell us your cargo type, pickup location, destination and shipment requirement. Our logistics
        team can help identify the most suitable movement option.</p>
    </div>
    <div className='bg-blue-600 border rounded-lg px-3 py-2 h-10 text-end mt-12 border-none'><Link to={'#'}>Discuss Your Requirement →</Link></div>
  </div>
</section>

   </>
  )
}
