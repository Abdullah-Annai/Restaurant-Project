import React,{ useState,useContext, useEffect } from 'react'
import logo from '../assets/Images/logo.svg'
import { Link } from 'react-router-dom'
import { FoodContext } from './FoodContext'

const Header = () => {

  const { foodItem } = useContext(FoodContext)

  const [foodQty,setFoodQty] = useState([])

  const [prize,setPrize] = useState({
    total:0,
    tax:0,
    item: 0,
    final: 0
  })

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
    console.log()
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
        // val.id === id ?  { ...val, qty: val.qty+=1} : val
    });
  setFoodQty(updatedFoodQty);
  }

  const handleDec = (id)=>{
    const decValue = foodQty.map((val)=>
        val.id == id  && val.qty >1 ? {...val,qty:val.qty-=1} : val
    )
    setFoodQty(decValue)
  }

  useEffect(()=>{
    setFoodQty([...foodItem])
    
    foodQty.map((val)=>{

    })
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

  const [active,setActive] = useState(0);

  const [showCart,setShowCart] = useState(0)

  const showMenu = ()=>{
    let value = active == 0 ? 1 : 0
    setActive(value)
  }

  const showSlide = ()=>{
    let value = showCart == 0 ? 1 : 0
    setShowCart(value)
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
            <div className="logo cursor-pointer ps-2 md:ps-0 lg:mr-28">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="text-neutral-800 font-medium text-xl flex gap-4 cursor-pointer">
                <div className='flex gap-3 items-center mr-[20px]'>
                    <div className="flex gap-3 relative left-24 md:left-0 group">
                        <ion-icon className='relative' name="search-outline"></ion-icon>
                        <ion-icon className='relative' name="heart-outline"></ion-icon>
                        <span onClick={showSlide}><ion-icon name="cart-outline"></ion-icon></span>

                        {/* Food Cart */}
                        <div className={`absolute bg-white/50 backdrop-blur-md z-10 border-l-2 border-primary/70 -left-9 transition-all origin-top duration-300 ${showCart == 0 ? "scale-y-0" : "scale-y-1"} top-14 min-h-screen h-auto w-[350px] p-5 pb-8`}>
                            <p className='font-serif text-center text-stone-700 font-semibold border-b-2 border-zinc-200 pb-3'>Cart</p>
                            <div className="grid lg:grid-cols-3 mt-3">
                                {foodQty.map((val)=>(
                                    <>
                                        {/* image */}
                                        <img src={val.image} alt="" />
                                        {/* Detail */}
                                        <p className='text-base'>{val.name}</p>
                                       <div className="prize flex flex-col gap-4 mb-5">
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
                            <div className="mt-5">
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

                            </div>
                        </div>

                        <div className="absolute">
                            <p className="-top-1 ml-11 absolute h-3 w-3 rounded-full bg-neutral-800 text-white text-xs flex justify-center items-center">1</p>
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