import React from 'react'

export default function Freight_Requirement() {
  return (
   <>
   <section className="w-full py-10 bg-white p-9 background-image:linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)">

            {/* <img src="linear-gradient(rgb(0, 0, 0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)"/> */}
            <div id='box bg-black'>
              <section className="bigbox flex border-2 border-black-500 rounded-4xl p-6 bg-black text-white p-4">
                <div className="freight-requirement w-lg ml-3 ">
                  <span className='eyebrow inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 md:mb-2 text-xs text-blue-500'> FREIGHT REQUIREMENT</span>
                  <h2 className='supporting-text text-white text-[28px] mt-4'>Tell us what you need to move.</h2>
                  <p className='hero-text text-stone-300 mb-7 mt-4'>Share the basic shipment details and our team can help <br />
                    identify the right transport approach for your cargo, <br />
                    route and timeline.</p>

                  <h3 className='requirement1 text-md font-bold'>⛟ FTL, PTL & specialized freight</h3>
                  <p className='requirement-mean mt-1'>Choose an approach based on your actual shipment.</p>
                  <h3 className='requirement1 text-md font-bold mt-2'>📍Route-aware planning</h3>
                  <p className='requirement-mean mt-1'>Pickup, destination and delivery requirements matter.</p>

                  <div className='flex flex-wrap gap-4 mt-10'>
                    <button className='cta-btns bg-blue-600 border rounded-lg px-3 py-2 border-none'>Get Freight Estimate →</button>
                    <button className='cta-btns border-slate-50 border rounded-lg px-4 py-2 '>View Services →</button>
                  </div>
                </div>

                <div>
                  <h4 className="quick-shipment text-md font-bold mb-3">Quick shipment details</h4>
                  <div className='flex justify-around mb-3'>
                    <p className='text-stone-300'>Have these details ready when requesting a quote.</p>
                    <span className='eyebrow border border-stone-500 rounded-full px-4'> B2B FREIGHT </span>
                  </div>

                  <div className="shipment-grid grid grid-cols-2 gap-3">
                    <div className="border border-stone-300 rounded-xl bg-blue-500/10 px-4 py-2 ">
                      <h5>Pickup</h5>
                      <p>Pickup location</p>
                    </div>

                    <div className="border border-stone-300 rounded-xl bg-blue-500/10 px-4 py-2">
                      <h5>Delivery</h5>
                      <p>Delivery location</p>
                    </div>

                    <div className="border border-stone-300 rounded-xl bg-blue-500/10 px-4 py-2">
                      <h5>Cargo</h5>
                      <p>Cargo type</p>
                    </div>

                    <div className="border border-stone-300 rounded-xl bg-blue-500/10 px-4 py-2">
                      <h5>Weight</h5>
                      <p>Approx. shipment weight</p>
                    </div>

                    <div className="border border-stone-300 rounded-xl bg-blue-500/10 px-4 py-2">
                      <h5>Load Type</h5>
                      <p>FTL, PTL or specialized</p>
                    </div>

                    <div className="border border-stone-300 rounded-xl bg-blue-500/10 px-4 py-2">
                      <h5>Dispatch</h5>
                      <p>Preferred dispatch date</p>
                    </div>
                  </div>

                  <div className="border border-stone-300 rounded-xl bg-blue-500/10 mt-5 flex gap-8 p-3 " >
                    <div>
                      <h4>Need help deciding the right transport?</h4>
                      <p className='text-sm'>Our team can help assess the shipment before booking.</p>
                    </div>
                    <button className='cta-btns border-slate-600 border rounded-lg px-4 py-2 text-sm font-bold '>Talk to a Freight Expert →</button>
                  </div>

                </div>

              </section>
            </div>
          </section>
   </>
  )
}
