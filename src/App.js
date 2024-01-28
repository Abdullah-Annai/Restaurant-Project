import React,{ useState,useEffect } from "react";
import Header  from "./components/Header";
import Footer from "./components/Footer";
import Index from './section/Sections'
import { Routes,Route } from 'react-router-dom'
import Signin from './components/Signin'
import Login from '../src/components/Login'
import Menu from './section/Food_Menu'
import BookTable from "./section/BookTable";
import { FoodProvider } from "./components/FoodContext";
import Preloader from "./components/Preloader";
function App() {

  const [loader,setLoader] = useState(0)

  useEffect(()=>{
    setLoader(1)
    setTimeout(()=>{
      setLoader(0)
    },8000)
  },[])
  return (
    <div>
      {loader == 1 ? <Preloader /> :
      <>
      <FoodProvider>
          <Header />
          <Routes path="/">
              <Route index element={<Index/>}></Route>
              <Route path='/signin' element={<Signin/>}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/bookt" element={<BookTable />}></Route>
          </Routes>
        </FoodProvider>
        <Footer />
      </>
  }
    </div>
  )
}

export default App;
