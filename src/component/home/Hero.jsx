import React from 'react'
import { Play } from 'lucide-react'
export default function () {
  return (
    <section className='relative'>
      <div className='bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent'><img src="/assets/hero-bg.webp" alt='background-image' className='bg-img' />
        <div className="content ">
          <span className='eyebrow inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 md:mb-2 text-xs text-blue-500'>
            B2B FREIGHT & LOGISTICS </span>
          <h1 className='Hero-heading text-6xl font-extrabold'>Freight Movement,<br />
            Engineered for<br />
            India.</h1>
          <h3 className='text-4xl text-blue-500 mt-3'>Shipping Made Safe. Reliable. Fast.</h3>
          <p className='mt-5'>NARSIK Logistics helps businesses move commercial cargo with
            the right transport mode, vehicle and route - from FTL and PTL
            to interstate freight, warehousing and specialized logistics.</p>

          <div className="cta-btn flex justify-between gap-4 ">
            <button className='cta-freeQuote  bg-blue-600 text-white rounded-lg font-bold flex justify-between gap-2 hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/40  w-94 h-10 pt-2 align center ps-5  text-center mt-10 '>Get Free Quote→</button>
            <button className='shipment-btn    bg-white/5  text-white rounded-xl font-bold flex  justify-between gap-2 hover:bg-white/10 transition-all border border-white/10 group w-94 text-center mt-10 h-10 pt-2 ps-3 align-center '>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-play w-4 h-4 text-blue-500 fill-blue-500" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>Track Shipment</button>
          </div>

          <div className="sect1 flex justify-between mt-12.5 p-1">
            <div>
              <h3 className='text-2xl font-bold '>5000+</h3>
              <p className='uppercase text-xs font-semibold text-white/60'>Shipments Handled</p>
            </div>

            <div>
              <h3 className='text-2xl font-bold '>10+</h3>
              <p className='uppercase text-xs font-semibold text-white/60'>Fleet Access</p>
            </div>

            <div>
              <h3 className='text-2xl font-bold '>B2B</h3>
              <p className='uppercase text-xs font-semibold text-white/60'>Customer-Focused <br /> Operations</p>
            </div>
            <div>
              <h3 className='text-2xl font-bold '>Pan India</h3>
              <p className='uppercase text-xs font-semibold text-white/60'>Service Reach</p>
            </div>

          </div>
        </div></div>
    </section>
  )
}
