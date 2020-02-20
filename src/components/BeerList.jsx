import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import Navbar from './Navbar';



function BeerList(props) {

  let productContainer = {
    width: '50%',
    margin: '0 auto'
  }

  return (
    <div>
      <Navbar />
      <div style={productContainer}>
        {props.beerList.map((beer, index) =>
          <Beer
            names={beer.names}
            brand={beer.brand}
            alcoholContent={beer.alcoholContent}
            // pintsRemaining={beer.pintsRemaining}
            price={beer.price}
            key={index} />
        )}
      </div>
    </div>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array
}


export default BeerList;