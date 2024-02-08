import React, { useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { LuChefHat } from 'react-icons/lu'
import api from './api'
import { toast } from 'react-toastify'

const Login = () => {

  const navigator = useNavigate()

  const [formData,setFormData] = useState({
        "username": "",
        "password": ''
  })

  const handleLogin = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e)=>{
    e.preventDefault()
    try{
      let req = await api.post("/login",formData)
      if(req.status == 202){
        console.log(req.status)
        console.log(req.data)
        localStorage.setItem("token",req.data['token'])
        return navigator("/menu")
      } else{
        toast("Wrong username or password")
        console.log("wrong username or password")
      }
    } catch(err){
      console.error(err.message)
    }
  }


  return (
    <div className='sm:pb-20 md:min-h-screen w-full bg-zinc-200 pb-10'>
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row md:justify-between md:gap-16">
            <form onSubmit={handleSubmit} className='mt-14 mx-auto bg-white h-full w-full md:w-1/2 px-10 py-10 shadow-lg shadow-zinc-300 animate__animated animate__fadeInUp transition-all' >
                <div className="relative mb-8 group">
                <input onChange={handleLogin} className='w-full p-2 border text-black rounded-lg border-primary/50 outline-none ps-11 font-light' id="username" type="text" name='username' value={formData.username} required/>
                    <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                        <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="mail-outline"></ion-icon>
                        <label className={`${formData.username.length > 0 ? "-translate-y-5" : ''} text-sm bg-white px-1 transition duration-300 group-focus-within:-translate-y-5`} htmlFor='username'>Username</label>
                    </div>
                </div>

            <div className="relative mb-8 group">
              <input onChange={handleLogin} className='w-full p-2 border text-black rounded-lg border-primary/50 outline-none ps-11 font-light' id="pass" type="password" name='password' value={formData.password} required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="lock-closed-outline"></ion-icon>
                <label className={`${formData.password.length > 0 ? "-translate-y-5" : ''} text-sm bg-white px-1 transition duration-300 group-focus-within:-translate-y-5`} htmlFor='pass'>Password</label>
              </div>
            </div>
            <button className='text-center text-white bg-primary/95 hover:bg-primary px-4 py-2 rounded-lg w-full mb-5'>Login</button>
            <p className='text-zinc-800 font-extralight'>Don't have an account? <Link className='text-primary' to="/signin">Sign up</Link></p>
            <div className="flex justify-between mt-3">
                <div className="left">
                    <input type='checkbox' id='remem' name="remember" className='p-2 mr-2 border-zinc-300'/>
                    <label htmlFor='remem' className='text-zinc-400 font-light text-sm md:text-base'>Remember me</label>
                </div>
                <div className="right">
                    <Link className='text-primary font-light text-sm md:text-base' to="#">Forget password?</Link>
                </div>
            </div>
            </form>
            <div className="w-3/4 mx-auto mt-16 md:w-1/2 md:mt-28 transition-all animate__animated animate__fadeInRight">
              <h1 style={{fontFamily: "DM Serif Display"}} className='text-4xl font-semibold pb-3'>Welcome Back</h1>
              <h4 className='text-xl font-semibold pb-8'>Login to Your Restaurant Account</h4>
              <ul className='text-zinc-500'>
                  <li className='flex gap-3 py-2 items-center'><LuChefHat/> Quickly access your recipes seamlessly.</li>
                  <li className='flex gap-3 py-2 items-center'><LuChefHat/> Manage your recipes effortlessly with intuitive tools.</li>
                  <li className='flex gap-3 py-2 items-center'><LuChefHat/> Add, edit, or remove recipes with just a few clicks.</li>
                  <li className='flex gap-3 py-2 items-center'><LuChefHat/> Invite your friends to join and start sharing your recipes</li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Login