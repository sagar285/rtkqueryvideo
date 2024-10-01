import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from '../pages/Signup'
import Home from '../pages/Home'
import SingleUser from '../pages/SingleUser'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element={<Signup/>}/>
      <Route path='/users' element={<Home/>}/>
      <Route path='/user/:id' element={<SingleUser/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App