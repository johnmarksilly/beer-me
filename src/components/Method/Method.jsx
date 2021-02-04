import React from 'react'
import classes from './Method.module.css'
import TemperatureCard from '../TemperatureCard/TemperatureCard'

export default function Method({method}) {
  const { fermentation, mash_temp } = method
  const mash = mash_temp[0]

  return (
    <div className={classes.container}>
      <TemperatureCard 
        title='Mash Temperature'
        temperature={mash}
        className={classes.temperature} />
      <TemperatureCard
        title='Fermentation Temperature'
        temperature={fermentation}
        className={classes.temperature} />
    </div>
  )
}