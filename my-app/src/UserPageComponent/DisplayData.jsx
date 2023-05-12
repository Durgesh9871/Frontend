import {
    AspectRatio,
    Box,
    Image,
    Skeleton,
    Text,
    useToast,Heading, SkeletonText 
  } from "@chakra-ui/react";
    import React, { useState } from "react";
  import "./magnify.css"


const userTeam = JSON.parse(localStorage.getItem("userTeam")) || []

const DisplayData = ({item , loading}) => {

  //  checking user ------
  

  const toast = useToast()

    let style = {
        position:"relative" , 
    }
      
    const handleTeam = (item)=>{
      const userFind = userTeam.filter((ele ,i)=>{
        return ele.id == item.id 
        })

      if(userFind.length === 0){
        userTeam.push(item)
        localStorage.setItem("userTeam",JSON.stringify(userTeam))
        toast({
          title: 'User Added',
          description: `${item.first_name} ${item.last_name} Added in Team`,
          status: 'success',
          duration: 3000,
          isClosable: true,
          position:"top" 
        })
      }

      else{
        toast({
          title: 'Not Added (Already in Team)',
          description: `${item.first_name} ${item.last_name} Already in Team`,
          status: 'error',
          duration: 3000,
          isClosable: true,
          position:"top" 
        })
      }

    }

   


  return (
    <Box shadow="base" className='hoverProductDiv' w={{base:"80vw", sm: "55vw", md: "32vw", lg: "23vw" ,xl: "23vw",'2xl': "23vw",}} h={{base:"375px", sm: "375px", md: "385px", lg: "385px" ,xl: "385px",'2xl': "385px",}}  style={style} border="2px  red" >

        {/* Image box -------------------- */}
        <Skeleton isLoaded={!loading}>  <Box className="image">
        <Image className="img" src={item.avatar} alt={"image"} height="200px"  width="auto" margin="auto"  />
        </Box>
        </Skeleton>


        {/* user details  */}
        <SkeletonText mt='4' noOfLines={3} spacing='5' skeletonHeight='4'  isLoaded={!loading} animation="none">
        <Box   position="absolute" bottom="25px"    style={{border:"2px   #EBECEE" ,height:"auto" , padding:"10px 10px 10px 10px"   }}w={{base:"79vw", sm: "54vw", md: "31vw", lg: "22vw" ,xl: "22vw",'2xl': "22vw",}}>
        
        {/* Adding in team --------- */}
        <Box  onClick={()=>handleTeam(item)} width={{base:"60%", sm: "60%", md: "60%", lg: "85%" ,xl: "60%",'2xl': "60%",}}     style={{cursor:'pointer' , border:"2px solid #EBECEE" , margin:"auto" , display:"flex" ,justifyContent:"center" , alignItems:"center" ,padding:"2px" , color:"#f75045"  }}>  <Text ml={2} fontWeight="500" >ADD IN TEAM</Text> </Box> 
        
        <Box style={{display:"flex" ,justifyContent:"space-between" }}>
         <Box>

         <Heading fontSize="16px" fontWeight="700" color="#303030" textAlign="left">{item.domain}</Heading>
         </Box>

         </Box> 


        
            <Heading fontSize="15.5px" fontWeight="600" color="#727272" textAlign="left">{item.first_name + " " + item.last_name}</Heading> 
            <Box display="flex" justifyContent="space-between">
         <Text fontSize='14px'  fontWeight="500" color="#727272" textAlign="left"  >{item.gender}</Text> 
         <Text fontSize='14px'  fontWeight="600" color={item.available == true ? "#00f700" : "#e34f4f"} textAlign="left"  >{item.available == true ? "Available" : "Not Available"}</Text> 

         </Box>

        </Box>
        </SkeletonText>
       
        {/* details end here ------------ */}
      </Box>

  )
}

export  {DisplayData}
