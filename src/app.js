import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import NextCard from './components/NextCard';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';

const Layout = () => {
  return (
    <NextUIProvider>
      <div className='app'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </NextUIProvider>
  )
}

const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/restaurants/:id',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]

const appRouter = createBrowserRouter(routeConfig);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)