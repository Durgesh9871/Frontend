import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure ,Text, Box, Checkbox } from '@chakra-ui/react'
import React from 'react' ; 
import "./ProductHeadings.css" ; 

const Modalfilter = ({domain ,handleChange}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

  
    const filterNameData = [
        {
        id:"1"  ,   
        name:"Sales" , 
        size:"" , 
    },
    {
        id:"2"  ,   
        name:"Finance" , 
        size:"" , 
    },
    {
        id:"3"  ,   
        name:"UI Designing" , 
        size:"" , 
    },
    {
        id:"4"  ,   
        name:"Management" , 
        size:"" , 
    },
    {
        id:"5"  ,   
        name:"Marketing" , 
        size:"" , 
    },
    {
        id:"6"  ,   
        name:"Business" , 
        size:"" , 
    },
    {
        id:"7"  ,   
        name:"IT" , 
        size:"" , 
    },
    {
        id:"8"  ,   
        name:"Cleaner's" , 
        size:"NO" , 
    },  {
        id:"9"  ,   
        name:"Sheff" , 
        size:"NO" , 
    },
    {
        id:"10"  ,   
        name:"Engineer's" , 
        size:"NO" , 
    },
    
] 
  

 
  return (
    <Box >
      <Text className="modelHover" onClick={onOpen} style={{cursor:"pointer" , fontWeight:"500"}} >Show More</Text>

      <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size={{base:"none", sm: "md", md: "xl", lg: "3xl" ,xl: "3xl",'2xl': "3xl",}}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Domain</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
            {/*  here is all text ----------------------------------------------- */}
            <Box style={{display:"grid" , gridTemplateColumns:"repeat(3,1fr)" , gap: "20px" }}>
        {filterNameData.length > 0 &&  filterNameData.map((item)=>{
             return (
             <Checkbox key={item.id} onChange={handleChange} defaultChecked={domain.includes(item.domain)} value={item.name} ><Text fontSize='17px' fontWeight="400" color="#1d252c">{item.name} {item.size === "NO" && <span style={{color:"red"}}>(Not Available)</span> }</Text></Checkbox> )
        })}

       
        </Box>

            {/* here is text end --------------------------------------------------- */}
          </ModalBody>

          <ModalFooter>
            <Button   mr={3} onClick={onClose}>
              Close
            </Button>
            <Button  colorScheme='blue' onClick={onClose}>Apply</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  )

}
    
 


export  {Modalfilter}
