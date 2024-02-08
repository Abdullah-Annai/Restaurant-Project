import React,{ useEffect, useState } from 'react'
import chart_1 from '../../assets/Images/dashboard/chart.png'
import chart_2 from '../../assets/Images/dashboard/chart-2.png'
import chart_3 from '../../assets/Images/dashboard/chart-3.png'
import food_1 from '../../assets/Images/dashboard/food-1.jpg'
import trend_1 from "../../assets/Images/dashboard/trend-1.jpg"
import Header from './Header'
import api from '../../components/api'

const Main = () => {

    const [order,setOrder] = useState([])
    const get_order = async ()=>{
        try{
           const value = await api.get("/order/getorder")
           setOrder(value.data['data'])
        } catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        get_order()
    },[])

    useEffect(() => {
        console.log(order)
    }, [order]);

  return (
    <div>
        <Header title={"Dashboard"}/>
                {/* analytics */}
                <div className="analytics grid grid-cols-4 gap-5">
                    <div className="relative">
                        <header className='flex justify-between px-4'>
                            <div className="number">
                                <p className='text-3xl font-semibold'>56<span className='text-base text-green-500 ml-3'>+4%</span></p>
                                <p className='font-light'>Menus</p>
                            </div>
                            <div className="img text-4xl text-[rgb(244,63,94)]">
                                <ion-icon name="cafe-outline"></ion-icon>
                            </div>
                        </header>
                        <div className="body ">
                            <img src={chart_1} alt='chart' />
                        </div>
                    </div>
                    <div className="relative">
                        <header className='flex justify-between px-4'>
                            <div className="number">
                                <p className='text-3xl font-semibold'>785<span className='text-base text-green-500 ml-3'>+2.7%</span></p>
                                <p className='font-light'>Orders</p>
                            </div>
                            <div className="img text-4xl text-[rgb(244,63,94)]">
                                <ion-icon name="fast-food-outline"></ion-icon>
                            </div>
                        </header>
                        <div className="body ">
                            <img src={chart_3} alt='chart' />
                        </div>
                    </div>
                    <div className="relative">
                        <header className='flex justify-between px-4'>
                            <div className="number">
                                <p className='text-3xl font-semibold'>56<span className='text-base text-red-500 ml-3'>-3%</span></p>
                                <p className='font-light'>Customers</p>
                            </div>
                            <div className="img text-4xl text-[rgb(244,63,94)]">
                            <ion-icon name="people-outline"></ion-icon>
                            </div>
                        </header>
                        <div className="body ">
                            <img src={chart_2} alt='chart' />
                        </div>
                    </div>
                    <div className="relative">
                        <header className='flex justify-between px-4'>
                            <div className="number">
                                <p className='text-3xl font-semibold'>32,000<span className='text-base text-green-500 ml-3'>+8%</span></p>
                                <p className='font-light'>Income</p>
                            </div>
                            <div className="img text-4xl text-[rgb(244,63,94)]">
                                <p>₹</p>
                            </div>
                        </header>
                        <div className="body ">
                            <img src={chart_1} alt='chart' />
                        </div>
                    </div>
                </div>

                {/* orders */}

                <div className="order relative grid grid-cols-3 min-h-[30vh] h-auto w-full mt-8 gap-5">
                    <div className="order col-span-2">
                        <p className='font-semibold text-2xl mb-10'>Recent Order Request</p>
                        <div className="items">
                            <div className="item-1 py-2 flex gap-7 items-center justify-center">
                                <img className='rounded-full h-[70px] w-[70px]' src={food_1} alt="food_1" />
                                <div className="name">
                                    <p className='font-semibold text-wrap w-40'>Tuna Soup spinach with himalaya sait.</p>
                                    <span className='text-[rgb(244,63,94)]'>#0010235</span>
                                </div>
                                <div className="location max-w-40">
                                    <p className='font-semibold'>Mohamed Sameer</p>
                                    <p className='text-zinc-500 text-wrap'>South Corner st41551 london</p>
                                </div>
                                <div className="prize flex gap-4 text-2xl">
                                    <p className='font-semibold'>₹120</p>
                                    <p className='text-neutral-400'>x3</p>
                                </div>
                                <div className="status">
                                    <p className='text-rose-500 text-sm font-sans rounded-md bg-rose-200 uppercase px-3 py-2'>Pending</p>
                                </div>
                            </div>
                            <div className="item-1 py-2 flex gap-7 items-center justify-center">
                                <img className='rounded-full h-[70px] w-[70px]' src={food_1} alt="food_1" />
                                <div className="name">
                                    <p className='font-semibold text-wrap w-40'>Tuna Soup spinach with himalaya sait.</p>
                                    <span className='text-[rgb(244,63,94)]'>#0010235</span>
                                </div>
                                <div className="location max-w-40">
                                    <p className='font-semibold'>Mohamed Sameer</p>
                                    <p className='text-zinc-500 text-wrap'>South Corner st41551 london</p>
                                </div>
                                <div className="prize flex gap-4 text-2xl">
                                    <p className='font-semibold'>₹120</p>
                                    <p className='text-neutral-400'>x3</p>
                                </div>
                                <div className="status">
                                    <p className='text-rose-500 text-sm font-sans rounded-md bg-rose-200 uppercase px-3 py-2'>Pending</p>
                                </div>
                            </div>
                            <div className="item-1 py-2 flex gap-7 items-center justify-center">
                                <img className='rounded-full h-[70px] w-[70px]' src={food_1} alt="food_1" />
                                <div className="name">
                                    <p className='font-semibold text-wrap w-40'>Tuna Soup spinach with himalaya sait.</p>
                                    <span className='text-[rgb(244,63,94)]'>#0010235</span>
                                </div>
                                <div className="location max-w-40">
                                    <p className='font-semibold'>Mohamed Sameer</p>
                                    <p className='text-zinc-500 text-wrap'>South Corner st41551 london</p>
                                </div>
                                <div className="prize flex gap-4 text-2xl">
                                    <p className='font-semibold'>₹120</p>
                                    <p className='text-neutral-400'>x3</p>
                                </div>
                                <div className="status">
                                    <p className='text-rose-500 text-sm font-sans rounded-md bg-rose-200 uppercase px-3 py-2'>Pending</p>
                                </div>
                            </div>
                            <div className="item-1 py-2 flex gap-7 items-center justify-center">
                                <img className='rounded-full h-[70px] w-[70px]' src={food_1} alt="food_1" />
                                <div className="name">
                                    <p className='font-semibold text-wrap w-40'>Tuna Soup spinach with himalaya sait.</p>
                                    <span className='text-[rgb(244,63,94)]'>#0010235</span>
                                </div>
                                <div className="location max-w-40">
                                    <p className='font-semibold'>Mohamed Sameer</p>
                                    <p className='text-zinc-500 text-wrap'>South Corner st41551 london</p>
                                </div>
                                <div className="prize flex gap-4 text-2xl">
                                    <p className='font-semibold'>₹120</p>
                                    <p className='text-neutral-400'>x3</p>
                                </div>
                                <div className="status">
                                    <p className='text-rose-500 text-sm font-sans rounded-md bg-rose-200 uppercase px-3 py-2'>Pending</p>
                                </div>
                            </div>
                            <div className="item-1 py-2 flex gap-7 items-center justify-center">
                                <img className='rounded-full h-[70px] w-[70px]' src={food_1} alt="food_1" />
                                <div className="name">
                                    <p className='font-semibold text-wrap w-40'>Tuna Soup spinach with himalaya sait.</p>
                                    <span className='text-[rgb(244,63,94)]'>#0010235</span>
                                </div>
                                <div className="location max-w-40">
                                    <p className='font-semibold'>Mohamed Sameer</p>
                                    <p className='text-zinc-500 text-wrap'>South Corner st41551 london</p>
                                </div>
                                <div className="prize flex gap-4 text-2xl">
                                    <p className='font-semibold'>₹120</p>
                                    <p className='text-neutral-400'>x3</p>
                                </div>
                                <div className="status">
                                    <p className='text-rose-500 text-sm font-sans rounded-md bg-rose-200 uppercase px-3 py-2'>Pending</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trend">
                        <p className='font-semibold text-2xl mb-10'>Daily Trending Menus</p>
                        <div className="trends py-2">
                            <div className="trend-1 flex gap-5 mb-10">
                                <div className="imges relative w-[100px] flex justify-center items-center">
                                    <img className='h-[70px] w-[70px] rounded-lg' src={trend_1} alt="" />
                                    <p className='absolute top-14 font-semibold text-center bg-primary h-10 w-10 rounded-full flex justify-center items-center border-4 border-white'>#1</p>
                                </div>
                                <div className="desc">
                                    <p className='font-semibold text-md'>Chicken curry special with cucumber</p>
                                    <div className="prize flex justify-between">
                                        <p className='font-semibold'>₹140</p>
                                        <p className='text-zinc-400'>Order <span className='text-black'>90x</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="trend-1 flex gap-5 mb-10">
                                <div className="imges relative w-[100px] flex justify-center items-center">
                                    <img className='h-[70px] w-[70px] rounded-lg' src={trend_1} alt="" />
                                    <p className='absolute top-14 font-semibold text-center bg-primary h-10 w-10 rounded-full flex justify-center items-center border-4 border-white'>#1</p>
                                </div>
                                <div className="desc">
                                    <p className='font-semibold text-md'>Chicken curry special with cucumber</p>
                                    <div className="prize flex justify-between">
                                        <p className='font-semibold'>₹140</p>
                                        <p className='text-zinc-400'>Order <span className='text-black'>90x</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="trend-1 flex gap-5 mb-10">
                                <div className="imges relative w-[100px] flex justify-center items-center">
                                    <img className='h-[70px] w-[70px] rounded-lg' src={trend_1} alt="" />
                                    <p className='absolute top-14 font-semibold text-center bg-primary h-10 w-10 rounded-full flex justify-center items-center border-4 border-white'>#1</p>
                                </div>
                                <div className="desc">
                                    <p className='font-semibold text-md'>Chicken curry special with cucumber</p>
                                    <div className="prize flex justify-between">
                                        <p className='font-semibold'>₹140</p>
                                        <p className='text-zinc-400'>Order <span className='text-black'>90x</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="trend-1 flex gap-5 mb-10">
                                <div className="imges relative w-[100px] flex justify-center items-center">
                                    <img className='h-[70px] w-[70px] rounded-lg' src={trend_1} alt="" />
                                    <p className='absolute top-14 font-semibold text-center bg-primary h-10 w-10 rounded-full flex justify-center items-center border-4 border-white'>#1</p>
                                </div>
                                <div className="desc">
                                    <p className='font-semibold text-md'>Chicken curry special with cucumber</p>
                                    <div className="prize flex justify-between">
                                        <p className='font-semibold'>₹140</p>
                                        <p className='text-zinc-400'>Order <span className='text-black'>90x</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="trend-1 flex gap-5 mb-10">
                                <div className="imges relative w-[100px] flex justify-center items-center">
                                    <img className='h-[70px] w-[70px] rounded-lg' src={trend_1} alt="" />
                                    <p className='absolute top-14 font-semibold text-center bg-primary h-10 w-10 rounded-full flex justify-center items-center border-4 border-white'>#1</p>
                                </div>
                                <div className="desc">
                                    <p className='font-semibold text-md'>Chicken curry special with cucumber</p>
                                    <div className="prize flex justify-between">
                                        <p className='font-semibold'>₹140</p>
                                        <p className='text-zinc-400'>Order <span className='text-black'>90x</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    </div>
  )
}

export default Main