import React from 'react'
import {Routes , Route} from "react-router-dom"
import { User } from '../Pages/User'
import { Team } from '../Pages/Team'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<User />}></Route>
      <Route path="/team" element={<Team />}></Route>
    </Routes>
  )
}

export  {AllRoutes}
