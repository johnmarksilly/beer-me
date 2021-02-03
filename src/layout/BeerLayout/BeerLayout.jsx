import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chip from '../../components/Chip/Chip'
import InfoCard from '../../components/InfoCard/InfoCard'
import Ingredients from '../../components/Ingredients/Ingredients'
import Method from '../../components/Method/Method'

import classes from './BeerLayout.module.css'

export default function BeerLayout() {
  const [beer, setBeer] = useState(undefined)
  const { id } = useParams()
  
  useEffect(() => {
    getItem(id).then(beer => {
      setBeer(beer[0])
    })
  }, [id])
  
  async function getItem(id) {
    const response = await axios.get('https://api.punkapi.com/v2/beers/' + id)
    return response.data
  }
  
  return (
    <div className={classes.container}>
      { beer && (
        <React.Fragment>
          <div className={classes.header}>
            <img src={beer.image_url} alt='beer logo' style={{maxHeight: '20rem'}} />
            <div className={classes.infoContainer}>
              <h1>{beer.name}</h1>
              <h3>{beer.tagline}</h3>
              <p>{beer.description}</p>
              <h5 className={classes.contributor}>by {beer.contributed_by}</h5>
              <div>
                <div className={classes.chips}>
                  <Chip title='ABV' content={beer.abv} />
                  <Chip title='IBU' content={beer.ibu} />
                </div>
                <h4>Batch Sizing</h4>
                <div className={classes.chips}>
                  <Chip title='Volume' content={`${beer.volume.value} ${beer.volume.unit}`} />
                  <Chip title='Boil Volume' content={`${beer.boil_volume.value} ${beer.boil_volume.unit}`} />
                </div>
              </div>

              <div className={classes.pairings}>
                <h4>Food Pairings</h4>
                { beer.food_pairing.map(p => (
                  <p key={p}>{p}</p>
                )) }
              </div>
            </div>
          </div>
          <Method method={beer.method} />
          <InfoCard>{beer.brewers_tips}</InfoCard>
          <Ingredients malt={beer.ingredients.malt} hops={beer.ingredients.hops} yeast={beer.ingredients.yeast} />
        </React.Fragment>
      )}
    </div>
  )
}