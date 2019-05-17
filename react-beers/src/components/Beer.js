import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'

class Beer extends Component{
  render(props){

    return (
      <div>
      <Header />
      <img src={props.beers.image} alt="some-beer-mate"/>
      <h2>{props.beers.name}</h2>
      <h3>{props.beers.tagline}</h3>
      <h1>{props.beers.contributed_by}</h1>
      <Link to={'/beers'}>View all BEERS!!</Link>
    </div>
  )
}
}

export default Beer
