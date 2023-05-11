import React from 'react'
import {Routes , Route} from "react-router-dom"
import { ProductPage } from '../Pages/ProductPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />}></Route>
    </Routes>
  )
}

export  {AllRoutes}
