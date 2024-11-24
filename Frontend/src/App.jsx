import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Course from './Course/Course'
import Signup from './Components/Signup'

function App(){
  return (
   <>
   {/* <Home/>
   <Courses/> */}

   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/courses" element={<Course/>}/>
    <Route path="/signup" element={<Signup/>}/>
   </Routes>
   </>
  )
}

export default App