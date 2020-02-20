import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';
import Error404 from './Error404';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: [{names: "Molson", brand: "Molson", alcoholContent: "5.5%", pintsRemaining: 124, price: "$7.99"}]
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer) {
    console.log("I am inside handleAddingNewBeerToList");
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    console.log(newMasterBeerList);
    this.setState({ masterBeerList: newMasterBeerList });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/beerlist' render={() => <BeerList 
            beerList={this.state.masterBeerList} />} />

          <Route path='/newbeer' render={() => <NewBeerControl 
            onSubmitAddNewBeer={this.handleAddingNewBeerToList} />} />
            
          <Route component={Error404} />
        </Switch>
      </div>
    );

  }
}



  export default App;