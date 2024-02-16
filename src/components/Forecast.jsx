import React,{ useEffect,useState } from 'react'
import api from './api'
import Header from '../section/dashboard/Header'

const Forecast = () => {

    const [demand,setDemand] = useState([])

    const [prize,setPrize] = useState()

    const [loaded,setLoaded] = useState(false)

    const showPrice = (value)=>{
        setPrize(prev => prev+=value)
    }

    useEffect(() => {
        const get_forecast = async () => {
            try {
                let value = await api.get("/order/forecast");
                setDemand(value.data['data']);
            } catch(err) {
                console.log(err.message);
            }
        };

        get_forecast();
    }, []);

    useEffect(() => {
        let prize = 0
        demand.map((val)=>{
            prize += (val.total_quantity * val.prize)
        })
        setLoaded(true)
        setPrize(prize)
    }, [demand]);

  return (
    <div className='h-screen w-full'>
        <Header title={"Forecast"} />
        <p className='font-semibold text-2xl mb-10'>Demand Prediction</p>
        <div className="items grid grid-cols-3 gap-5">
           {loaded ? (demand.map((val)=>(
            <>
             <div className={`item-1 py-2 flex gap-7 items-center justify-center`}>
             <img className='rounded-full h-[70px] w-[70px]' src={val.path} alt="food_1" />
             <div className="name">
                 <p className='font-semibold text-wrap w-40'>{val.food_name}</p>
             </div>
            </div>
            <div className="quantity flex justify-center items-center">
                <p className='text-neutral-400 text-2xl'>x{val.total_quantity}</p>
            </div>
            <div className="quantity flex justify-center items-center">
                <p onLoad={()=>showPrice(val.total_quantity * val.prize)} className='text-2xl font-semibold'>₹{val.total_quantity * val.prize}</p>
            </div>
         </>
           ))) : "Loading"}
        </div>
        <div className="grid grid-cols-4 py-10">
                <p className='col-start-3 text-2xl font-semibold'>Total</p>
                <p className='text-2xl font-semibold flex justify-start items-center ps-12'>₹{prize}</p>
        </div>
    </div>
  )
}

export default Forecast