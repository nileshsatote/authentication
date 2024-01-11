import React from 'react'
import { BrowserRouter, Routes, Route,  } from "react-router-dom"
import { lazy , Suspense} from "react";
import Loader from './component/loader'
import Navbar from './component/navbar';

const Home = lazy(()=>import('./component/home'));
const Login = lazy(()=>import('./component/login'));
const Signup = lazy(()=>import('./component/signup'));
const App = () => {
 
  return (
 <> 
     <>
     <Navbar />
     </>
    <BrowserRouter>
   <Suspense fallback={<Loader />}>
   <Routes>
      
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
    </Routes>
   </Suspense>
    </BrowserRouter>
 </>   
  )
}

export default App