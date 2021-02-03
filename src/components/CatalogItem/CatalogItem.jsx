import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'
import Card from '../Card/Card'
import CardActions from '../Card/CardActions/CardActions'
import Chip from '../Chip/Chip'
import classes from './CatalogItem.module.css'

export default function CatalogItem({id, name, description, tagline, abv, ibu, imageSrc}) {
  const history = useHistory()
  
  function handleClick() {
    history.push('/beer/' + id)
  }
  
  return (
    <Card className={classes.container}>
      <img alt='beer brand' src={imageSrc} />
      <div className={classes.info}>
        <h1>{name}</h1>
        <h3>{tagline}</h3>
        <div className={classes.description}>
          <span>{description}</span>
          <div className={classes.bottom}>
          </div>
        </div>
        <div className={classes.chips}>
          <Chip title="ABV" content={abv} />
          <Chip title="IBU" content={ibu || 'N/A'} />
        </div>
        <CardActions>
          <Button color='primary' onClick={handleClick} style={{width: '100%'}}>View</Button>
        </CardActions>
      </div>
    </Card>
  )
}