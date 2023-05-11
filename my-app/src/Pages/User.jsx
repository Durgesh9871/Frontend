import React from 'react'
import {Box, SimpleGrid} from "@chakra-ui/react"
import { FilterBox } from '../UserPageComponent/FilterBox'
import { DisplayData } from '../UserPageComponent/DisplayData'

const User = () => {
  return (
    <Box id='filterMainBox_&_DisplayData' style={{border:"1px  red" ,width:"92%" , margin:"auto" , height:"auto" , display:"flex" , justifyContent:"space-between" }}>
      {/*  Filter main box --- */}

      <Box  height="auto" mb="30px" width={{base:"0px", sm: "43%", md: "24%", lg: "17%",xl: "17%",'2xl': "17%"}} shadow="md" style={{border:"0.1px solid #e7e9ee"}}>
      <FilterBox />
      </Box>


{/*  user data starts from here ---- */}
      <Box id='DisplayDataBox' style={{border:"1px solid  green" , height:"auto" , width:"82%"}} >
{/* Data display in format of grid */}
      <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 3,'2xl': 3,}} spacingY={10}  >
     
      <DisplayData />
       <DisplayData />
       <DisplayData />
       <DisplayData />
       <DisplayData />
       <DisplayData />

      </SimpleGrid>
      
      </Box>

    </Box>
  )
}

export  {User}