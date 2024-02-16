import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast,ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import api from './api'

const Track_order = () => {

    const [order,setOrder] = useState([])

    const [loaded,setloaded] = useState(false)

    const [finish,setFinish] = useState(0)

    const navigator = useNavigate()

    if(localStorage.getItem('token') == null){
        toast.error('Please Login')
        navigator('/login')
    }

    useEffect(()=>{
        const getOrder = async ()=>{
            try{
                let body ={}
                body['token'] = localStorage.getItem('token')
                let value = await api.post("/order/user_order",body)
                setOrder(value.data['data'])

            } catch(err){
                console.log(err.message)
            }
        }
        getOrder()
    },[])

    const track_status = ()=>{
        let status = 0
        let value = []
        order.map((val)=>{
            value.push(val.status)
        })
        if(value.some((value)=>value == "Accept")){
            status +=1
        } else if(value.every((val)=> val == "Finished")){
            status +=3
        } else{
            status = 0
        }
        setFinish(status)
        console.log("status =>",status)
    }

    useEffect(()=>{
        setloaded(true)
        track_status()
    },[order])

  return (
    <div className='h-auto w-full bg-zinc-200 pb-32'>
        <div className="status max-w-[80%] mx-auto relative bg-white top-12 px-5 py-2 rounded-md">
            <div className="items relative">
                <p className='font-semibold text-2xl border-b-2 pb-1 border-zinc-200'>Track Your Order</p>
                <ToastContainer />
                <div className="track h-44 max-w-4xl mx-auto flex justify-around items-center">

                    <div className={`relative h-10 w-10 ${finish == 1 | finish == 3 ? 'bg-primary' : 'bg-zinc-300'} rounded-full flex justify-center items-center`}><span className='text-white text-3xl pt-2'><ion-icon name="checkmark-outline"></ion-icon></span> <p className={`absolute top-10 text-base font-serif ${finish == 1 | finish == 3 ? 'text-primary' : 'text-zinc-300'}`}>Placed</p> </div>

                    <div className={`h-10 w-10 relative ${finish == 3 ? 'bg-primary' : 'bg-zinc-300'} rounded-full flex justify-center items-center before:absolute before:h-3 before:w-[186px] ${finish == 3 ? 'before:bg-primary' : 'before:bg-zinc-300' } before:right-[39px]`}><span className='text-white text-3xl pt-2'><ion-icon name="checkmark-outline"></ion-icon></span> <p className={`absolute ${finish == 3 ? 'text-primary' : 'text-zinc-300'} top-10 text-base font-serif`}>Packed</p> </div>

                    <div className={`h-10 w-10 relative ${finish == 3 ? 'bg-primary' : 'bg-zinc-300'} rounded-full flex justify-center items-center before:absolute before:h-3 before:w-[186px] ${finish == 3 ? 'before:bg-primary' : 'before:bg-zinc-300' } before:right-[39px]`}><span className='text-white text-3xl pt-2'><ion-icon name="checkmark-outline"></ion-icon></span> <p className={`absolute ${finish == 3 ? 'text-primary' : 'text-zinc-300'} top-10 text-base font-serif`}>Shipped</p> </div>

                    <div className={`h-10 w-10 relative ${finish == 4 ? 'bg-primary' : 'bg-zinc-300'} rounded-full flex justify-center items-center before:absolute before:h-3 before:w-[186px] ${finish == 4 ? 'before:bg-primary' : 'before:bg-zinc-300' } before:right-[39px]`}><span className='text-white text-3xl pt-2'><ion-icon name="checkmark-outline"></ion-icon></span> <p className={`absolute ${finish == 4 ? 'text-primary' : 'text-zinc-300'} top-10 text-base font-serif`}>Delivered</p> </div>
                    
                </div>
                <p className='font-semibold text-lg'>Your order has been delivered</p>
            </div>
        </div>
        <div className="orders relative top-20 max-w-[80%] mx-auto bg-white px-5 py-4 rounded-md">
                <p className='font-semibold text-2xl'>All Orders</p>
                <div className="items">
                    <table className='table-auto h-80 w-full'>
                        <thead className='border-b-2 border-zinc-200 mb-10'>
                            <tr>
                                <th>#</th>
                                <th>Order Code</th>
                                <th>Food Name</th>
                                <th>Quantity</th>
                                <th>Prize</th>
                                <th>Delivery Status</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {loaded ? order.map((val,index)=>(
                                <tr className='py-2'>
                                <td>{index+1}</td>
                                <td>{val.orderId}</td>
                                <td>{val.food_name}</td>
                                <td>{val.quantity}</td>
                                <td>{val.prize}</td>
                                <td><p className='bg-zinc-400 p-3 text-white text-lg'>{val.status}</p></td>
                            </tr>
                            )) : <p className='flex justify-center items-center text-2xl font-semibold'>No Order</p> }
                        </tbody>
                    </table>
                </div>
            </div>
    </div>
  )
}

export default Track_order