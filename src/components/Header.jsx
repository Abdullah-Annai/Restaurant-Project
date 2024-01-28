import React,{ useState,useContext, useEffect } from 'react'
import logo from '../assets/Images/logo.svg'
import { Link } from 'react-router-dom'
import { FoodContext } from './FoodContext'
import { useClickAway } from "@uidotdev/usehooks";

const Header = () => {

  const { foodItem ,setFood , delFood , favorite, delFavore } = useContext(FoodContext)

  const [foodQty,setFoodQty] = useState([])

  const [active,setActive] = useState(0);

  const [showCart,setShowCart] = useState(0)

  const [showHeart,setHeart] = useState(0)

  const handleOutCart = useClickAway(()=>{
    setShowCart(0)
  })

  const handleOutHeart = useClickAway(()=>{
    setHeart(0)
  })

  const hanldeHeart = ()=>{
    let value = showHeart == 0 ? 1 : 0
    setHeart(value)
    setShowCart(0)
  }

  const [prize,setPrize] = useState({
    total:0,
    tax:0,
    item: 0,
    final: 0
  })

  const handleDelete = (id)=>{
        let newValue = foodQty.filter((item)=>item.id != id)
        setFoodQty(newValue)
        delFood(newValue)
  }

  const handleTotal = ()=>{
    let prize = 0
    let taxs = 0
    let finals= 0
    foodQty.map((val)=>{
        prize += val.qty * val.prize
        taxs+=Math.round(0.03*prize)
        finals=prize+taxs+30
        setPrize({total:prize,tax:taxs,item:foodQty.length,final:finals})
    })
  }

  useEffect(()=>{
    handleTotal()
  },[foodQty])

  const handleInc = (id)=>{
    let prize=0;
    const updatedFoodQty = foodQty.map((val) =>{
        if(val.id == id){
            prize+=val.qty * val.prize
            return {...val,qty:val.qty+=1}
        } else{
            prize+=val.qty * val.prize
            return val
        }
    });
  setFoodQty(updatedFoodQty);
  }

  const handleDec = (id)=>{
    const decValue = foodQty.map((val)=>
        val.id == id  && val.qty >1 ? {...val,qty:val.qty-=1} : val
    )
    setFoodQty(decValue)
  }

  const addToCart = ()=>{
    favorite.map((val)=>{
        setFood(val)
    })
    delFavore([])

  }

  useEffect(()=>{
    setFoodQty([...foodItem])
  },[foodItem])

  const menu = [
    {
        name : 'Home',
        path : "/"
    },
    {
        name : 'Reservation',
        path : "/bookt"
    },
    {
        name : 'Contact',
        path : "#"
    },
    {
        name : 'About Us',
        path : "#"
    }]

  const showMenu = ()=>{
    let value = active == 0 ? 1 : 0
    setActive(value)
  }

  const showSlide = ()=>{
    let value = showCart == 0 ? 1 : 0
    setShowCart(value)
    setHeart(0)
  }
  return (
    <header className='w-full py-3 shadow-lg'>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
            <div className="hidden md:block">
                <ul className='flex gap-2'>
                    {menu.map((val)=>(
                        <li><Link to={val.path} className={`w-full text-white cursor-pointer text-center my-4 p-3 md:text-neutral-800 font-[600] text-sm transition hover:text-primary`}>{val.name}</Link></li>
                    ))}
                </ul>
            </div>
            <div className="logo cursor-pointer ps-2 md:ps-0 lg:mr-28 ">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="text-neutral-800 font-medium text-xl flex gap-4">
                <div className='flex gap-3 items-center mr-[20px]'>
                    <div className="flex gap-3 relative left-24 md:left-0 group">
                        <ion-icon className='relative' name=""></ion-icon>
                        <span className='cursor-pointer' onClick={hanldeHeart}><ion-icon name="heart-outline"></ion-icon></span>
                        <span className='cursor-pointer' onClick={showSlide}><ion-icon name="cart-outline"></ion-icon></span>

                        {/* Food Cart */}
                        <div ref={handleOutCart} className={`absolute bg-white/50 backdrop-blur-md z-10 border-l-2 border-primary/70 -left-[200px] md:-left-9 transition-all origin-top duration-300 ${showCart == 0 ? "scale-y-0" : "scale-y-1"} top-14 min-h-[80vh] h-auto w-[350px] p-5 pb-8`}>
                            <p className='font-serif text-center text-stone-700 font-semibold border-b-2 border-zinc-200 pb-3'>Cart</p>
                            <div className="grid lg:grid-cols-3 mt-3">
                                {foodQty.map((val)=>(
                                    <>
                                        {/* image */}
                                        <img src={val.image} alt="" />
                                        {/* Detail */}
                                        <p className='text-base '>{val.name}</p>
                                       <div className="prize flex flex-col gap-4 mb-5 relative">
                                            <span onClick={()=>handleDelete(val.id)} className='absolute right-2 text-primary text-xl font-extrabold rounded-full h-5 w-5 flex items-center justify-center hover:border hover:bg-primary hover:text-white'><ion-icon name="close-outline"></ion-icon></span>
                                            <p className='text-primary font-lg font-semibold text-center'>${val.prize}</p>
                                            <div className="flex justify-evenly items-center">
                                                <button onClick={()=>handleDec(val.id)} className='bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center hover:font-semibold hover:border-2 hover:bg-white hover:border-primary hover:text-primary'>-</button>
                                                <p className='text-base font-semibold'>{val.qty}</p>
                                                <button onClick={()=>handleInc(val.id)} className='bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center hover:font-semibold hover:border-2 hover:bg-white hover:border-primary hover:text-primary'>+</button>
                                            </div>
                                       </div>
                                    </>
                                ))}
                            </div>
                            {foodQty.length > 0 ? <div  className="mt-5">
                                <div className="flex justify-between items-center border-b border-zinc-300 py-2">
                                    <p className='font-semibold text-base'>Subtotal</p>
                                    <p className='font-semibold text-base'>{prize.total}<span className='text-neutral-400'> USD</span></p>
                                </div>

                                <div className="flex justify-between items-center border-b border-zinc-300 py-2">
                                    <p className='font-semibold text-base'>Tax and Fees</p>
                                    <p className='font-semibold text-base'>{prize.tax}<span className='text-neutral-400'> USD</span></p>
                                </div>

                                <div className="flex justify-between items-center border-b border-zinc-300 py-2">
                                    <p className='font-semibold text-base'>Delivery</p>
                                    <p className='font-semibold text-base'>30<span className='text-neutral-400'> USD</span></p>
                                </div>

                                <div className="flex justify-between items-center border-b border-zinc-300 py-2">
                                    <p className='font-semibold text-base'>Total <span className='text-neutral-400'> ({`${prize.item} items`})</span></p>
                                    <p className='font-semibold text-base'>{prize.final}<span className='text-neutral-400'> USD</span></p>
                                </div>

                            </div> : <p className='font-bold flex justify-center items-center h-[50vh]'>No Item</p>}
                        </div>

                        {/* Favorite Item */}
                        <div ref={handleOutHeart} className={`absolute bg-white/50 backdrop-blur-md z-10 border-l-2 border-red-300 -left-[200px] md:-left-14 transition-all origin-top duration-300 ${showHeart == 1 ? "scale-y-1" : "scale-y-0" } top-14 min-h-[80vh] h-auto w-[350px] p-5 pb-8`}>
                            <p className='font-serif text-center text-stone-700 font-semibold border-b-2 border-zinc-200 pb-3'>Favorite</p>
                            {favorite.length > 0 ? 
                            <>
                            <div className="grid lg:grid-cols-3 mt-3">
                                {favorite.map((val)=>(
                                    <>
                                        {/* image */}
                                        <img src={val.image} alt="" />
                                        {/* Detail */}
                                        <p className='text-base '>{val.name}</p>
                                        <p className='text-3xl flex justify-center items-center text-primary'>${val.prize}</p>
                                    </>
                                ))}
                            </div>
                            <div className="w-full flex justify-center items-center mt-5">
                                <button onClick={addToCart} className='bg-primary/90 hover:bg-primary text-white text-sm font-light p-2 rounded-md'>Add to cart</button>
                            </div> </> : <p className='font-bold flex justify-center items-center h-[50vh]'>No Item</p> }
                        </div>


                        <div className="absolute">
                            <p className="-top-1 ml-11 absolute h-3 w-3 rounded-full bg-neutral-800 text-white text-xs flex justify-center items-center">{favorite.length}</p>
                            <p className="-top-1 ml-20 absolute h-3 w-3 rounded-full bg-neutral-800 text-white text-xs flex justify-center items-center">{foodItem.length}</p>
                        </div>
                    </div>
                </div>
                <div className="text-3xl hover:text-primary transition invisible md:visible">
                    <Link className='flex justify-center items-center' to="/signin"><ion-icon name="person-circle-outline"></ion-icon><span className='text-sm font-medium text-nowrap'>Sign Up</span></Link>
                </div>
                <div className="block md:hidden text-3xl hover:text-primary">
                <ion-icon onClick={showMenu} name={`${active == 0 ? 'menu' : 'close-outline'}`}></ion-icon>
                <ul className={`transition-transform origin-top duration-200 w-full left-0 top-[65px] md:top-20 bg-black gap-4 absolute z-10 pb-4 ${ active == 0 ? 'scale-y-0' : 'scale-y-1'}`}>
                        {menu.map((val)=>(
                           <li className='text-center pb-2'><Link to={val.path} className={`w-full text-white cursor-pointer my-4 p-3 font-[600] text-sm transition hover:text-primary`}>{val.name}</Link></li>
                        ))}
                       <li className='text-center pb-2'><Link to='/signin' className={`w-full text-white cursor-pointer my-4 p-3 font-[600] text-sm transition hover:text-primary`}>Login</Link></li>
                </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header