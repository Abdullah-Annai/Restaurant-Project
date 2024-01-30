import React from 'react'
import { useSpring, animated } from 'react-spring'
import { InView, useInView } from 'react-intersection-observer'

const Number = () => {

  function Number({n}){

    const [ref,inView] = useInView({ triggerOnce: true })
    const {number} = useSpring({
      from: { number: 0},
      number: inView ? n : 0,
      delay: 200,
      config: { mass:1,tension:20,friction:10},
    })

    return <animated.div ref={ref} >{number.to((n)=>n.toFixed(0))}</animated.div>
  }


  return (
    <div className='relative min-h-[40vh] w-full text-white bg-[url(./assets/Images/cta-sp-bg.svg)] bg-black pb-8 mt-5 md:mt-0'>
        <div data-aos="fade-right" data-aos-once="true" className="h-full max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-3 text-center font-serif">
            <div className="mt-12">
              <h3 className='text-6xl font-bold font-sarif flex justify-center items-center'><Number n={15} /><span className='text-xl top-1 relative'>+</span></h3>
              <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Year Experience</p>
            </div>
            <div className="mt-12">
            <h3 className='text-6xl font-bold font-sarif flex justify-center items-center'><Number n={5} /><span className='text-xl top-1 relative'>+</span></h3>
            <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Master Chefs</p>
            </div>
            <div className="mt-12">
              <h3 className='text-6xl font-bold font-sarif flex justify-center items-center'><Number n={200} /><span className='text-xl top-1 relative'>+</span></h3>
              <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Daily Visitors</p>
            </div>
            <div className="mt-12">
              <h3 className='text-6xl font-bold font-sarif flex justify-center items-center'><Number n={7} /><span className='text-xl top-1 relative'>+</span></h3>
              <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Achievements</p>
            </div>
        </div>
    </div>
  )
}

export default Number