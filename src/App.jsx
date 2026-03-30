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

      <Suspense>
        <Subscriptions cart={cart} setCart={setCart} digitoolsProductsPromise={digitoolsProductsPromise}>

        </Subscriptions>
      </Suspense>
      <Suspense>
        <Steps></Steps>
      </Suspense>
      <Suspense>
        <Demo>

        </Demo>
      </Suspense>

      <Suspense>
        <Explore></Explore>
      </Suspense>

      <Suspense>
        <Footer></Footer>
      </Suspense>
    </>
  )
}

export default App
