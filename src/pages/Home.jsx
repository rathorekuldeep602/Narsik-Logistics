import React from 'react'
import Layout from '../component/layout/Layout'
import Hero from '../component/home/Hero'
import Freight_Requirement from '../component/home/Freight_Requirement'
import Logistics_capabilities from '../component/home/Logistics_capabilities'
import Find_the_right_movement from '../component/home/Find_the_right_movement'
import Core_Logistics_Service from '../component/home/Core_Logistics_Service'
import Why_Narsik from '../component/home/Why_Narsik'
import Find_The_Right_Freight_Option from '../component/home/Find_The_Right_Freight_Option'
import Track_Your_Freight from '../component/home/Track_Your_Freight'
import Industries_We_Serve from '../component/home/Industries_We_Serve'
import Network_Freight_Corridors from '../component/home/Network_Freight_Corridors'
import How_We_Move_Your_Goods from '../component/home/How_We_Move_Your_Goods'
import Proof_Trust from '../component/home/Proof_Trust'
import Sustainability_The_Road_Ahead from '../component/home/Sustainability_The_Road_Ahead'
import Freight_Guides from '../component/home/Freight_Guides'
import Talk_To_Our_Logistics_Team from '../component/home/Talk_To_Our_Logistics_Team'
import Practice from '../component/Practice'
import WhatsappIcon from '../component/whatsappIcon'
export default function Home() {
  return (
     <>
    <Layout>
      <main>
      <Hero/>
      <Freight_Requirement/>
      <Logistics_capabilities/>
      <Find_the_right_movement/>
      <Core_Logistics_Service/>
      <Why_Narsik/>
      <Find_The_Right_Freight_Option/>
      <Track_Your_Freight/>
      <Industries_We_Serve/>
      <Network_Freight_Corridors/>
      <How_We_Move_Your_Goods/>
      <Proof_Trust/>
      <Sustainability_The_Road_Ahead/>
      <Freight_Guides/>
      <Talk_To_Our_Logistics_Team/>
      <WhatsappIcon/>
      </main>
    </Layout>
   
    {/* <Practice/> */}
    </>
  )
}
