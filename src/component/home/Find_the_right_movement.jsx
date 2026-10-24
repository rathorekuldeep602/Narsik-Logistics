import React from 'react'
import { Link } from 'react-router-dom'

export default function Find_the_right_movement() {
  return (
    <>
   <section>
  <div>
    <p className='text-blue-600 font-semibold uppercase text-xs mt-2 text-center'>Find the right movement</p>
    <h2 className='text-5xl font-bold text-center mt-2'>What are you moving?</h2>
    <p className='text-center text-lg m-2 ps-70 pe-70 opacity-70'>Every shipment has different requirements. Choose the type of freight you handle and explore the
      transport approach that fits your business.</p>
  </div>
  <div className='mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to="https://www.narsiklogistics.com/services/project-cargo-transport-in-india">
        <div>
          <h3>Industrial &amp; Machinery</h3>
          <p>Equipment, machinery, components and industrial cargo requiring planned movement.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to={'#'}>
        <div>
          <h3>General Business Freight</h3>
          <p>Regular commercial shipments, cartons, pallets and business-to-business cargo.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to={'#'}>
        <div>
          <h3>eCommerce &amp; Parcels</h3>
          <p>Business shipments and distribution requirements for growing commerce operations.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to={'#'}>
        <div>
          <h3>Temperature-Sensitive</h3>
          <p>Cargo requiring controlled handling and temperature-conscious transportation.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to={'#'}>
        <div>
          <h3>Pharma &amp; Healthcare</h3>
          <p>Healthcare-related shipments where handling, timing and transport conditions matter.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to={'#'}>
        <div>
          <h3>Agriculture &amp; Food</h3>
          <p>Agricultural and food-related cargo requiring dependable movement across routes.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to={'#'}>
        <div>
          <h3>Construction &amp; Infrastructure</h3>
          <p>Materials, equipment and project cargo supporting construction and infrastructure.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
    <div className='border-2 border-slate-200 rounded-lg p-3 bg-slate-100'>
      <Link to={'#'}>
        <div>
          <h3>Other Specialized Cargo</h3>
          <p>Have Link different requirement? Tell us what you need to move and we'll assess it.</p>
        </div>
        <div className='text-blue-600'>Explore →</div>
      </Link>
    </div>
  </div>
  <div className='flex bg-black text-white justify-between p-5 m-2 rounded-lg'>
    <div >
      <h4>Not sure which transport solution fits?</h4>
      <p>Share your route and cargo requirement with our team.</p>
    </div>
    <Link to={'#'} className='bg-blue-600 border rounded-lg px-3 py-2 border-none'>Discuss your Requirement →</Link>
  </div>
</section>

    </>
  )
}
