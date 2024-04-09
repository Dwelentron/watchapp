import { useState } from 'react'
import { CartProvider } from 'react-use-cart'
import './App.css'
import Cart from './assets/Cart'
import Page from './assets/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
    </>
  )
}

export default App
