import React, { useState } from 'react';
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Cart from './components/Cart'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore, { persistor } from './utils/appStore';
import { PersistGate } from 'redux-persist/integration/react';
import '../index.css'

const Layout = () => {
  const [userName, setUserName] = useState();
  return (
    <NextUIProvider>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className='app'>
              <Header></Header>
              <Outlet></Outlet>
            </div>
          </UserContext.Provider>
        </PersistGate>
      </Provider>
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
      },
      {
        path: '/cart',
        element: <Cart />
      }
    ],
    errorElement: <Error />
  }
]

const appRouter = createBrowserRouter(routeConfig);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)