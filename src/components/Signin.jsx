import React,{ useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import { LuChefHat } from "react-icons/lu";
import { ToastContainer,toast } from 'react-toastify';
import api from "./api"
import 'react-toastify/dist/ReactToastify.min.css'
const Signin = () => {

  const [formData,setFormData] = useState({
    username : '',
    email: '',
    phone: '',
    password: ''
  })

  const navigator = useNavigate()

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name] : e.target.value})
  }

  const registerUser = async (e)=>{
    e.preventDefault()
    try{
      let req = await api.post('/register',formData)
      if(req.status == 201){
        localStorage.setItem("token",req.data['token'])
        console.log("token => ",req.data["token"])
        toast("you are signed in")
        return navigator("/menu")
      } else{
        toast("User already exist!")
      }
    } catch(err){
      console.error(err.message)
    }
  }

  return (
    <div className='sm:pb-20 md:min-h-screen w-full bg-zinc-200'>
        <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row md:justify-between md:gap-16">
          <form data-aos="fade-down" data-aos-once="true" className='mt-14 mx-auto bg-white h-full w-full md:w-1/2 px-10 py-10 shadow-lg shadow-zinc-300' onSubmit={registerUser}  autoComplete='off'>
            < ToastContainer />
            <div className="relative mb-8 group">
              <input onChange={handleChange} value={formData.username} className='w-full p-2 border rounded-lg border-primary border-primary/50 outline-none ps-11 font-light' type="text" name='username' required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="person-outline"></ion-icon>
                <label className={`text-sm px-1 bg-white group-focus-within:-translate-y-5 ${formData.username.length > 0 ? "-translate-y-5":""} transition duration-300' htmlFor='signin-label`}>Name</label>
              </div>
            </div>

            <div className="relative mb-8 group">
              <input onChange={handleChange} value={formData.email} className='w-full p-2 border rounded-lg border-primary/50 outline-none ps-11 font-light' id="email" type="email" name='email' required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="mail-outline"></ion-icon>
                <label className={`text-sm px-1 bg-white group-focus-within:-translate-y-5 ${formData.email.length > 0 ? "-translate-y-5":""} transition duration-300' htmlFor='signin-label`}>Email Address</label>
              </div>
            </div>
            <div className="relative mb-8 group">
              <input onChange={handleChange} value={formData.phone} className='w-full p-2 border rounded-lg border-primary/50 outline-none ps-11 font-light' type='tel' pattern='[0-9]{10}' maxLength='10' name='phone' required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
              <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="call-outline"></ion-icon>
                <label className={`text-sm px-1 bg-white group-focus-within:-translate-y-5 ${formData.phone.length > 0 ? "-translate-y-5":""} transition duration-300' htmlFor='signin-label`} htmlFor='email'>Phone Number</label>
              </div>
            </div>

            <div className="relative mb-8 group">
              <input onChange={handleChange} value={formData.password} className='w-full p-2 border rounded-lg border-primary/50 outline-none ps-11 font-light' id="pass" type="password" name='password' required/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="lock-closed-outline"></ion-icon>
                <label className={`text-sm px-1 bg-white group-focus-within:-translate-y-5 ${formData.password.length > 0 ? "-translate-y-5":""} transition duration-300' htmlFor='signin-label`} htmlFor='pass'>Password</label>
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