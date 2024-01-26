import React,{ createContext,useState } from 'react'

const FoodContext = createContext()

const FoodProvider = ({children}) => {
 
    const [foodItem,setFoodItem] = useState([])
    
    const setFood = (item)=>{
        let exist = Object.values(foodItem).some(value => value.id == item.id)
        if(exist != true){
            setFoodItem(prevItem => [...prevItem,item])
        }
    }

    return (
        <FoodContext.Provider value={{foodItem,setFood}}>
            {children}
        </FoodContext.Provider>
    )
}

export { FoodContext,FoodProvider }

