import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'

function RandomBeer() {
  return (
    <div>
    <Header />
    <Link to={'/random-beer'}>Get random BEER!!</Link>
    </div>
  )
}

export default RandomBeer
