import React from 'react'
import Beer from './Beer'
import RandomBeer from './RandomBeer'
import NewBeer from './NewBeer'

function Home(props) {
  return (
    <div>
      <Beer beers={props.beers}/>
      <RandomBeer />
      <NewBeer />
    </div>
  )
}

export default Home
