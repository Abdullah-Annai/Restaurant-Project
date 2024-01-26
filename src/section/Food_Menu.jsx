import React from 'react'
import Menu from '../components/Menu'
const Menus = () => {

  return (
    <div className='md:min-h-screen w-full mt-5 pb-10'>
      <p className='text-center text-primary text-base font-serif pb-5'>Menu Book</p>
      <p className='text-center text-5xl font-[bakilda] mb-5'>Enjoy Breakfast Menu</p>
      <Menu value={"breakfast"} animation={"animate__fadeInLeft"}/>
      <div className="w-full pt-8">
        <p className='text-center text-primary text-base font-serif pb-5'>Menu Book</p>
        <p className='text-center text-5xl font-[bakilda] mb-5'>Enjoy Lunch Menu</p>
        <Menu value={"lunch"} animation={"animate__fadeInRight"}/>
      </div>
      <div className="w-full pt-8">
        <p className='text-center text-primary text-base font-serif pb-5'>Menu Book</p>
        <p className='text-center text-5xl font-[bakilda] mb-5'>Enjoy Dinner Menu</p>
        <Menu value={"dinner"} animation={"animate__fadeInUp"}/>
      </div>
    </div>
  )
}

export default Menus