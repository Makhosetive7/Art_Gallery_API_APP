import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Search.css"

const Search = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();
  
    const handleSeachedName = (e) => {
      setName(e.target.value) 
    };
  
    const handleSearch = () => {
      navigate(`/searchedPage/${name}`);
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' || e.code === 'Space') {
        handleSearch();
      }
    };
  return (
    <div>
       <input
        type="text"
        placeholder="Search by Location"
        value={name}
        onChange={handleSeachedName}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};

export default Search;
