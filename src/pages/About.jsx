import React from 'react'
import { Play } from 'lucide-react'
export default function About() {
  return <>


      <main style={{backgroundColor:"white"}}>
        <img src="/assets/hero-bg.webp" alt='background-image' className='bg-img' />
          <div class="content">
            <h1>Freight Movement,<br />
              Engineered for<br />
              India.</h1>
            <h2>Shipping Made Safe. Reliable. Fast.</h2>
            <p>NARSIK Logistics helps businesses move commercial cargo with
              the right transport mode, vehicle and route - from FTL and PTL
              to interstate freight, warehousing and specialized logistics.</p>

            <div className="cta-btn">
              <button id='cta-freeQuote'><b>Get Free Quote →</b></button>
              <button id='shipment-btn'><b><Play/> Track Shipment</b></button>
            </div>

            <section class="sect1">
              <div>
                <h3>5000+</h3>
                <p>Shipments Handled</p>
              </div>

              <div>
                <h3>10+</h3>
                <p>Fleet Access</p>
              </div>

              <div>
                <h3>B2B</h3>
                <p>Customer-Focused Operations</p>
              </div>
              <div>
                <h3>Pan India</h3>
                <p>Service Reach</p>
              </div>

            </section>
          </div>

<div id='box'>
        <section class="bigbox">
          <div class="freight-requirement">
            <h2>Tell us what you need to move.</h2>
            <p>Share the basic shipment details and our team can help <br />
              identify the right transport approach for your cargo, <br />
              route and timeline.</p>

            <h3>⛟ FTL, PTL & specialized freight</h3>
            <p>Choose an approach based on your actual shipment.</p>
            <h3>📍Route-aware planning</h3>
            <p>Pickup, destination and delivery requirements matter.</p>

            <div>
              <button type="button">Get Freight Estimate →</button>
              <button type="button">View Servicest →</button>
            </div>
          </div>

          <div class="quick-shipment">
            <h4>Quick shipment details</h4>
            <p>Have these details ready when requesting a quote.</p>

            <div class="shipment-grid">
                  <div>
                    <h5>Pickup</h5>
                    <p>Pickup location</p>
                  </div>
                  <div>
                    <h5>Delivery</h5>
                    <p>Delivery location</p>
                  </div>
                  <div>
                    <h5>Cargo</h5>
                    <p>Cargo type</p>
                  </div>
                  <div>
                    <h5>Weight</h5>
                    <p>Approx. shipment weight</p>
                  </div>
                  <div>
                    <h5>Load Type</h5>
                    <p>FTL, PTL or specialized</p>
                  </div>
                  <div>
                    <h5>Dispatch</h5>
                    <p>Preferred dispatch date</p>
                  </div>
            </div>
            <div>
              <h4>Need help deciding the right transport?</h4>
              <p>Our team can help assess the shipment before booking.</p>
              <button type="button">Talk to a Freight Expert →</button>
            </div>
          </div>
        </section>
</div>
  </main>
    </>
        
}