import React, { useState } from 'react'
import chef1 from '../assets/Images/chef/chef-1.png'
import chef2 from '../assets/Images/chef/chef-2.png'
import chef3 from '../assets/Images/chef/chef-3.png'

const Chef = () => {

    const [active,setActive] = useState(null)

    const handleHover = (index) =>{
        setActive(index)
    }

    const removeHover = () =>{
        setActive(null)
    }

    const data = [
        {
            img  : chef1,
            name : "Vineent Sinclair",
            role : "Cheif Master Chef"
        },
        {
            img  : chef2,
            name : "Camila Fernandez",
            role : "Executive Chef"
        },
        {
            img  : chef3,
            name : "Harrison Grant",
            role : "Executive Head Chef"
        }
    ]

  return (
    <div className='min-h-screen w-full bg-zinc-100'>
        <div className="max-w-6xl h-full py-3 mx-auto">
            <p className='text-primary font-serif text-center py-5'>Our Expert</p>
            <h4 className='font-[bakilda] text-4xl text-center font-semibold pb-4'>Meet Our Chefs</h4>
            <div data-aos="fade-right" data-aos-once="true" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {data.map((value,index)=>(
                    <div key={index} className='relative shadow-lg shadow-zinc-400 group overflow-hidden max-w-1/2 mx-auto cursor-pointer'>
                    <img className='rounded-lg' src={value.img} alt='' />
                    <div className='absolute text-center h-full top-0 left-0 flex flex-col bg-white translate-y-[85%] md:translate-y-[84%] lg:translate-y-[83%] rounded-b-lg px-3 py-3 group-hover:items-center group-hover:justify-center group-hover:-translate-y-0 group-hover:bg-[rgba(0,0,0,0.5)] group-hover:text-white transition-all duration-500'>
                        <p className='font-sans font-semibold text-xl'>{value.name}</p>
                        <span className='text-primary font-serif text-sm font-light'>{value.role}</span>
                        <p className='text-sm py-3 font-sarif font-light'>Meet our extraordinary chef, a culinary virtuoso who transforms every dish into a masterpiece</p>
                        <div className="social flex gap-2 mt-2 justify-center">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-linkedin"></ion-icon>
                            <ion-icon name="logo-instagram"></ion-icon>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Chef