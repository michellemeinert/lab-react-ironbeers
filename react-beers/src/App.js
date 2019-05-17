import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Home from './components/Home'
import Beer from './components/Beer'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'



class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      beers: []
    }

  };
  componentDidMount() {
    axios.get("https://ih-beer-api.herokuapp.com/beers")
    .then(response => {
      
      this.setState({beers: response.data})
    })
  }

  render(){

    return (
      <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={Beer }/>
        <Route exact path="/random-beer" component={RandomBeer}/>
        <Route exact path="/new-beer" component={NewBeer}/>
      </Switch> 
      
    </div>
  );
}
}

export default App;
