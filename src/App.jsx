//import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import Homepage from './Homepage'
import Puppies from './Puppies'
import { Routes, Route } from 'react-router-dom'
import SinglePuppy from './SinglePuppy'


function App() {

  return (
  <div>
    <h1>Puppy Bowl with React</h1>
    <Nav />
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/puppies' element={<Puppies/>}/>
      <Route path='/puppies/:id'element={<SinglePuppy/>}/>
    </Routes>
  </div>
  )
}

export default App
