import React from 'react';
import redTheme from '../assets/images/red.jpg';
import Navbar from './Navbar';
import FormBox from './FormBox';

function NewBeerForm() {

  var background = {
    backgroundImage: `url(${redTheme})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%'
  };

  return (
    <div style={background}>
      <Navbar/>
      <FormBox /> 
    </div>
  );
}


export default NewBeerForm;

