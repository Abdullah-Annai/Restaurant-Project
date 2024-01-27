import React,{ useContext} from 'react'
import { FoodContext } from './FoodContext'
const Menu = ({value,animation}) => {

  const { setFood } = useContext(FoodContext)

  const handleClick =(element,foodId)=>{
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

  const item = {
      breakfast : ['', 'Waffle With Sliced Blueberries:29', 'Fried Vegetable Rice Bowl:32', 'Various Fruit Custard:25', 'Egg With Bread Beside Fork:14', 'Strawberry Milk Pancakes:17', 'Fruit Brown Oatmeal:21', 'Spicy Vegetable Fried:14', 'Mushroom & Vegetable Meal:27'],
      lunch : ['', 'Waffle With Sliced Blueberries:34', 'Fried Vegetable Rice Bowl:24', 'Pasta With Tomato Sauce:37', 'Hot Noodles Ramen With Chicken:32', 'Strawberry Cream Roll:17', 'Brown and Black Dog Figurine:14', 'Two Strawberry Doughnuts:36', 'Vanilla Ice Cream With Sprinkles:16'],
      dinner : ['', 'Fried Chicken With Fries:22', 'Chicken Alfredo Pasta:23', 'Pasta With Tomato Sauce:24', 'Hot Noodles Ramen With Chicken:22', 'Strawberry Cream Roll:15', 'Brown and Black Dog Figurine:33', 'Two Strawberry Doughnuts:12', 'Vanilla Ice Cream With Sprinkles:8']

  }

  return (
    <div className="min-h-screen max-w-6xl mx-auto flex justify-evenly flex-wrap px-5 py-3 gap-5">
      {item[value].map((val,index)=>(
        val != '' ? (
          <div className={`card-${index}  animate__animated ${animation} transition-all duration-300 border px-3 py-2 shadow-lg rounded-lg md:basis-[40%] lg:basis-[45%] pb-6`}>
            <div className="price flex justify-between items-center">
              <img id="food-img" className='border-2 border-dashed border-primary p-1 rounded-full' src={require(`../assets/Images/menu-book/menu-book-${index}.png`)} alt="" />
              <p id='food-prize' className=' text-primary text-3xl font-semibold'>${val.split(":")[1]}</p>
            </div>
            <p id='food-name' className='text-xl font-semibold'>{val.split(":")[0]}</p>
            <p className='max-w-[80%] text-sm text-zinc-400 pb-4'>There are many variations of passages Lorem Ipsum form</p>
            <button onClick={()=>handleClick(document.querySelector(`.card-${index}`),`${value}-${index}`)} className={`px-1 py-2 rounded-lg w-full text-white bg-primary/90 hover:bg-primary font-semibold font-sans text-base md:col-span-2 mt-2`}>Place Order</button>
          </div>
        ) : ''
      ))}
    </div>
  )
}

export default Menu 