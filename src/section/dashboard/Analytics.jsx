import React from 'react'
import Header from "./Header"
import juice from "../../assets/Images/dashboard/trend-5.jpg"
import Chart from "./analysis_1"

const Analytics = () => {
    
  return (
    <div className='h-screen w-full'>
        <Header title={"Analytics"} />
        <p className='font-semibold text-xl pb-10'>Most Favorite Items</p>
        <div className='w-full'>
            <div className="item-1 grid grid-cols-5 pb-10">
                <div className="images flex col-span-2 gap-4">
                    <img className='rounded-md h-[100px] w-[100px]' src={juice} alt="" />
                    <div className="desc">
                        <p className='font-semibold text-base'>Watermelon Juice with ice</p>
                        <div className="rating flex gap-5">
                            <div className="star">
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                            </div>
                            <p className='text-zinc-500'>(454 revies)</p>
                        </div>
                        <p className='text-[rgb(244,63,94)] flex items-center gap-2'><span className='text-lg flex items-center'><ion-icon name="heart"></ion-icon></span><b>283k</b> Like it </p>
                    </div>
                </div>
                <div className="chart flex">
                    <Chart />
                    <div className="rate">
                        <p className='font-semibold text-2xl'>45%</p>
                        <p className='pt-[6px]'>Interest</p>
                    </div>
                </div>
                <div className="sales px-5">
                    <p className='font-semibold flex'> <span className='text-[rgb(244,63,94)] text-3xl'><ion-icon name="stats-chart"></ion-icon></span> <p className='font-semibold flex ps-3 items-center text-xl'>6732</p></p>
                    <p>Total Sales</p>
                </div>
                <div className="flex items-center justify-start">
                    <div className="ratio"></div>
                </div>
            </div>
            <div className="item-1 grid grid-cols-5 pb-10">
                <div className="images flex col-span-2 gap-4">
                    <img className='rounded-md h-[100px] w-[100px]' src={juice} alt="" />
                    <div className="desc">
                        <p className='font-semibold text-base'>Watermelon Juice with ice</p>
                        <div className="rating flex gap-5">
                            <div className="star">
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                            </div>
                            <p className='text-zinc-500'>(454 revies)</p>
                        </div>
                        <p className='text-[rgb(244,63,94)] flex items-center gap-2'><span className='text-lg flex items-center'><ion-icon name="heart"></ion-icon></span><b>283k</b> Like it </p>
                    </div>
                </div>
                <div className="chart flex">
                    <Chart />
                    <div className="rate">
                        <p className='font-semibold text-2xl'>45%</p>
                        <p className='pt-[6px]'>Interest</p>
                    </div>
                </div>
                <div className="sales px-5">
                    <p className='font-semibold flex'> <span className='text-[rgb(244,63,94)] text-3xl'><ion-icon name="stats-chart"></ion-icon></span> <p className='font-semibold flex ps-3 items-center text-xl'>6732</p></p>
                    <p>Total Sales</p>
                </div>
                <div className="flex items-center justify-start">
                    <div className="ratio"></div>
                </div>
            </div>
            <div className="item-1 grid grid-cols-5 pb-10">
                <div className="images flex col-span-2 gap-4">
                    <img className='rounded-md h-[100px] w-[100px]' src={juice} alt="" />
                    <div className="desc">
                        <p className='font-semibold text-base'>Watermelon Juice with ice</p>
                        <div className="rating flex gap-5">
                            <div className="star">
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                            </div>
                            <p className='text-zinc-500'>(454 revies)</p>
                        </div>
                        <p className='text-[rgb(244,63,94)] flex items-center gap-2'><span className='text-lg flex items-center'><ion-icon name="heart"></ion-icon></span><b>283k</b> Like it </p>
                    </div>
                </div>
                <div className="chart flex">
                    <Chart />
                    <div className="rate">
                        <p className='font-semibold text-2xl'>45%</p>
                        <p className='pt-[6px]'>Interest</p>
                    </div>
                </div>
                <div className="sales px-5">
                    <p className='font-semibold flex'> <span className='text-[rgb(244,63,94)] text-3xl'><ion-icon name="stats-chart"></ion-icon></span> <p className='font-semibold flex ps-3 items-center text-xl'>6732</p></p>
                    <p>Total Sales</p>
                </div>
                <div className="flex items-center justify-start">
                    <div className="ratio"></div>
                </div>
            </div>
            <div className="item-1 grid grid-cols-5 pb-10">
                <div className="images flex col-span-2 gap-4">
                    <img className='rounded-md h-[100px] w-[100px]' src={juice} alt="" />
                    <div className="desc">
                        <p className='font-semibold text-base'>Watermelon Juice with ice</p>
                        <div className="rating flex gap-5">
                            <div className="star">
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                            </div>
                            <p className='text-zinc-500'>(454 revies)</p>
                        </div>
                        <p className='text-[rgb(244,63,94)] flex items-center gap-2'><span className='text-lg flex items-center'><ion-icon name="heart"></ion-icon></span><b>283k</b> Like it </p>
                    </div>
                </div>
                <div className="chart flex">
                    <Chart />
                    <div className="rate">
                        <p className='font-semibold text-2xl'>45%</p>
                        <p className='pt-[6px]'>Interest</p>
                    </div>
                </div>
                <div className="sales px-5">
                    <p className='font-semibold flex'> <span className='text-[rgb(244,63,94)] text-3xl'><ion-icon name="stats-chart"></ion-icon></span> <p className='font-semibold flex ps-3 items-center text-xl'>6732</p></p>
                    <p>Total Sales</p>
                </div>
                <div className="flex items-center justify-start">
                    <div className="ratio"></div>
                </div>
            </div>
            <div className="item-1 grid grid-cols-5 pb-10">
                <div className="images flex col-span-2 gap-4">
                    <img className='rounded-md h-[100px] w-[100px]' src={juice} alt="" />
                    <div className="desc">
                        <p className='font-semibold text-base'>Watermelon Juice with ice</p>
                        <div className="rating flex gap-5">
                            <div className="star">
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                            </div>
                            <p className='text-zinc-500'>(454 revies)</p>
                        </div>
                        <p className='text-[rgb(244,63,94)] flex items-center gap-2'><span className='text-lg flex items-center'><ion-icon name="heart"></ion-icon></span><b>283k</b> Like it </p>
                    </div>
                </div>
                <div className="chart flex">
                    <Chart />
                    <div className="rate">
                        <p className='font-semibold text-2xl'>45%</p>
                        <p className='pt-[6px]'>Interest</p>
                    </div>
                </div>
                <div className="sales px-5">
                    <p className='font-semibold flex'> <span className='text-[rgb(244,63,94)] text-3xl'><ion-icon name="stats-chart"></ion-icon></span> <p className='font-semibold flex ps-3 items-center text-xl'>6732</p></p>
                    <p>Total Sales</p>
                </div>
                <div className="flex items-center justify-start">
                    <div className="ratio"></div>
                </div>
            </div>
            <div className="item-1 grid grid-cols-5 pb-10">
                <div className="images flex col-span-2 gap-4">
                    <img className='rounded-md h-[100px] w-[100px]' src={juice} alt="" />
                    <div className="desc">
                        <p className='font-semibold text-base'>Watermelon Juice with ice</p>
                        <div className="rating flex gap-5">
                            <div className="star">
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                                <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                            </div>
                            <p className='text-zinc-500'>(454 revies)</p>
                        </div>
                        <p className='text-[rgb(244,63,94)] flex items-center gap-2'><span className='text-lg flex items-center'><ion-icon name="heart"></ion-icon></span><b>283k</b> Like it </p>
                    </div>
                </div>
                <div className="chart flex">
                    <Chart />
                    <div className="rate">
                        <p className='font-semibold text-2xl'>45%</p>
                        <p className='pt-[6px]'>Interest</p>
                    </div>
                </div>
                <div className="sales px-5">
                    <p className='font-semibold flex'> <span className='text-[rgb(244,63,94)] text-3xl'><ion-icon name="stats-chart"></ion-icon></span> <p className='font-semibold flex ps-3 items-center text-xl'>6732</p></p>
                    <p>Total Sales</p>
                </div>
                <div className="flex items-center justify-start">
                    <div className="ratio"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Analytics