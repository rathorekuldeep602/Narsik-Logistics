import React from 'react'
import { Link } from 'react-router-dom'

export default function Network_Freight_Corridors() {
  return (
   <>
 <section className='m-5'>
  <div className='flex mb-10'>
    <div className='w-380 '>
      <p className='text-blue-600 font-semibold uppercase text-xs mt-2 w-90'>NETWORK &amp; FREIGHT CORRIDORS</p>
      <h2 className='font-bold text-5xl '>Moving Freight From Jaipur <br />
      <span className='text-black/60 italic '>Across India.</span></h2>
    </div>
    <div className='mt-24 text-black/60'>
      <p>NARSIK provides freight transportation support from Jaipur across major Indian business
        destinations, helping manufacturers, traders, distributors, retailers, and other businesses
        coordinate interstate cargo movement.
      </p>
    </div>
  </div>
  <div className='flex'>
    <div className='bg-slate-900 rounded-2xl w-350 p-6'>
      <p className='text-blue-600 font-semibold uppercase text-xs mt-2 w-90'>PRIMARY OPERATING BASE</p>
      <h2 className='text-white font-bold text-2xl'>Jaipur, Rajasthan</h2>
      <div className='grid grid-cols-3 text-white m-5'> 
      <div className='border border-slate-700 p-2 rounded-2xl m-2  bg-slate-800'>
        <h4 className='font-bold text-sm'>Interstate Freight</h4>
        <p className='text-xs text-slate-400 mt-3'>Route-based cargo movement</p>
      </div>
      <div className='border border-slate-700 p-2 m-2 rounded-2xl bg-slate-800 '>
        <h4 className='font-bold text-sm'>FTL &amp; PTL</h4>
        <p className='text-xs text-slate-400 mt-3'>Full and part load transport</p>
      </div>
      <div className='border border-slate-700 p-2 m-2 rounded-2xl bg-slate-800'>
        <h4 className='font-bold text-sm'>Pan-India Reach</h4>
        <p className='text-xs text-slate-400 mt-3'>Business freight destinations</p>
      </div>
      </div>
    </div>
    <div className='ps-5 ms-10 border border-slate-400 w-100 rounded-2xl'>
      <p className='text-slate-600 font-semibold uppercase text-xs mt-2 w-90'>SERVICE REACH</p>
      <h2 className='font-bold text-2xl'>Rajasthan &amp; Beyond</h2>
      <p className='mt-5 mb-10'>Freight planning and transport support for shipments moving between Jaipur, Rajasthan, and major
        commercial destinations across India.</p>
      <Link to={'#'} className='text-blue-600 mt-50'>Interstate Transport ↗</Link>
    </div>
  </div>
  <div className='m-5 border border-slate-200 rounded-2xl p-5'>
    <div className='flex'>
      <div className='w-400'>
        <p className='text-blue-600 font-semibold uppercase text-xs mt-2'>FREIGHT ROUTES</p>
        <h2 className='font-bold text-lg leading-7'>Key Freight Corridors</h2>
      </div>
      <div>
        <p className='text-xs text-black/60'>Representative routes for business freight movement. Actual service availability depends on
          cargo, vehicle requirements, destination, and scheduling.</p>
      </div>
    </div>
    <div className='grid grid-cols-3'>
    <div className='border border-slate-100 bg-slate-200 w-84 p-2 rounded-2xl m-2'>
      <h5>Jaipur <span className='text-blue-700'>↗ </span>Delhi NCR</h5>
      <p>Rajasthan ↔ Delhi NCR freight movement</p>
    </div>
    <div className='border border-slate-100 bg-slate-200 w-84 p-2 rounded-2xl m-2'>
      <h5>Jaipur  <span className='text-blue-700'>↗ </span>Ahmedabad</h5>
      <p>Rajasthan ↔ Gujarat business freight</p>
    </div>
    <div className='border border-slate-100 bg-slate-200 w-84 p-2 rounded-2xl m-2'>
      <h5>Jaipur  <span className='text-blue-700'>↗ </span>Mumbai</h5>
      <p>North-West India ↔ Mumbai movement</p>
    </div>
    <div className='border border-slate-100 bg-slate-200 w-84 p-2 rounded-2xl m-2'>
      <h5>Jaipur  <span className='text-blue-700'>↗ </span>Agra</h5>
      <p>Rajasthan ↔ Uttar Pradesh freight</p>
    </div>
    <div className='border border-slate-100 bg-slate-200 w-84 p-2 rounded-2xl m-2'>
      <h5>Jaipur  <span className='text-blue-700'>↗ </span>Lucknow</h5>
      <p>North India interstate transport</p>
    </div>
    <div className='border border-slate-100 bg-slate-200 w-84 p-2 rounded-2xl m-2'>
      <h5>Jaipur  <span className='text-blue-700'>↗ </span>Bhopal</h5>
      <p>Rajasthan ↔ Central India freight</p>
    </div>
  </div>
  </div>
</section>

   </>
  )
}
