import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../component/Header.js'

const Applayout = () => {
  return (
    <div className='bg-gray-950 text-white min-h-screen w-full'>
       <div className='container px-6 py-4 mx-auto '>   
         <Header/>
        <main className='w-full'>
            <Outlet></Outlet>
        </main>
        </div>
    </div>
  )
}

export default Applayout