import React from 'react';
import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'

const Layout = () => {
  return (
    <NextUIProvider>
      <div className='app'>
        <Header></Header>
        <Body></Body>
      </div>
    </NextUIProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Layout></Layout>)