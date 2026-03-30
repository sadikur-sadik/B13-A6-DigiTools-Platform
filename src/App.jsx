import './App.css'
import { Suspense } from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import SubscriptionsHeader from './Subscriptions/SubscriptionsHeader/SubscriptionsHeader'
import SubscriptionsDetails from './Subscriptions/SubscriptionsDetails/SubscriptionsDetails'

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

      <SubscriptionsHeader></SubscriptionsHeader>

      <Suspense>
        <SubscriptionsDetails digitoolsProductsPromise={digitoolsProductsPromise}></SubscriptionsDetails>
      </Suspense>
    </>
  )
}

export default App
