import Header from './components/Header/header';
import Menus from './components/menus/menu';
import Login from './components/login/login';
import Logout from './components/login/logout';
import { useSelector} from 'react-redux'
import { selectUser } from './features/userslice';
import { Routes, Route, Link} from "react-router-dom";
import React,{useEffect, useState } from 'react';
import AddContext from './context';
import Fruitslist from './components/menus/fruites/fruitelist';
import Cartholder from  './components/addcart/cartholder';
// import './App.css';

function App() {
  const[cart,setCart]=useState([]);
  const[qty,setQty]=useState(0);
    const addCart=(item)=>{
      
    setCart((preitems)=>{
        return[item,...preitems]
      })
    }

  const user=useSelector(selectUser);
  return (
    <div className="App">
      <AddContext.Provider value={{addCart,cart,setQty,qty}}>
      <Header/>
      <Routes>
        <Route  index element={<Menus/>}></Route>
        <Route path='/fruits' element={<Fruitslist/>}></Route>
        <Route path='/cart' element={<Cartholder/>}></Route>
      </Routes>
      {/* <Menus/> */}
      
      </AddContext.Provider>
      {user ? <Logout/> : <Login/>}
    </div>
  );
}

export default App;
