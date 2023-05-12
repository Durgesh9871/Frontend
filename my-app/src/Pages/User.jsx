import React, { useEffect, useRef, useState } from 'react'
import {Box, SimpleGrid} from "@chakra-ui/react"
import { FilterBox } from '../UserPageComponent/FilterBox'
import { DisplayData } from '../UserPageComponent/DisplayData'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../Redux/action'
import { useLocation, useSearchParams } from 'react-router-dom'
import { Pagination } from '../UserPageComponent/Pagination'
// import "./user.css"

const User = () => {
  // pagination --
const [changeNum , setChangeNum] = useState(1)
const [changePage  ,setChangePage] = useState(1)
const [disableNext , setDisableNext] = useState(false)
const [disablePre , setDisablePre] = useState(false)

const pageLoad = useRef()
      

  const dispatch = useDispatch()
  const location = useLocation()
const [searchParams] = useSearchParams()
//  getting data and display it ------------
  const {isLoading , userData , isError} = useSelector((state)=>{
    return {
      isLoading:state.isLoading ,
      userData: state.userData,
      isError: state.isError , 

    }
  })

  // console.log(isLoading ,"snb")

  useEffect(()=>{
    if(location || userData.length === 0  ){
     
      const getUserParams = {
        params:{
           domain : searchParams.getAll('domain') ,
           gender : searchParams.getAll('gender') ,
           available : searchParams.getAll('available') ,

        }
      }

      dispatch(getData(getUserParams ,changePage))
  
    }
  },[ location.search ,changePage])


//  pagination logic starts from here ---
const reviewTitleUser = 1000
 
// this loop for pagination count --------
const numLoop = [5,9,13,17,21,25,29,33,37,41,45,49]

  const handlePageChange = ()=>{
    setChangePage(changePage+1)
    for(var i=0 ; i<numLoop.length ; i++){
      if(5 < Math.ceil(reviewTitleUser/20) && changePage == numLoop[i] ){
        setChangeNum(numLoop[i])
      }
    }
   

    setDisableNext(true)
      clearTimeout(pageLoad.current)
      pageLoad.current = setTimeout(()=>{
        setDisableNext(false)
      },300)
  
   
    
  }
    
  const handlePagePrevious = ()=>{
    setChangePage(changePage-1)
    for(var i=0 ; i<numLoop.length ; i++){
      if(5 < Math.ceil(reviewTitleUser/20) && changePage == numLoop[i] ){
        setChangeNum(numLoop[i]-4)
      }
    }
   

    setDisablePre(true)
    clearTimeout(pageLoad.current)
    pageLoad.current = setTimeout(()=>{
      setDisablePre(false)
    },300)

  }

  const handlePaginationCount = (num)=>{
  setChangePage(num)

}




   

    

  return (
    <Box id='filterMainBox_&_DisplayData' style={{border:"1px  red" ,width:"92%" , margin:"auto" , height:"auto" , display:"flex" , justifyContent:"space-between" }}>
      {/*  Filter main box --- */}

  
      <Box  height="auto" mb="30px" width={{base:"0px", sm: "43%", md: "24%", lg: "17%",xl: "17%",'2xl': "17%"}} shadow="md" style={{border:"0.1px solid #e7e9ee"}} >
      <FilterBox />
      </Box>

    

{/*  user data starts from here ---- */}
      <Box id='DisplayDataBox' style={{ height:"auto" , width:"82%"}} >
{/* Data display in format of grid */}
      <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 3,'2xl': 3,}} spacingY={10}  >
     
    { userData?.length > 0 && userData.map((ele)=>{
     return  <DisplayData key={ele.id} item={ele} loading={isLoading} />
    })
    }
     

      </SimpleGrid>
      
      {/* pagination starts from here  */}
      {userData.length > 0 && <Box pt="50px" pb="50px">
          <Pagination disableNext={disableNext} disablePre={disablePre} changePage={changePage} changeNum={changeNum} handlePagePrevious={handlePagePrevious} handlePageChange={handlePageChange} setChangePage={setChangePage} reviewTitleUser={reviewTitleUser} divideValue={20} handlePaginationCount={handlePaginationCount}  />
          </Box>}
          
      </Box>



    </Box>
  )
}

export  {User}
