import React from 'react'

const Number = () => {
  return (
    <div className='relative min-h-[40vh] w-full text-white bg-[url(./assets/Images/cta-sp-bg.svg)] bg-black pb-8'>
        <div data-aos="fade-right" data-aos-once="true" className="h-full max-w-5xl mx-auto grid sm:grid-cols-1 md:grid-cols-4 gap-3 text-center font-serif">
            <div className="mt-12 md:border-r-4 border-primary">
              <h3 className='text-6xl font-bold font-sarif'>15<span className='text-xl -top-1 relative'>+</span></h3>
              <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Year Experience</p>
            </div>
            <div className="mt-12 md:border-r-4 border-primary">
            <h3 className='text-6xl font-bold font-sarif'>5<span className='text-xl -top-1 relative'>+</span></h3>
            <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Master Chefs</p>
            </div>
            <div className="mt-12 md:border-r-4 border-primary">
              <h3 className='text-6xl font-bold font-sarif'>200<span className='text-xl -top-1 relative'>+</span></h3>
              <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Daily Visitors</p>
            </div>
            <div className="mt-12 md:border-r-4 border-primary">
              <h3 className='text-6xl font-bold font-sarif'>3<span className='text-xl -top-1 relative'>+</span></h3>
              <p className='mt-5 font-medium text-2xl animate__animated animate__fadeInLeft'>Achievements</p>
            </div>
        </div>
    </div>
  )
}

export default Number