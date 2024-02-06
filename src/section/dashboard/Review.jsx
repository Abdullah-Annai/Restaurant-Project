import React from 'react'
import Header from './Header'
import review_1 from "../../assets/Images/dashboard/review-1.jpg"
import review_2 from "../../assets/Images/dashboard/review-2.jpg"
import review_3 from "../../assets/Images/dashboard/review-3.jpg"

const Review = () => {
  return (
    <div className='h-screen w-full'>
        <Header title={"Review"} />
        <div className="reviews">
            <div className="review-1 grid grid-cols-4 gap-5 pb-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_1} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 py-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_2} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 py-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_3} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 pb-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_1} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 py-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_2} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 py-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_3} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 pb-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_1} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 py-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_2} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
            <div className="review-1 grid grid-cols-4 gap-5 py-5">
                <div className="imges flex gap-3">
                    <img className='h-[100px] w-[100px] rounded-full' src={review_3} alt="" />
                    <div className="text">
                        <p className='text-[rgb(244,63,94)]'>#C01233</p>
                        <p className='font-semibold text-xl'>Abdullah</p>
                        <p className='text-zinc-500'>26/1/2024,12:42 PM</p>
                    </div>
                </div>
                <p className='text-wrap text-black/80 text-base col-span-2'>We recently had dinner with friends at David CC and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</p>
                <div className="rating flex items-center flex-col">
                    <p className='font-semibold text-3xl'>4.5</p>
                    <div className="star">
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-yellow-500'><ion-icon name="star"></ion-icon></span>
                        <span className='text-2xl text-zinc-300'><ion-icon name="star"></ion-icon></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review