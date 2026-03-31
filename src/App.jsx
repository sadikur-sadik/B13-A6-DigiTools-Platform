import './App.css'
import { Suspense, useState } from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import Demo from './Demo/Demo'
import Steps from './Steps/Steps'
import Explore from './Explore/Explore'
import Footer from './Footer/Footer'
import Subscriptions from './Subscriptions/Supscriptions'

const digitoolsProducts = async() => {

  const res = await fetch('/digitools.json')
  return res.json();
};

function App() {

  const digitoolsProductsPromise = digitoolsProducts();

  const [cart , setCart] = useState([])

  return (
    <>
      <NavBar cart={cart}></NavBar>


      <Hero></Hero>

      <Stats></Stats>

      <Suspense fallback={<span className="loading loading-spinner loading-xs"></span>}>
        <Subscriptions cart={cart} setCart={setCart} digitoolsProductsPromise={digitoolsProductsPromise}>

        </Subscriptions>
      </Suspense>
     
        <Steps></Steps>
     
        <Demo>

        </Demo>
   
        <Explore></Explore>
    
        <Footer></Footer>
     
    </>
  )
}

export default App
