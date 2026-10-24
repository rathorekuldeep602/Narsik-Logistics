import React from 'react'

export default function Track_Your_Freight() {
  return (
    <>
    <section className='m-5'>
      <div className='flex'>
  <div className='w-140 mt-20'>
    <div>
      <p className='text-blue-600 font-semibold uppercase text-xs mt-2'>TRACK YOUR FREIGHT</p>
      <h2 className='font-semibold text-5xl '>Track Your Shipment From Pickup to Delivery</h2>
      <p className='text-sm mt-3'>Stay informed about your freight movement with shipment tracking support from NARSIK Logistics.
        Monitor cargo progress from pickup through transit and delivery with better visibility for your
        business operations.</p>
      <div className='m-12 border-2 border-slate-100 flex justify-between rounded-2xl p-2'>
        <input type="search" placeholder="Enter your Shipment ID" />
        <button className='bg-blue-600 border rounded-lg px-3 py-2 text-white'>Track →</button>
      </div>
      <ul className='flex justify-between list-disc'>
        <li>Shipment Updates</li>
        <li>Freight Visibility</li>
        <li>Delivery Monitoring</li>
      </ul>
    </div>
  </div>
  <div className='m-5 ms-16 w-120 text-white gap-3'>
    <div className="inset-0 rounded-2xl p-3 opacity-120 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent bg-[url('/images/tracking-network-bg.png')] bg-cover bg-center p-5">
    <div className='flex justify-between mbe-10'>
      <div>
        <p className='text-blue-600 font-semibold uppercase text-xs mt-2'>Tracking Preview</p>
        <h4 className='font-bold text-lg'>Shipment Status</h4>
      </div><span className='eyebrow inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-300/20 rounded-full mb-4 md:mb-2 text-[10px] font-bold text-blue-400  '>IN TRANSIT</span>
    </div>
    <div>
      <div className='flex justify-between opacity-50 mbe-10'>
        <div>
        <h4>Freight Received at Hub</h4>
        <p>Transit Hub</p></div>
        <div><span>LATEST</span></div>
      </div>
      <div className='flex justify-between mbe-10'>
        <div>
        <h4>Freight In Transit</h4>
        <p>Transport Route</p></div>
        <div><span>IN TRANSIT</span></div>
      </div>
      <div className='flex justify-between opacity-50 mbe-10'>
        <div>
        <h4>Cargo Processed at Warehouse</h4>
        <p>Distribution Center</p></div>
        <div><span>PROCESSED</span></div>
      </div>
      <div className='flex justify-between opacity-50 mbe-10'>
        <div>
        <h4>Shipment Booking Confirmed</h4>
        <p>NARSIK Logistics</p></div>
        <div><span>CONFIRMED</span></div>
      </div>
    </div>
    <div className='flex justify-between border border-white/20 p-5 mbe-10'>
      <div>
      <h4>Logistics Support Team</h4>
      <p className='text-blue-600'>Shipment Assistance</p></div>
      <div><button>+91 9929031702 <br /><span className='text-blue-600'>NEED SUPPORT?</span></button></div>
    </div>
  </div>
  </div>
  </div>
</section>
</>

  )
}
