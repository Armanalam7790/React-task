import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './pages/Products'
import ProductsDetails from './pages/ProductsDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/ProductsDetails/:id' element={<ProductsDetails />} />

      </Routes>
    </div>
  )
}

export default App