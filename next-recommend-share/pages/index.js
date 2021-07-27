import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/layout/Footer'

import { NavBar } from '../components/NavBar/NavBar'

export default function Home() {
  return (
    <>
      <div>
        <NavBar />
        <Footer/>
   
      </div>
    </>
  )
}
