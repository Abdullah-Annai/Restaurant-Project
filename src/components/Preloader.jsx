import React from 'react'
import loader from '../assets/Images/loader.gif'
const Preloader = () => {
  return (
    <div className='fixed h-screen w-full'>
        <div className="flex h-full justify-center items-center">
            <img src={loader} alt="loader" />
        </div>
    </div>
  )
}

export default Preloader