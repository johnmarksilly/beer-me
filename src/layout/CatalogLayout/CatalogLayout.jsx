import React, { useEffect, useState } from 'react'
import classes from './CatalogLayout.module.css'

import CatalogItem from '../../components/CatalogItem/CatalogItem'
import { getBeers } from '../../services/PunkAPI'

export default function CatalogLayout() {
  const [items, setItems] = useState([])
  const [init, setInit] = useState(false)
  
  useEffect(() => {
    if (!init) {
      getBeers().then(beers => {
        setItems(beers)
        setInit(true)
      })
    }
  }, [init])

  return (
    <div className={classes.container}>
      { items.map(i => (
        <CatalogItem 
          key={i.id} 
          id={i.id}
          name={i.name} 
          tagline={i.tagline}
          description={i.description}
          abv={i.abv} 
          ibu={i.ibu} 
          imageSrc={i.image_url} />
      ))}
    </div>
  )
}