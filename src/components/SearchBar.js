// // import React from 'react'
// // import {useState} from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import {Paper, IconButton} from '@mui/material'
// // import {Search} from '@mui/icons-material';
// // //paper is div with white backgroud and some white alivation
// // function SearchBar() {
// //   return (
// //    <Paper component="form"
// //    onSubmit={()={}}
// //    sx={{
// //     borderRadius:20, border:'1px solid #e3e3e3 pl:2 ,boxShadow:'none' ,
// //     mr;{sm:5}
// //    }}
// //    >
// //   <input
// //   className="search-bar"
// //   placeholder="Search"
// //   value=""
// //   onChange={()=>{}}
// //   />
// //   <IconButton type="submit" sx={{p:'10px', color: 'red'}}>
// //     <SearchIcon/>
// //   </IconButton>
// //    </Paper>

// //   )
// // }

// // export default SearchBar

// //
// //import React, { useState } from 'react';
// //import { useNavigate } from "react-router-dom";
// import { Paper, IconButton } from '@mui/material';
// import {Search} from '@mui/icons-material'

// const SearchBar = () => {
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const navigate = useNavigate();

// //   const onhandleSubmit = (e) => {
// //     e.preventDefault();

// //     if (searchTerm) {
// //       navigate(`/search/${searchTerm}`);

// //       setSearchTerm('');
// //     }
// //   };

//   return (
//     <Paper
//       component="form"
//      // onSubmit={()={}}
//       sx={{
//         borderRadius: 20,
//         border: '1px solid #e3e3e3',
//         pl: 2,
//         boxShadow: 'none',
//         mr: { sm: 5 },
//       }}
//     >
//       <input
//         className='search-bar'
//         placeholder='Search...'
//         value=""
//         onChange={()=>{}}
//       />
//       <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
//         <Search />
//       </IconButton>
//     </Paper>
//   );
// };

// export default SearchBar;


import React from 'react';
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    // Implement your search logic here
    // You can use the "onSearch" prop to pass a callback to the parent component
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <Paper
      component="form"
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: 400,
        borderRadius: 16,
        marginLeft: 2,
      }}
    >
      <InputBase
        placeholder="Search..."
        sx={{ ml: 1, flex: 1 }}
        onChange={handleSearch}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;