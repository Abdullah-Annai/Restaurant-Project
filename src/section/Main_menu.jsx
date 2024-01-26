import React, { useState } from 'react'
import menu1 from '../assets/Images/food-menu/menu-1.png'
import menu2 from '../assets/Images/food-menu/menu-2.png'
import menu3 from '../assets/Images/food-menu/menu-3.png'
import menu4 from '../assets/Images/food-menu/menu-4.png'
import { Link } from 'react-router-dom'

const Main_menu = () => {
  const menu = ['Lunch','Breakfast','Dinner','Snacks'] 
  const [slide,setSlide] = useState(0)

  const menuData = [
    [{
      img : menu1,
      name : "Delicious Ebony Steak",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu2,
      name : "Hot Spicy Chicken",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu3,
      name : "New Meat Rice Bowl",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu4,
      name : "Tasty Lobster Noodles",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    }],
    [{
      img : menu1,
      name : "Delicious Ebony Steak",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu2,
      name : "Hot Spicy Chicken",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu3,
      name : "New Meat Rice Bowl",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu4,
      name : "Tasty Lobster Noodles",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    }],
    [{
      img : menu1,
      name : "Delicious Ebony Steak",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu2,
      name : "Hot Spicy Chicken",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu3,
      name : "New Meat Rice Bowl",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu4,
      name : "Tasty Lobster Noodles",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    }],
    [{
      img : menu1,
      name : "Delicious Ebony Steak",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu2,
      name : "Hot Spicy Chicken",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu3,
      name : "New Meat Rice Bowl",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    },
    {
      img : menu4,
      name : "Tasty Lobster Noodles",
      quantity : "Quantity (250gm)",
      prize : "$28.00",
      desc : "There are many variations of Lorem Ipsum form",
    }]
  ]
  const changeSlide = (index)=>{
    setSlide(index)
  }
  return (
    <div className='min-h-screen w-full bg-zinc-100 pb-5'>
        <div data-aos="fade-down" data-aos-once="true" className="h-full max-w-6xl mx-auto">
            <p className='text-primary font-serif text-center py-5'>Menu Book</p>
            <h4 className='font-[bakilda] text-4xl text-center font-semibold'>our main menu</h4>
            <ul className='mt-10 flex justify-center cursor-pointer transition-all'>
                {menu.map((val,index)=>(
                    <li onClick={()=>changeSlide(index)} className={`font-semibold text-lg md:text-2xl px-4 md:px-10 border-b-2 ${index== slide ? 'border-primary' : ''} `} key={index}>{val}</li>
                ))}
            </ul>
            <div data-aos="fade-left" data-aos-once="true" className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {menuData.map((_,index)=>
                index == slide ? 
                  menuData[slide].map((value)=>(
                    <div className="p-5 rounded bg-white shadow-xl shadow-neutral-300 animate__animated animate__fadeInLeft">
                    <img className='border-2 border-dotted border-primary rounded-full p-1 pb-1' src={value.img} alt="" />
                    <h4 className='font-sans font-semibold text-xl pb-1'>{value.name}</h4>
                    <span className='text-neutral-500 text-base font-semibold font-sans pb-1'>{value.quantity}</span>
                    <p className='text-2xl text-primary font-bold pb-1'>{value.prize}</p>
                    <p className='text-sm text-neutral-700 leading-5 pb-1'>{value.desc}</p>
                    <button className='mt-2 btn bg-primary/85 hover:bg-primary transition-colors duration-300 font-extralight'>Order Now</button>
                  </div>)) : null
)}
        </div>
        </div>
        <div className='mt-20 text-center'>
          <Link to="/menu" className='transition-all duration-300 border-2 border-primary text-primary p-2 rounded-lg text-base hover:bg-primary hover:text-white'>View More</Link>
        </div>
    </div>
  )
}

export default Main_menu