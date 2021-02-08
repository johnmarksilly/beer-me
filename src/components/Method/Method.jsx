import React from 'react'
import classes from './Method.module.css'
import TemperatureCard from '../TemperatureCard/TemperatureCard'

export default function Method({fermentation, mash}) {
  return (
    <div className={classes.container}>
      { mash && <TemperatureCard 
        title='Mash Temperature'
        temperature={mash}
        className={classes.temperature} /> }
      { fermentation && <TemperatureCard
        title='Fermentation Temperature'
        temperature={fermentation}
        className={classes.temperature} /> }
    </div>
  )
}