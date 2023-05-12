import React, { useState } from 'react'
import { Box, Input } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import './SearchBar.css';


const SearchBar = ({setSearchTitle}) => {


  return (
      <Box className="inputTag" >
				<SearchIcon fontSize="20px" position="relative" left="30px" color="#fff"  />
				<Input
					shadow="sm"
					pl={9}
					fontSize="20px"
					type="search"
					width={{
						base: '80%',
						sm: '60%',
						md: '64%',
						lg: '50%',
						xl: '50%',
						'2xl': '50%',
					}}
					color="black"
					placeholder="Search User"
					onChange={(e) => setSearchTitle(e.target.value)}
					height="53px"
					border="2px solid #F0F0F0" focusBorderColor="#F0F0F0" 
				/>
			</Box>


  )
}

export  {SearchBar}
