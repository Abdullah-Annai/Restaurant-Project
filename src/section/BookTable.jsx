import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import { useClickAway } from '@uidotdev/usehooks';
import "react-datepicker/dist/react-datepicker.css";

const BookTable = () => {

  const [select,setSelect] = useState("People")
  const [visible,setVisible] = useState(0)

  const[startDate,setStartDate] = useState(new Date())

  const[time,setTime] = useState("Time")
  const[timeActive,setTimeActive] = useState(0)

  const clickTime = useClickAway(()=>{
    setTimeActive(0)
  })

  const clickPeople = useClickAway(()=>{
    setVisible(0)
  })

  function dropDown(e){
    setSelect(e.target.innerHTML)
    setVisible(0)
  }

  function handleTime(e){
    setTime(e.target.innerHTML)
    setTimeActive(0)
  }

  return (
    <div style={{background: 'url("https://images.unsplash.com/photo-1508006728353-6ecef00dcbb8?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',backgroundSize: "cover"}} className=' h-full md:h-screen w-full relative pb-10'>
      <div className="absolute bg-[rgba(16,17,19,0.5)] inset-0"></div>
      <div className="h-auto grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto relative text-white px-4">
        <div data-aos="fade-down" data-aos-once="true" className="left w-full pt-10 md:mt-32">
          <p className='text-primary text-base font-serif pb-5'>Reservation</p>
          <h3 className='text-5xl font-[bakilda] mb-5 leading-20'>Hello, Reserve Your Own Private Table</h3>
          <p className='font-normal pb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione fuga quia est nihil ullam doloremque voluptatum provident inventore.</p>
        </div>
        <div data-aos="fade-left" data-aos-once="true" className="h-auto w-full bg-[rgba(255,255,255,0.12)] backdrop-blur-md rounded-md p-5 relative pb-5 md:mt-28 mb-14">
          <form className='grid grid-cols-1 md:grid-cols-2 gap-5 py-5' action="/bookt" method="post">
            <input className='w-full px-3 py-2 mb-1 border border-zinc-300 outline-none rounded-md font-serif' type='text' name='name' placeholder='Your name' />
            <input className='w-full px-3 py-2 mb-1 border border-zinc-300 outline-none rounded-md font-serif' type='phone' name='phone' placeholder='Phone' />
            <input className='w-full px-3 py-2 mb-1 border border-zinc-300 outline-none rounded-md font-serif' type='email' name='email' placeholder='Email' />
            {/* date input */}

            <div className="w-full relative overflow-hidden flex">
              <DatePicker className='px-3 py-2 pe-[202px] grow md:pe-1 lg:pe-8 border border-zinc-300 outline-none rounded-md text-zinc-400 cursor-pointer' placeholderText="Date" selected={startDate} onChange={(date)=>setStartDate(date)} />
             <div className="icon absolute text-primary right-2 top-3 text-lg">
                <ion-icon name="calendar"></ion-icon>
             </div>
            </div>

            <div ref={clickPeople} className="inp relative w-full">
              <input onClick={()=> visible == 0 ? setVisible(1) : setVisible(0)} className='w-full px-3 py-2 mb-1 border border-zinc-300 outline-none rounded-md font-sans relative cursor-pointer text-zinc-300 font-medium' type="text" placeholder={select} readOnly/>
              <div className="input-icon absolute text-primary right-2 top-3 text-lg">
                  <ion-icon name="people"></ion-icon>
              </div>
              <div className={`absolute  z-10 top-12 transition-all duration-300 origin-top bg-white w-full cursor-pointer ${visible == 0 ? 'scale-y-0' : 'scale-y-1'}`}>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">1 People</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">2 People</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">3 People</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">4 People</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">5 People</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">6 People</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 p-2 text-sm text-zinc-500">7 People</div>
            </div>
            </div>

            {/* time */}
            <div ref={clickTime} className="inp relative w-full">
              <input onClick={()=> timeActive == 0 ? setTimeActive(1) : setTimeActive(0) } className='w-full px-3 py-2 border border-zinc-300 outline-none rounded-md font-sans relative cursor-pointer text-zinc-300 font-medium' type="text" placeholder={time} readOnly/>
              <div className="input-icon absolute text-primary right-2 top-3 text-lg">
                  <ion-icon name="time"></ion-icon>
              </div>
              <div className={`absolute transition-all -top-[270px] origin-bottom md:top-12 w-full duration-300 md:origin-top bg-white cursor-pointer ${timeActive == 0 ? 'scale-y-0' : 'scale-y-1'}`}>
              <div onClick={handleTime} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-zinc-400 text-sm">10:00 AM</div>
              <div onClick={handleTime} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-zinc-400 text-sm">11:00 AM</div>
              <div onClick={handleTime} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-zinc-400 text-sm">12:00 PM</div>
              <div onClick={handleTime} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-zinc-400 text-sm">14:00 PM</div>
              <div onClick={handleTime} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-zinc-400 text-sm">16:00 PM</div>
              <div onClick={handleTime} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-zinc-400 text-sm">18:00 PM</div>
              <div onClick={handleTime} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-zinc-400 text-sm">20:00 PM</div>
            </div>
            </div>

            <button className='px-1 py-2 rounded-lg w-full text-white bg-primary/90 hover:bg-primary font-semibold font-sans text-base md:col-span-2 mt-2'>Confirm Reservation</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookTable