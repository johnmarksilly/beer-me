import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from '../Button/Button'
import Card from '../Card/Card'
import CardActions from '../Card/CardActions/CardActions'
import Chips from '../Chips/Chips'
import FadedContent from '../FadedContent/FadedContent'
import TitledContent from '../TitledContent/TitledContent'
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
        <TitledContent title={name} variant='h1'>
          <h3>{tagline}</h3>
        </TitledContent>
        <FadedContent>
          <span>{description}</span>
        </FadedContent>
        <Chips items={[{title:'ABV', content: abv}, {title: 'IBU', content: ibu }]} />
        <CardActions>
          <Button color='primary' onClick={handleClick} style={{width: '100%'}}>View</Button>
        </CardActions>
      </div>
    </Card>
  )
}