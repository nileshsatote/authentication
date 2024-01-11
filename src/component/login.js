import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const history = useNavigate();
 const [input,setInput]= useState({
  email:"",
  password:""
 });
 
 const handleLogin =(e)=>{
  setInput((prev)=>({...prev,[e.target.name]:e.target.value,}));
  console.log(e.target.name,"value",e.target.value); 
 }


 const sendRequest =async ()=>{
  const res = axios.post("http://localhost:4000/login",{
    email:input.email,
    password:input.password

  })
  .catch(err=>console.log(err));

  const data = await res.data;
  return data;
}

const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(input);
  sendRequest().then(()=>{history('/home')});

 }
  

  return (
    <> 
  <form onSubmit={handleSubmit}>
    <div>
 <div className='flex flex-col gap-3 rounded-md shadow-md-blue  p-5 mx-auto my-[30vh] bg-black'>
  <input 
  type='email'
  name='email'
  id='email'
  // value="email"
  onChange={handleLogin}
  placeholder='Enter Your Email'
    className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
  />
    <input 
  type='password'
  name='password'
  id='password'
  // value={input.password}
  onChange={handleLogin}
  placeholder='Enter Your Password'
  className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
  />
<button type="submit" onClick={handleLogin} className="btn btn-outline-secondary  ">Login</button> </div>
      </div>
  </form>
    </>
  )
}

export default Login