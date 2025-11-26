import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Component/Login/Login.jsx'
import Signup from './Component/Signup/Signup.jsx'
import Houses from './Component/Houses/Houses.jsx'
import Listing from './Component/Listing/Listing.jsx'
import UserContextProvider from './Context/Usercontext.jsx'
import Contact from './Component/Contactus/Contact.jsx'
import Rooms from './Component/Rooms/Rooms.jsx'
import Farm_Houses from './Component/Farm_Houses/Farm_Houses.jsx'
import Pool_Houses from './Component/Pool_Houses/Pool_Houses.jsx'
import Tent_Houses from './Component/Tent_Houses/Tent_Houses.jsx'
import Cabins from './Component/Cabins/Cabins.jsx'
import Shops from './Component/Shops/Shops.jsx'
import Forest_Houses from './Component/Forest_Houses/Forest_Houses.jsx'

// Property Details page
import PropertyDetails from './Component/PropertyDetails/PropertyDetails.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='Login' element={<Login />} />
      <Route path='Signup' element={<Signup />} />
      <Route path='Houses' element={<Houses />} />
      <Route path='Rooms' element={<Rooms />} />
      <Route path='Farm_House' element={<Farm_Houses />} />
      <Route path='Pool_Houses' element={<Pool_Houses />} />
      <Route path='Tent_Houses' element={<Tent_Houses />} />
      <Route path='Cabins' element={<Cabins />} />
      <Route path='Shops' element={<Shops />} />
      <Route path='Forest_Houses' element={<Forest_Houses />} />
      <Route path='Listing' element={<Listing />} />
      <Route path='Contact' element={<Contact />} />

      {/* Airbnb-style Property Details Route */}
      <Route path='property' element={<PropertyDetails />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
)
