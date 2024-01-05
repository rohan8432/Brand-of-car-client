
import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import AddProducts from './pages/AddProducts/AddProducts.jsx'
import MyCart from './pages/MyCart/MyCart.jsx'
import Login from './pages/Login/Login.jsx'
import Register from './pages/Register/Register.jsx'
import BrandDetails from './layouts/BrandDetails/BrandDetails.jsx'
import ErrorPage from './layouts/Error/ErrorPage.jsx'
import EachCardDetails from './layouts/EachCardDetails/EachCardDetails.jsx'
import UpdateCar from './layouts/UpdateCar/UpdateCar.jsx'
// import UpdateCar from './layouts/UpdateCar/UpdateCar.jsx'
// import AllProducts from './pages/AllProducts/AllProducts.jsx'





const router = createBrowserRouter([
  {
    path: '/',
    element : <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path : '/',
        element: <Home></Home>
      },
      {
        path: '/addProducts',
        element : <AddProducts></AddProducts>
      },
      {
        path: '/myCart',
        element : <MyCart></MyCart>
      },
     
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element : <Register></Register>
      },
    
      {
        path: '/brands/:brandName',
        loader: ()=>fetch('http://localhost:5000/car'),
        element: <BrandDetails></BrandDetails>
      },
      {
        path: '/eachCardDetails/:_id',
        loader : ()=>fetch('http://localhost:5000/car'),
        element : <EachCardDetails></EachCardDetails>
      },
      {
        path: '/updateCar/:id',
        loader: ({params})=>fetch(`http://localhost:5000/car/${params.id}`),
        element: <UpdateCar></UpdateCar>
      }
     
    ]

  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
