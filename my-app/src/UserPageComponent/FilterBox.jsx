import { Box, Checkbox, Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Modalfilter } from "./Modalfilter";
import "./ProductHeadings.css";
import {CloseIcon} from "@chakra-ui/icons"

const FilterBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brand, setBrand] = useState(searchParams.getAll("brand") || []);
  const [color, setColor] = useState(searchParams.getAll("color") || []);
  const [rating, setRating] = useState(searchParams.getAll("rating") || []);
  const [allFilter , setAllFilter ] = useState([])
//  const [total , setTotal] = useState(1)


  const handleChange = (e) => {
    let newCategory = [...brand];
   
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
      
    }
    setBrand(newCategory);
    
  };

  const handleChangeGender = (e) => {
    let newCategory = [...color];

    if (newCategory.includes(e.target.value)) {
      newCategory.splice(newCategory.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
     
    }
    setColor(newCategory);

  };

  const handleChangeAvailability = (e) => {
    let newCategory = [...rating];
    
      if (newCategory.includes(e.target.value)) {
        newCategory.splice(newCategory.indexOf(e.target.value), 1);
      }
    
    else {
      newCategory.push(e.target.value);
      
    }
    setRating(newCategory);
  
   
  };
// console.log('allFilter' , allFilter)
// console.log('allFilter' , allFilter)
 
const remove = (item)=>{
  const arrayBrand = [...brand ]
  const arrayColor = [...color] 
  const arrayRating = [...rating]
  
  // console.log(item)
  if(arrayBrand.includes(item)){
    arrayBrand.splice(arrayBrand.indexOf(item),1)
  }
  else if(arrayColor.includes(item)){
    arrayColor.splice(arrayColor.indexOf(item),1)
  }
 else if(arrayRating.includes(item)){
    arrayRating.splice(arrayRating.indexOf(item),1)
  }
 
 
  setBrand(arrayBrand)
  setColor(arrayColor) 
  setRating(arrayRating)
 
}

const clearAllFilterItem = ()=>{
  setBrand([])
  setColor([]) 
  setRating([])
  // setSearchParams()
}



  useEffect(() => {
    let obj = [...brand ,...color , ...rating ]

    let params = {};
    params.brand = brand;
    params.color = color ;
    params.rating = rating 
    setSearchParams(params);

    setAllFilter(obj)
  }, [brand,color ,rating, setSearchParams]);

  

  //    alll the filter data using loop -----------------------------------------
  const filterDomainData = [
    {
      id: "1",
      domain: "Sales",
      value: "Sales",
    },
    {
      id: "2",
      domain: "Finance",
      value: "Finance",
     
    },
    {
      id: "3",
      domain: "UI Designing",
      value: "UI Designing",
     
    },
    {
      id: "4",
      domain: "Management",
      value: "Management",
     
    },
    {
      id: "5",
      domain: "Marketing",
      value: "Marketing",
    },
    {
      id: "6",
      domain: "Business",
      value: "Business",
    },
  ];

  const filterGenderData = [
    {
      id: "1",
      gender: "Female",
      value:"Female" ,
    },
    {
      id: "2",
      gender: "Male",
      value:"Male" ,

    },
  ];

  const filterAvailabilityData = [
    {
      id: 1,
      value: true ,
      size: 6 ,

    },
    {
      id: 2,
      value: false ,
      size: 6,
    },
  ];

  return (
    <Box>
      <Box
        className="hoverFilterMainBox" 
        style={{
          display: "",
          border: "1px   black",
          width: "90%",
          margin: "auto",
          height: "auto",
          textAlign: "left",
          
        }}
      >
          
         
      { allFilter.length > 0 && (
        <Box style={{display:"flex" , justifyContent:"space-between"}}>
      <Text fontSize="17px" fontWeight="500" mb={1} mt={3} color="#1d252c">
         Filters
        </Text> 
        <Text fontSize="16px" className="clearAllFilter" fontWeight="500" mb={1} mt={3} color="#ff5172" cursor="pointer" onClick={clearAllFilterItem}>
         Clear All
        </Text> 
        </Box>
        ) }
        <Box style={{display:"inline-block" , border:"2px  red" , height:"auto" ,fontSize:"14px"}}>
          { allFilter.length > 0 && allFilter.map((item,i)=>{

            return(<div style={{display:"inline-block" , border:"2px solid #f0f1f2" ,borderRadius:"8px" ,marginRight:"10px" ,marginTop:"10px" ,padding:"3px"}}  key={i} width="auto" ml="4px">{item} <CloseIcon fontSize="9px" marginLeft="7px"  onClick={()=>remove(item)} cursor="pointer" /></div>)
           
          })} 
          </Box>
      
                       

        {/* Checkboxes are here ---------depend upon Domain & Models ------- */}
        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Domain
        </Text>
        <Box  style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterDomainData.length > 0 &&
            filterDomainData.map((item) => {
              return (
                <Checkbox
                  key={item.id}
                  value={item.value}
                  onChange={handleChange}
                
                  isChecked={brand.includes(item.value)}
                >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {item.domain} 
                  </Text>
                </Checkbox>
              );
            })}
        </Box>
      
        

        <Modalfilter brand={brand} handleChange={handleChange}/>

        {/* Checkboxes are here ---------depend upon  Gender- ------- */}
        <hr style={{ marginTop: "3vh" }} />

        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
          Gender
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterGenderData.length > 0 &&
            filterGenderData.map((item) => {
              return (
                <Checkbox key={item.id} value={item.value} onChange={handleChangeGender}  isChecked={color.includes(item.value)} >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {item.gender} 
                  </Text>
                </Checkbox>
              );
            })}
        </Box>

        {/* Checkboxes are here ---------depend upon Availability - ------- */}
        <hr style={{ marginTop: "3vh" }} />

        <Text fontSize="17px" fontWeight="500" mb={4} mt={3} color="#1d252c">
        Availability 
        </Text>
        <Box style={{ display: "flex", flexDirection: "column" }} mb={1}>
          {filterAvailabilityData.length > 0 &&
            filterAvailabilityData.map((item) => {
              return (
                <Checkbox key={item.id}  value={item.value}
                onChange={handleChangeAvailability}
                isChecked={rating.includes(item.value)}  >
                  <Text fontSize="17px" fontWeight="400" color="#1d252c">
                    {item.value === true ? "Available" : "Not Available"}
                  </Text>
                </Checkbox>
              );
            })}
        </Box>
      </Box>
    </Box>
  );
};

export { FilterBox };
