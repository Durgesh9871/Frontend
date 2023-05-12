import React, { useEffect } from 'react'
import "./user.css"
import { TeamBox } from '../TeamComponent/TeamBox'
import { Box, Heading } from '@chakra-ui/react'


const Team = () => {
    const userTeam = JSON.parse(localStorage.getItem("userTeam")) || []

   

   

  return (
    <Box >
     <Heading color="grey" textAlign="center" m="20px 0px"><u>Team Members</u></Heading>

     {/* teams box */}
      {userTeam?.length > 0 && userTeam.map((ele , i)=>{
         return  <TeamBox key={i} item={ele}  /> 
      })
        
      }

   

    </Box>
  )
}

export  {Team}
