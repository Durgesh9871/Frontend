import React from 'react'
import { Box, Heading , Image , Text} from '@chakra-ui/react'


const TeamBox = ({item  }) => {

   

  return (
    <Box shadow="base" display="flex" m="40px auto" justifyContent="space-around" p="12px" alignItems="center" className='hoverProductDiv' w={{base:"auto", sm: "55vw", md: "40vw", lg: "28vw" ,xl: "23vw",'2xl': "23vw",}}  >
      
      {/*  image box */}
      <Box className='imageTeam'>
      <Image src={item.avatar} alt={item.first_name} width="100px" background="black" border="2px solid #727272" borderRadius="50%" />
      </Box>

      {/*  Detail Box */}
      <Box width="60%">
      <Heading fontSize="16px" fontWeight="700" color="#303030" textAlign="left"> Domain: <span style={{color:"grey"}}>{item.domain}</span></Heading>
    
     
      <Heading fontSize="15.5px" className='control' fontWeight="600" color="#727272" textAlign="left">{item.first_name + " " + item.last_name}</Heading> 
            
         <Text fontSize='14px' className='control'  fontWeight="500" color="#727272" textAlign="left"  >{item.gender}</Text> 
         <Text fontSize='14px' className='control'  fontWeight="500" color="#727272" textAlign="left"  >{item.email}</Text> 

        {/*  delete button inside div */}
        <Box display="flex" justifyContent="space-between" mt="10px">
         <Text fontSize='14px'  fontWeight="600" color={item.available == true ? "#00f700" : "#e34f4f"} textAlign="left"  >{item.available == true ? "Available" : "Not Available"}</Text> 
        

         </Box>

      </Box>

     </Box>
  )
}

export  {TeamBox}
