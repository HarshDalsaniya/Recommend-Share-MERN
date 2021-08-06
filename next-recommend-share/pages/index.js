import Head from 'next/head'
import Image from 'next/image'
import React ,{useEffect , useState} from 'react'
import { Banner } from '../components/Home/Banner'
import { Box } from '../components/Home/Box'
import { HowDoes } from '../components/Home/HowDoes'
import { TheNewWay } from '../components/Home/TheNewWay'
import { ThePower } from '../components/Home/ThePower'
import { WhatPeople } from '../components/Home/WhatPeople'


export default function Home() {

  return (
    <React.Fragment>
  
     <Banner 
     backgroundImage = "/banner/home-banner-new-D.jpg"/>
      <ThePower 
      powerImage = "/dashboard/hero-power-community.svg"/>
      <TheNewWay/>
      <HowDoes />
      <Box />
      <WhatPeople/>
    
      </React.Fragment>
   

  )
}
