import React from 'react'
import {Box} from "@chakra-ui/react"
import { FilterBox } from '../UserPageComponent/FilterBox'

const User = () => {
  return (
    <Box id='filterMainBox_&_DisplayData' style={{border:"1px  red" ,width:"92%" , margin:"auto" , height:"auto" , display:"flex" , justifyContent:"space-between" }}>
      {/*  Filter main box --- */}

      <Box  height="auto" mb="30px" width={{base:"none", sm: "43%", md: "24%", lg: "17%",xl: "17%",'2xl': "17%"}} shadow="md" style={{border:"0.1px solid #e7e9ee"}}>
      <FilterBox />
      </Box>


      <Box id='DisplayDataBox' style={{border:"1px solid  green" , height:"auto" , width:"82%"}} >

      </Box>

    </Box>
  )
}

export  {User}
