import './App.css'
import { Suspense } from 'react'
import NavBar from './NavBar/NavBar'
import Hero from './Hero/Hero'
import Stats from './Stats/Stats'
import SubscriptionsHeader from './Subscriptions/SubscriptionsHeader/SubscriptionsHeader'
import SubscriptionsDetails from './Subscriptions/SubscriptionsDetails/SubscriptionsDetails'

function App() {


  return (
    <>
   <NavBar></NavBar>

   
    <Hero></Hero>
   
   <Stats></Stats>

   <SubscriptionsHeader></SubscriptionsHeader>

   <SubscriptionsDetails></SubscriptionsDetails>
   </>
  )
}

export default App
