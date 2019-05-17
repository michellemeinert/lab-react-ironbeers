import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header'

function NewBeer() {
  return (
    <div>
    <Header />
    <Link to={'/new-beer'}>Add new BEER!!</Link>
    </div>
  )
}

export default NewBeer
