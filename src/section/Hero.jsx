import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hero1 from '../assets/Images/hero/hero-1.png'
import hero2 from '../assets/Images/hero/hero-2.png'
import hero3 from '../assets/Images/hero/hero-3.png'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

const Hero = () => {
  const images = [hero1,hero2,hero3]
  const text =['Epicurean Restaurant & Enjoy Our Food','Epicurean Excellence in Every Bite','Discover Epicurean Elegance']
  const [hero,setHero] = useState(0);
  const [slideText,setText] = useState("Epicurean Restaurant & Enjoy Our Food")

  const handleClick = (index)=>{
    setHero(index)
  }

  const nextSlide = ()=>{
    if(hero < 2){
        setHero(slide => slide+=1)
        setText(text[hero])
    } else{
        setHero(0)
        setText(text[hero])
    }
  }
  return (
    <div className='h-auto md:h-[90vh] w-full pb-24 md:pb-0'>
        <div className="max-w-6xl mx-auto h-full mt-1 flex md:justify-between md:flex-row flex-col p-5 relative">
            <div data-aos="fade-up" data-aos-once="true" className="hero-left md:w-1/2 md:mt-[3em]">
                <p className='font-semibold text-lg text-stone-800 uppercase  md:mt-10 mb-5'>Welcome to our</p>
                <h3 style={{fontFamily: 'bakilda'}} className='font-bold text-5xl animate__animated animate__fadeInDown text-stone-800 mb-2 transition-all duration-800'>{slideText}</h3>
                <p className='text-[#53565C] font-light font-serif text-sm text-start pb-5'>You need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text ever since the starting</p>
                <Link to="/menu" className='btn mt-5 font-serif font-medium animate__animated animate__fadeInDown py-3'>Explore our menu</Link>

                {/* Thumnails Slide */}
                <div className="w-full min-h-20 absolute md:static top-[99%] md:top-0 md:mt-10 py-3 pb-10 md:pb-0">
                    <ul className='flex gap-5 select-none'>
                        {images.map((img,index) =>(
                            <li onClick={()=>handleClick(index)} className={`cursor-pointer h-20 w-20 rounded-full bg-[#FEE9C8] border-4 ${hero === index ? "border-[#FED391]" : " "}`} key={index}><img src={img} alt="" /></li>
                        ))}
                        <span className='h-10 cursor-pointer bg-[#FEE9C8] w-8 rounded-sm mt-5 ml-9 flex items-center justify-center font-thin text-xl text-primary' onClick={nextSlide}><ion-icon name="chevron-forward-outline"></ion-icon></span>
                    </ul>
                </div>

            </div>
            <div className="hero-right relative top-10 pb-10 md:pb-0 md:static -mt-38 md:mt-0 md:w-1/2 select-none">
                {images.map((img,index)=>(
                    <img style={{
                        transform : hero == index ? "scale(1)" : "scale(0)",
                        transition : "all .2s ease-in-out"

                    }}  src={hero == index ? img : ''} alt='' />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Hero