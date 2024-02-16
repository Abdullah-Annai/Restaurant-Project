import React,{ useState } from 'react'
import { LuChefHat } from "react-icons/lu";
import { ToastContainer,toast } from 'react-toastify';
import api from "../../components/api"
import 'react-toastify/dist/ReactToastify.css'
import { FaSpinner } from 'react-icons/fa';
const Staff = () => {

  const [formData,setFormData] = useState({
    username : '',
    email: '',
    phone: '',
    password: '',
    is_staff : ''
  })

  const position = {
    Admin : 1,
    Chef: 2,
    Delivery:3
  }

  const [select,setSelect] = useState("Position")
  const [visible,setVisible] = useState(0)

  const [signin,setSignin] = useState(false)

  function dropDown(e){
    setSelect(e.target.innerHTML)
    let data = {...formData,is_staff: position[e.target.innerHTML]}
    setFormData(data)
    setVisible(0)
  }

  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name] : e.target.value})
  }

  const registerUser = async (e)=>{
    e.preventDefault()
    setSignin(true)
    try{
      let req = await api.post('/register',formData)
      if(req.status == 201){
        toast.success("Account Created")
        setFormData({})
        setSignin(false)
      } else{
        toast.error("User already exist!")
        setSignin(false)
      }
    } catch(err){
      console.error(err.message)
      toast.error("User already exist!")
      setSignin(false)
    }
  }

  return (
    <div className='sm:pb-20 h-screen w-full bg-zinc-200'>
        <div className="max-w-5xl mx-auto flex md:flex-row md:justify-between md:gap-16">
          <form data-aos="fade-down" data-aos-once="true" className='mt-10 mx-auto bg-white h-full w-full md:w-1/2 px-10 py-10 shadow-lg shadow-zinc-300' onSubmit={registerUser}  autoComplete='off'>
          <ToastContainer />
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

            <div className="inp relative w-full mb-8">
              <input onClick={()=> visible == 0 ? setVisible(1) : setVisible(0)} className='w-full p-2 border rounded-lg border-primary/50 outline-none ps-11 font-light cursor-pointer' type="text" placeholder={select} readOnly/>
              <div className="input-group absolute left-3 top-2 flex gap-3 items-center text-zinc-400">
                  <ion-icon style={{fontSize : "1.5em",fontWeight: "500"}} name="ribbon-outline"></ion-icon>
              </div>
              <div className={`absolute  z-10 top-12 transition-all duration-300 origin-top bg-white w-full cursor-pointer ${visible == 0 ? 'scale-y-0' : 'scale-y-1'}`}>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">Admin</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">Chef</div>
                <div onClick={dropDown} className="hover:text-primary text-center px-5 py-2 border-b-2 border-zinc-300 text-sm text-zinc-500">Delivery</div>
            </div>
            </div>

            <button disabled={signin} className='text-center text-white bg-primary/95 hover:bg-primary px-4 py-2 rounded-lg w-full mb-5'>{signin == false ? 'Create Account' : <span className='flex justify-center items-center gap-3'><FaSpinner className='spinner animate-spin' /> Creating ...</span> }</button>
            
          </form>
        </div>
    </div>
  )
}

export default Staff