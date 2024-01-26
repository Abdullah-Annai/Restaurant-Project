import React from 'react'
import { Link } from 'react-router-dom';
import { LuChefHat } from "react-icons/lu";

const Signin = () => {
  return (
    <div className='sm:pb-20 md:min-h-screen w-full bg-zinc-200'>
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row md:justify-between md:gap-16">
          <form data-aos="fade-down" data-aos-once="true" className='mt-14 mx-auto bg-white h-full w-3/4 md:w-1/2 px-10 py-10 shadow-lg shadow-zinc-300' action="/signin" method="post" autoComplete='off'>

            <div className="relative mb-8 group">
              <input className='w-full p-2 border rounded-lg border-primary border-primary/50 outline-none ps-11 font-light' type="text" name='username' required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="person-outline"></ion-icon>
                <label className='text-sm px-1 bg-white group-focus-within:-translate-y-5 transition duration-300' htmlFor='signin-label'>Name</label>
              </div>
            </div>

            <div className="relative mb-8 group">
              <input className='w-full p-2 border rounded-lg border-primary/50 outline-none ps-11 font-light' id="email" type="email" name='email' required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="mail-outline"></ion-icon>
                <label className='text-sm bg-white px-1 transition duration-300 group-focus-within:-translate-y-5' htmlFor='email'>Email Address</label>
              </div>
            </div>

            <div className="relative mb-8 group">
              <input className='w-full p-2 border rounded-lg border-primary/50 outline-none ps-11 font-light' id="pass" type="password" name='password' required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="lock-closed-outline"></ion-icon>
                <label className='text-sm bg-white px-1 transition duration-300 group-focus-within:-translate-y-5' htmlFor='pass'>Password</label>
              </div>
            </div>

            <div className="relative mb-8 group">
              <input className='w-full p-2 border rounded-lg border-primary/50 outline-none ps-11 font-light' id="cpass" type="password" required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="lock-closed-outline"></ion-icon>
                <label className='text-sm bg-white px-1 transition duration-300 group-focus-within:-translate-y-5' htmlFor='cpass'>Confirm password</label>
              </div>
            </div>

            <button className='text-center text-white bg-primary/95 hover:bg-primary px-4 py-2 rounded-lg w-full mb-5'>Create account</button>
            <p className='text-center text-zinc-400 font-extralight pb-5'>By clicking on "Create Account" you are agreeing to the Term of Service and the Privacy Policy.</p>
            <p className='text-zinc-800 font-extralight'>Already have an account? <Link className='text-primary' to="/login">Login here</Link></p>
          </form>
          <div data-aos="fade-right" data-aos-once="true" className="w-3/4 mx-auto mt-16 md:w-1/2 md:mt-28 transition-all">
            <h1 style={{fontFamily: "DM Serif Display"}} className='text-4xl font-semibold pb-3'>Create Account</h1>
            <h4 className='text-xl font-semibold pb-8'>What you will get?</h4>
            <ul className='text-zinc-500'>
              <li className='flex gap-3 py-2 items-center'><LuChefHat /> Manage your recipes the easy way</li>
              <li className='flex gap-3 py-2 items-center'><LuChefHat /> Share recipes with your friends and discover new one</li>
              <li className='flex gap-3 py-2 items-center'><LuChefHat /> Organize recipes by tag</li>
              <li className='flex gap-3 py-2 items-center'><LuChefHat /> Invite your friends to join and start sharing your recipes</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Signin