import React from 'react'
import letter from '../assets/Images/footer-subscribe-bg.png'
import { Link } from 'react-router-dom'
const Footer = () => {
const product = ['Breakfast:menu','Lunch:menu','Dinner:menu','Book a table:bookt']
const info = ['FAQ',"Blog","Support"]
const company = ['About us:#','Our menu:menu','Contact us:#']
  return (
    <div className="relative h-auto w-full bg-[url(./assets/Images/footer-bg.png)] bg-center bg-cover  px-6 text-white pb-10 z-0 grid grid-cols-1 md:grid-cols-4">
      <div className="absolute h-full w-full bg-black opacity-50 -z-10 "></div>
      <div className="mt-10">
        <h3 className='text-2xl font-bold'>Product</h3>
        <ul className='flex flex-col gap-2 text-xl mt-3 text-white/80 font-sarif'>
            {product.map((value)=>(
                <Link to={value.split(":")[1]} className='cursor-pointer text-sm hover:text-primary duration-75 transition'>{value.split(":")[0]}</Link>
            ))}
        </ul>
      </div>
      <div className="mt-10">
      <h3 className='text-2xl font-bold'>Information</h3>
        <ul className='flex flex-col gap-2 text-xl mt-3 text-white/80 font-sarif'>
            {info.map((value)=>(
                <li className='cursor-pointer text-sm hover:text-primary duration-75 transition'>{value}</li>
            ))}
        </ul>
      </div>
      <div className="mt-10">
      <h3 className='text-2xl font-bold'>Company</h3>
        <ul className='flex flex-col gap-2 text-xl mt-3 text-white/80 font-sarif'>
            {company.map((value)=>(
                <Link to={value.split(":")[1]} className='cursor-pointer text-sm hover:text-primary duration-75 transition'>{value.split(":")[0]}</Link>
            ))}
        </ul>
      </div>
      <div className="mt-5 bg-zinc-600 h-50 p-5 rounded lg:w-96 relative md:-left-28">
        <img className='w-full' src={letter} alt="" />
        <div className="absolute top-4 p-3 font-serif">
          <p className='text-sm'>Subscribe</p>
          <h4 style={{fontFamily:"bakilda"}} className='font-sarif font-semibold text-center text-2xl my-2'>Our News letter</h4>
          <p className='text-sm'>To Get Regular Update</p>
        </div>
        <form className='flex justify-start mt-4 gap-3 flex-wrap'>
            <input type="email" name='letter' className='form-control max-w-full md:flex-grow' placeholder='Enter your mail'/>
            <button className='outline-none bg-primary px-3 py-2 rounded flex-grow font-semibold'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default Footer