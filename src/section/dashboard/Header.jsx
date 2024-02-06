import React from 'react'
import admin_pic from "../../assets/Images/dashboard/admin.png"

const Header = ({title}) => {
  return (
    <header className='font-serif flex justify-between h-[8%] w-full mb-10'>
                    {/* title */}
                    <div className="flex font-semibold items-center justify-center gap-5">
                        <span className='text-4xl text-[rgb(244,63,94)] font-bold cursor-pointer'><ion-icon name="menu-outline"></ion-icon></span>
                        <p className='text-2xl font-semibold -mt-1'>{title}</p>
                    </div>

                    {/* profile */}
                    <div className="flex gap-5 justify-center items-center">
                        <div className="desc">
                            <p className='text-neutral-400 text-base'>Good Morning</p>
                            <p className='font-semibold'>Abdullah</p>
                        </div>
                        <div className="h-[60px] w-[60px]">
                           <img className='rounded-full' src={admin_pic} alt="admin" />
                        </div>
                    </div>
    </header>
  )
}

export default Header