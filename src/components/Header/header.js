import './header.css';
import { useState } from "react";
import { Routes, Route, Link,useNavigate} from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../context";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { AiOutlineUser} from "react-icons/ai";



const Header=()=>{
    const cartLength = useContext(AddContext).cart;
    const addCartto = useNavigate()
    const cartHandler=()=>{
        addCartto("/addcart")
}
    return(
        <div className='header'>
            <div className='head_first'>
                <p>Dwell</p>
              <span>Mart</span>
            </div>
            <div className='head_scnd'>
                <input type='text'placeholder='Search for grocery items and more...' />
                <AiOutlineSearch  />
            </div>
            <div className='head_third'>
                
                <button><AiOutlineUser color='#def2f1' fontSize={20} />Sign in</button>
            </div>
            <div className='head_fourth'>
               <AiOutlineShoppingCart fontSize={30}cursor='pointer'color='#def2f1' onClick={cartHandler} />
               <span>{cartLength.length}</span>
               {/* <p>cart</p> */}
            </div>
        </div>
    )
}
export default Header;