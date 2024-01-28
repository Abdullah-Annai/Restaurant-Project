import React,{ createContext,useState } from 'react'

const FoodContext = createContext()

const FoodProvider = ({children}) => {
 
    const [foodItem,setFoodItem] = useState([])
    const [favorite,setFavorite] = useState([])
    
    const setFood = (item)=>{
        let exist = Object.values(foodItem).some(value => value.id == item.id)
        if(exist != true){
            setFoodItem(prevItem => [...prevItem,item])
        }
    }

    const delFood = (item)=>{
        setFoodItem(item)
    }

    const setFavore = (item)=>{
        let exist = Object.values(favorite).some(value => value.id == item.id)
        if(exist != true){
            setFavorite(prevItem => [...prevItem,item])
        }
    }

    const delFavore = (item)=>{
        setFavorite(item)
    }

    return (
        <FoodContext.Provider value={{foodItem,setFood,delFood,favorite,setFavore,delFavore}}>
            {children}
        </FoodContext.Provider>
    )
}

export { FoodContext,FoodProvider }

