import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './components/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Cart from './components/Cart';
import CartContext from './Context/CartContext';

let allRoutes = createBrowserRouter(
  [

    {
      path: '/',
      element: <Home></Home>
  
    },
  
    {
      path: '/about-us',
      element: <AboutUs></AboutUs>
    },
  
    {
      path: '/cart',
      element: <Cart></Cart>
    }
  
  ]

)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContext>

    <RouterProvider router={allRoutes}></RouterProvider>
    </CartContext>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
