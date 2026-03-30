import './App.css'
import { Suspense, useState } from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
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

      <Suspense>
        <Subscriptions cart={cart} setCart={setCart} digitoolsProductsPromise={digitoolsProductsPromise}>

        </Subscriptions>
      </Suspense>
    </>
  )
}

export default App
