import React from 'react'
import {Routes , Route} from "react-router-dom"
import { User } from '../Pages/User'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<User />}></Route>
    </Routes>
  )
}

export  {AllRoutes}
