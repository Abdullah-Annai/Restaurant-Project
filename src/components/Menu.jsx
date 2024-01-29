import React,{ useContext, useState} from 'react'
import { FoodContext } from './FoodContext'

const Menu = ({value,animation}) => {

  const { foodItem ,setFood ,setFavore , favorite, delFavore} = useContext(FoodContext)

  const [qty,setQty] = useState([])

  const createQty = (id)=>{
    setQty({id:id,qtys:1})
  }


  const handleInc = (id)=>{
    let value = qty.map((val)=>{
      return val.id == id ? {...val,qtys: val.qtys += 1 } : val
    })
    setQty(value)
  }

  const handleDec = (id)=>{
    let value = qty.map((val)=>{
      return val.id == id ? {...val,qtys: val.qtys -= 1 } : val
    })
    setQty(value)
  }


  const handleClick =(element,foodId)=>{
    console.log("hit")
    let foodImage = element.querySelector("#food-img").src
    let foodName = element.querySelector("#food-name").innerHTML
    let foodPrize = element.querySelector("#food-prize").innerHTML.split("$")[1]

    setFood({
      id: foodId,
      qty: 1,
      image : foodImage,
      name : foodName,
      prize : foodPrize
    })
  }

  const handleFavore = (element,foodId)=>{
    let foodImage = element.querySelector("#food-img").src
    let foodName = element.querySelector("#food-name").innerHTML
    let foodPrize = element.querySelector("#food-prize").innerHTML.split("$")[1]

    if(!favorite.some(prev => prev.id == foodId)){

    setFavore({
      id: foodId,
      qty: 1,
      image : foodImage,
      name : foodName,
      prize : foodPrize
    })
  } else{
    let newf = favorite.filter(newItem => newItem.id != foodId)
    delFavore(newf)
  }
  }

  const item = {
      breakfast : ['', 'Waffle With Sliced Blueberries:29', 'Fried Vegetable Rice Bowl:32', 'Various Fruit Custard:25', 'Egg With Bread Beside Fork:14', 'Strawberry Milk Pancakes:17', 'Fruit Brown Oatmeal:21', 'Spicy Vegetable Fried:14', 'Mushroom & Vegetable Meal:27'],
      lunch : ['', 'Waffle With Sliced Blueberries:34', 'Fried Vegetable Rice Bowl:24', 'Pasta With Tomato Sauce:37', 'Hot Noodles Ramen With Chicken:32', 'Strawberry Cream Roll:17', 'Brown and Black Dog Figurine:14', 'Two Strawberry Doughnuts:36', 'Vanilla Ice Cream With Sprinkles:16'],
      dinner : ['', 'Fried Chicken With Fries:22', 'Chicken Alfredo Pasta:23', 'Pasta With Tomato Sauce:24', 'Hot Noodles Ramen With Chicken:22', 'Strawberry Cream Roll:15', 'Brown and Black Dog Figurine:33', 'Two Strawberry Doughnuts:12', 'Vanilla Ice Cream With Sprinkles:8']

  }

  return (
    <div className="min-h-screen max-w-6xl mx-auto flex justify-evenly flex-wrap px-5 py-3 gap-5">
      {item[value].map((val,index)=>(
        val != '' ? (
          <div className={`card-${index} animate__animated ${animation} transition-all duration-300 border px-3 py-2 shadow-lg rounded-lg md:basis-[40%] lg:basis-[45%] pb-6`}>
            <div className="price flex justify-between items-center">
              <img id="food-img" className='border-2 border-dashed border-primary p-1 rounded-full' src={require(`../assets/Images/menu-book/menu-book-${index}.png`)} alt="" />
              <div className="flex justify-evenly items-center">
                    <button onClick={()=>handleDec(val.id)} className='bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center hover:font-semibold hover:border-2 hover:bg-white hover:border-primary hover:text-primary'>-</button>
                    {qty.length > 0 ?
                    qty.map((val)=> val.id == `card-${index}` ? <p>{val.qtys}</p> : "") : <p>01</p> && createQty(`card-${index}`)}
                    <button onClick={()=>handleInc(val.id)} className='bg-primary text-white rounded-full h-6 w-6 flex justify-center items-center hover:font-semibold hover:border-2 hover:bg-white hover:border-primary hover:text-primary'>+</button>
              </div>
              <p id='food-prize' className=' text-primary text-3xl font-semibold'>${val.split(":")[1]}</p>

            </div>
            <p id='food-name' className='text-xl font-semibold'>{val.split(":")[0]}</p>
            <p className='max-w-[80%] text-sm text-zinc-400 pb-4'>There are many variations of passages Lorem Ipsum form</p>
           <div className="flex">
              <button onClick={()=>handleClick(document.querySelector(`.card-${index}`),`${value}-${index}`)} className={`px-1 py-2 rounded-lg w-full text-white bg-primary/90 hover:bg-primary font-semibold font-sans text-base md:col-span-2 mt-2 basis-3/4`}>Place Order</button>
              <button onClick={()=>handleFavore(document.querySelector(`.card-${index}`),`${value}-${index}`)} className='basis-1/4 flex justify-center items-center text-[red]'><svg height="30px" width="30px" xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" fill={favorite.some(item => item.id == `${value}-${index}`) ? "red" : "none"} stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg></button>
           </div>
          </div>
        ) : ''

      ))}
    </div>
  )
}

export default Menu 