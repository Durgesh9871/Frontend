import React from 'react'
import "./user.css"
import { TeamBox } from '../TeamComponent/TeamBox'
import { Box, Heading } from '@chakra-ui/react'


const Team = () => {
  return (
    <Box >
     <Heading color="grey" textAlign="center" m="20px 0px"><u>Team Members</u></Heading>

     {/* teams box */}
    <TeamBox />

    </Box>
  )
}

export  {Team}
