import React, { useEffect, useState } from 'react'
import classes from './CatalogLayout.module.css'

import Axios from 'axios'
import CatalogItem from '../../components/CatalogItem/CatalogItem'

export default function CatalogLayout() {
  const [items, setItems] = useState([])
  const [init, setInit] = useState(false)
  
  useEffect(() => {
    if (!init) {
      getItems().then(beers => {
        setItems(beers)
        setInit(true)
      })
    }
  }, [init])
  
  async function getItems() {
    const response = await Axios.get('https://api.punkapi.com/v2/beers')
    return response.data
  }

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