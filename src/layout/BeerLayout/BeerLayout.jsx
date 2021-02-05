import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Chips from '../../components/Chips/Chips'
import InfoCard from '../../components/InfoCard/InfoCard'
import Ingredients from '../../components/Ingredients/Ingredients'
import Method from '../../components/Method/Method'
import TitledList from '../../components/TitledList/TitledList'
import { getBeerById } from '../../services/PunkAPI'

import classes from './BeerLayout.module.css'

export default function BeerLayout() {
  const [beer, setBeer] = useState(undefined)
  const { id } = useParams()
  const [infoChips, setInfoChips] = useState([])
  const [batchChips, setBatchChips] = useState([])

  useEffect(() => {
    getBeerById(id).then(beer => {
      setBeer(beer)

      // Refactor into Chip helper method for brevity
      setInfoChips([
        { title: 'ABV', content: beer.abv },
        { title: 'IBU', content: beer.ibu }
      ])
      setBatchChips([
        { title: 'Volume', content: `${beer.volume.value} ${beer.volume.unit}`},
        { title: 'Boil Volume', content: `${beer.volume.value} ${beer.volume.unit}`}
      ])
    })
  }, [id])
  
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
                <Chips items={infoChips} />
                <h4>Batch Sizing</h4>
                <Chips items={batchChips} />
              </div>
              <TitledList
                title='Food Pairings'
                items={beer.food_pairing} />
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