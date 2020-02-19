// import React from 'react';
// import BeerList from './BeerList';
// import redTheme from '../assets/images/red.jpg';
// import Navbar from './Navbar';

// function Products(props) {

//   var background = {
//     backgroundImage: `url(${redTheme})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: '100% 100%'
//   };

//   var parent = {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(12, 1fr)',
//     gridTemplateRows: 'auto',
//     gridColumnGap: '0px',
//     gridRowGap: '0px'
//   };

//   var navDiv = {
//     gridArea: '1 / 1 / 2 / 13'
//   };

//   var leftColumn = {
//     gridArea: '2 / 1 / 8 / 4'
//   };

//   var title = {
//     backgroundColor: 'black',
//     gridArea: '2 / 4 / 3 / 10',
//     textAlign: 'center',
//     border: '39px solid #141819',
//     color: 'white',
//     fontSize: '30px',
//     opacity: '0.7',
//     borderRadius: '10px',
//     marginBottom: '40px'
//   };

//   var main = {
//     gridArea: '3 / 4 / 8 / 10'
//   };

//   var rightColumn = {
//     gridArea: '2 / 10 / 8 / 13'
//   };

//   return (

//     <div style={background}>
//       <div style={parent}>

//         <div style={navDiv}>
//           <Navbar />
//         </div>

//         <div style={leftColumn}></div>

//         <div style={title}>
//           <h1>Specialty Beers</h1>
//         </div>

//         <div style={main}>
//           <BeerList 
//             beerList={this.props.beerList} />
//         </div>

//         <div style={rightColumn}></div>

//       </div>
//     </div>

//   );
// }


// export default Products;