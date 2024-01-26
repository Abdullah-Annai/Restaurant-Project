import React, { useState } from 'react'
import photo1 from '../assets/Images/testimonal/testimonial-1.png'
import photo2 from '../assets/Images/testimonal/testimonial-2.png'
import side1 from '../assets/Images/testimonal/testimonial-anim-1.svg'
import side2 from '../assets/Images/testimonal/testimonial-anim-2.svg'

const Testimonal = () => {

  const [photo,setPhoto] = useState(0)

  const data = [
    {
        img : photo1,
        name : "Amanda Mortan",
        role : "Head Manager,Slack"
    },
    {
        img : photo2,
        name : "Harrison Grant",
        role : "Head Manager,Git"
    }
  ]
  return (
    <div className='h-auto w-full relative mb-8'>
        <img className='absolute left-3 md:left-14 top-[45%] anim-slide' src={side1} alt='animatiom'/>
        <img className='absolute right-3 md:right-14 top-28 lg:top-[10%] anim-slide' src={side2} alt='animatiom'/>
        <p className='text-primary text-center text-base py-5'>Testimonal</p>
        <h5 className='text-4xl text-center font-[bakilda]'>What Client Says</h5>
        <div data-aos="fade-up" data-aos-once="true" className="flex justify-center flex-col max-w-[200px] mx-auto py-5 text-center">
            {data.map((value,index)=>
                photo == index ? (
                    <>
                    <img src={value.img} alt="" />
                    <h4 className='text-xl font-semibold pt-3 font-serif'>{value.name}</h4>
                    <p className='text-sm text-neutral-500'>{value.role}</p>
                    <div className="text-primary">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    </div>
                    </>
                ) : ''
            )}
        </div>
        <div className="relative max-w-2xl mx-auto mb-16">
            <span>
                <svg width="60" height="40" viewBox="0 0 80 65" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path opacity="0.1" d="M0 65V47.0206C0 37.5995 1.15443 29.853 3.48051 23.8147C5.78936 17.7765 9.75231 12.6516 15.3521 8.44002C20.952 4.21155 27.2582 1.40385 34.2537 0V14.3937C29.2742 17.2014 26.4656 20.9732 25.7937 25.6753H34.2537V65H0ZM45.7463 65V47.0206C45.7463 37.5995 46.9007 29.853 49.2268 23.8147C51.5356 17.7765 55.4814 12.6516 61.0467 8.44002C66.6121 4.22847 72.9184 1.40385 80 0V14.3937C75.0205 17.2014 72.2119 20.9732 71.54 25.6753H80V65H45.7463Z" fill="currentColor"></path></svg>
            </span>
            <p className='text-center font-light'>Everything was so nice. Food was really great as they say. Easy to order, great service, and whole environment was very unique. Happy to make a visit in Epicurean.</p>
            <span className='absolute right-1'>
				<svg width="60" height="40" viewBox="0 0 80 65" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path opacity="0.1" d="M80 65V47.0206C80 37.5995 78.8456 29.853 76.5195 23.8147C74.2106 17.7765 70.2477 12.6516 64.6479 8.44002C59.048 4.21155 52.7418 1.40385 45.7463 0V14.3937C50.7258 17.2014 53.5344 20.9732 54.2063 25.6753H45.7463V65H80ZM34.2537 65V47.0206C34.2537 37.5995 33.0993 29.853 30.7732 23.8147C28.4644 17.7765 24.5186 12.6516 18.9533 8.44002C13.3879 4.22847 7.08163 1.40385 0 0V14.3937C4.97954 17.2014 7.78807 20.9732 8.46004 25.6753H0V65H34.2537Z" fill="currentColor"></path></svg>
			</span>
        </div>
        <div className="flex gap-2 justify-center mt-5">
            <button onClick={()=>setPhoto(0)} className={`h-3 w-3 rounded-full ${ photo == 0 ? "bg-primary" : "bg-slate-300" }`}></button>
            <button onClick={()=>setPhoto(1)} className={`h-3 w-3 rounded-full ${ photo == 1 ? "bg-primary" : "bg-slate-300" }`}></button>
        </div>
    </div>
  )
}

export default Testimonal