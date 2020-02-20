import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {

  var navContainer = {
    padding: '40px 15px',
    marginBottom: '200px'
  };

  var listElements = {
    float: 'left',
    fontSize: '35px',
    border: '4px solid #ffc150',
    color: 'lightgray',
    padding: '10px',
    listStyleType: 'none',
    margin: '0px -2px'
  };

  var homeLink = {
    float: 'left',
    fontSize: '35px',
    border: '4px solid #ffc150',
    color: 'lightgray',
    padding: '10px',
    listStyleType: 'none',
    marginRight: '-2px',
    marginLeft: '3%'
  };


  return (
    <div style={navContainer}>
      <ul>
        <Link to="/"><li style={homeLink} >Home</li></Link>
        <Link to="/beerlist"><li style={listElements} >Products</li></Link>
        <Link to="/newbeer"><li style={listElements} >Add Beer</li></Link>
        <Link to="/"><li style={listElements} >FAQ</li></Link>
        <Link to="/"><li style={listElements} >Sign In</li></Link>
      </ul>

    </div>

  );
}


export default Navbar;