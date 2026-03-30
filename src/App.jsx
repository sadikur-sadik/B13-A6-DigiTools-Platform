import './App.css'
import { Suspense } from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import Subscriptions from './Subscriptions/Supscriptions'

const digitoolsProducts = async() => {

  const res = await fetch('/digitools.json')
  return res.json();
}

function App() {

  const digitoolsProductsPromise = digitoolsProducts();

  return (
    <>
      <NavBar></NavBar>


      <Hero></Hero>

      <Stats></Stats>

      <Suspense>
        <Subscriptions digitoolsProductsPromise={digitoolsProductsPromise}>

        </Subscriptions>
      </Suspense>
    </>
  )
}

export default App
