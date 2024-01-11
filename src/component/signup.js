import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: ""

  });

  const handleChange = (e) => {
    setInput(prev => ({ ...prev, [e.target.name]:e.target.value }))
    console.log(e.target.name, "value", e.target.value);
  }

  const sendRequest = async () => {
    const res = axios.post("http://localhost:4000/signup", {
      email: input.email,
      username: input.username,
      password: input.password

    }).catch(err => console.log(err));

    const data = await res.data;
    return data;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => { history('/login') });

  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(input);
  //   sendRequest()
  //     .then(() => {
  //       toast.success('Signup successful!');
  //       history('/login');
  //     })
  //     .catch(() => {
  //       toast.error('Signup failed. Please try again.');
  //     });
  // };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3 rounded-md shadow-md-blue  p-5 mx-auto my-[30vh] bg-black'>
            <input
              type='email'
              name='email'
              id='email'
              // value={input.email} 
              onChange={handleChange}
              //  onChange={(e)=>{e.target.email}}
              placeholder='Enter Your Email'
              className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
            />

            <input
              type='text'
              name='username'
              id='username'
              placeholder='Enter Your Name'
              // value={input.name}
              onChange={handleChange}
              className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
            />

            <input
              type='password'
              name='password'
              id='password'
              // value={input.password}
              onChange={handleChange}
              placeholder='Enter Your Password'
              className='px-2 border-2 rounded-lg py-2 w-[300px] border-purple-100 transition-all delay-100 ease-in-out focus:border-purple-500 outline-none'
            />
            <button type="submit" id='submit' className="btn btn-outline-secondary  " >Signup</button>
             </div>
        </form>
      </div>
      {/* <ToastContainer position="top-right" autoClose={3000} /> */}
    </>
  )
}

export default Signup;
