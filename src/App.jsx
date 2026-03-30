import './App.css'
import { Suspense } from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'

function App() {


  return (
    <>
   <NavBar></NavBar>

   
    <Hero></Hero>
   
   <Stats></Stats>

   </>
  )
}

export default App
