import React from 'react'
import InfoCard from '../InfoCard/InfoCard'
import classes from './Method.module.css'
import { FaThermometerThreeQuarters } from 'react-icons/fa'

export default function Method({method}) {
  const { fermentation } = method
  
  return (
    <div className={classes.container}>
      <div className={classes.temperature}>
        <h3>Mash Temperature</h3>
        {method.mash_temp.map(mash => {
          const content = `${mash.temp.value}&#176;${mash.temp.unit[0].toUpperCase()} for ${mash.duration} minutes.`;
          return (
            <InfoCard key={content} icon={() => <FaThermometerThreeQuarters size={30} />}>
              <span>{content}</span>
            </InfoCard>
          )
        })}
      </div>
      <div>
        <h3>Fermentation Temperature</h3>
        <InfoCard icon={() => <FaThermometerThreeQuarters size={30} />}>
          <span>{fermentation.temp.value}&#176;{fermentation.temp.unit[0].toUpperCase()}</span>
        </InfoCard>
      </div>
    </div>
  )
}