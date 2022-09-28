import React,{useState} from "react";
import {useDispatch} from 'react-redux';
import { login } from "../../features/userslice";
import { FaRegUserCircle } from 'react-icons/fa';
import './login.css';

const Login=()=>{
     const[name,setName]=useState('');
     const[email,setEmail]=useState('');
     const[password,setPassword]=useState('');
     const dispatch=useDispatch();

    const handleSubmit=(e)=>{
      e.preventDefault();
      
      dispatch(
        login({
          name:name,
          email:email,
          password:password,
          loggedIn:true,  
        })
      );

    };
    return(
 
       <div className="login" onSubmit={(e)=>handleSubmit(e)}>
        <form className="login_form">
          <p className="ic"><FaRegUserCircle fontSize={100} color='#3aafa9' /></p>
          <input type='name' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
          <input type='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <button type="submit" className="sub_btn">Submit</button>
        </form>
       </div>
    )
}
export default Login; 