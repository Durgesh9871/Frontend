import { Box  , Text , Button} from "@chakra-ui/react"
import "./pagination.css"


function Pagination ({handlePaginationCount , disableNext , disablePre , changePage,changeNum ,handlePagePrevious ,handlePageChange, setChangePage , reviewTitleUser ,divideValue }){
    return (
        <Box display="flex" alignItems="center"  mb="20px" border="2px  red" flexDirection={{base:"column", sm: "column", md: "row", lg: "row",xl: "row",'2xl': "row"}} > 
        <Text pl="20px" fontWeight="500" textAlign="left">Page {changePage} of {Math.ceil(reviewTitleUser/divideValue)}</Text>
        {/* Numbers ***********  */}
         <Box display="flex" alignItems="center" m="auto" fontWeight="400" fontSize="18px" border="2px  red"  >
          
          <Button isLoading={disablePre} color="#2874f0" mr="13px" isDisabled={changePage == 1} cursor="pointer" variant="unstyled" onClick={handlePagePrevious} fontWeight={500} >Prev</Button>
          {Array(5 > Math.ceil(reviewTitleUser/divideValue) ?Math.ceil(reviewTitleUser/divideValue): 5 ).fill('').map((_,index)=>{
            if(index+changeNum <= Math.ceil(reviewTitleUser/divideValue) ){
             console.log(index+ changeNum ,"num" , changePage ,"changePage")
            return (
           
              <Text onClick={()=>handlePaginationCount(index+changeNum)} cursor="pointer" ml={{base:"15px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} key={index}  className={changePage == index+changeNum &&  "colorText"}> {index+ changeNum }</Text>
             
             ) 
            }
          })} 
          
         
          <Button isLoading={disableNext}  ml="25px" color="#2874f0" variant="unstyled"  isDisabled={changePage == Math.ceil(reviewTitleUser/divideValue)}  cursor="pointer" onClick={handlePageChange} fontWeight={500}>Next</Button>
          

         </Box>
      </Box>
    )
}

export {Pagination}