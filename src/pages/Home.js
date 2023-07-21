import React from 'react'
import Navbar from '../components/Nav_bar'
import Card from '../components/Card'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
      <Navbar />
      <main className='mx-5 my-5 flex space-x-3 flex-col md:flex-row'>
       <Card imgSrc={"https://shorturl.at/FJZ14"} title={"Burger"} price={1800}/> 
       <Card imgSrc={"https://shorturl.at/osDT6"} title={"Pizza"} price={2500}/>
      </main>
      <Footer />

    </>
  )
}
