import React from 'react'
import { Box, Heading , Image , Text} from '@chakra-ui/react'
import {AiFillDelete} from "react-icons/ai"


const TeamBox = () => {
  return (
    <Box shadow="base" display="flex" justifyContent="space-around" p="12px" alignItems="center" className='hoverProductDiv' w={{base:"auto", sm: "55vw", md: "40vw", lg: "28vw" ,xl: "23vw",'2xl': "23vw",}} border="2px  red" >
      
      {/*  image box */}
      <Box className='imageTeam'>
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' width="100px" borderRadius="50%" />
      </Box>

      {/*  Detail Box */}
      <Box>
      <Heading fontSize="16px" fontWeight="700" color="#303030" textAlign="left"> Domain: <span style={{color:"grey"}}>{"IT Sector"}</span></Heading>
    
     
      <Heading fontSize="15.5px" fontWeight="600" color="#727272" textAlign="left">{"durgesh" + " " + "sig"}</Heading> 
            
         <Text fontSize='14px'  fontWeight="500" color="#727272" textAlign="left"  >{"male"}</Text> 
         <Text fontSize='14px' className='control'  fontWeight="500" color="#727272" textAlign="left"  >{"durgesh@gmail.com"}</Text> 

        {/*  delete button inside div */}
        <Box display="flex" justifyContent="space-between" mt="10px">
         <Text fontSize='14px'  fontWeight="600" color={true == true ? "#00f700" : "#e34f4f"} textAlign="left"  >{true == true ? "Available" : "Not Available"}</Text> 
        
        <AiFillDelete style={{fontSize:"20px" , color:"red" , cursor:"pointer"}} />

         </Box>

      </Box>

     </Box>
  )
}

export  {TeamBox}
