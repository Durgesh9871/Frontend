import {
    AspectRatio,
    Box,
    Image,
    Skeleton,
    Stack,
    StackProps,
    Text,
    useToast,Heading, SkeletonText 
  } from "@chakra-ui/react";
    import React, { useState } from "react";
  import "./magnify.css"

const DisplayData = () => {

    let style = {
        position:"relative" , 
    }
      

  return (
    <Box shadow="base" className='hoverProductDiv' w={{base:"80vw", sm: "55vw", md: "32vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} h={{base:"375px", sm: "375px", md: "385px", lg: "385px" ,xl: "385px",'2xl': "385px",}}  style={style} border="2px  red" >

        {/* Image box -------------------- */}
        <Skeleton isLoaded={true}>  <Box className="image">
        <Image className="img" src={"https://bit.ly/dan-abramov"} alt={"image"} height="255px"  width="235px" margin="auto"  />
        </Box>
        </Skeleton>


        {/* product details  */}
        <SkeletonText mt='4' noOfLines={3} spacing='5' skeletonHeight='4'  isLoaded={true} animation="none">
        <Box id='productDataDesc' position="absolute" bottom="20px"    style={{border:"2px   #EBECEE" ,height:"auto" , padding:"10px 10px 10px 10px" ,cursor:'pointer'  }}w={{base:"79vw", sm: "54vw", md: "31vw", lg: "22vw" ,xl: "22vw",'2xl': "22vw",}}>
        
        {/* Adding in team --------- */}
        <Box  width={{base:"60%", sm: "60%", md: "60%", lg: "85%" ,xl: "60%",'2xl': "60%",}}     style={{border:"2px solid #EBECEE" , margin:"auto" , display:"flex" ,justifyContent:"center" , alignItems:"center" ,padding:"2px" , color:"#f75045"  }}>  <Text ml={2} fontWeight="500" >ADD TO CART</Text> </Box> 
        
        <Box style={{display:"flex" ,justifyContent:"space-between" }}>
         <Box>

         <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{"hello Brand"}</Heading>
         </Box>

         </Box> 

         {/*  Ends here hover ------------------------------------ */}

        
         {   <Heading fontSize="15.5px" fontWeight="600" color="#303030" textAlign="left">{"this is also brand"}</Heading> }
        { <Text fontSize='14px' className='control' fontWeight="500" color="#727272" textAlign="left"  >{"title"}</Text> }
         

        </Box>
        </SkeletonText>
       
        {/* details end here ------------ */}
      </Box>

  )
}

export  {DisplayData}
