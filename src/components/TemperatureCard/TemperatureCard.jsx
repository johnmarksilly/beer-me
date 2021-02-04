import React from 'react'
import classes from './TemperatureCard.module.css'
import { FaThermometerThreeQuarters } from 'react-icons/fa'
import InfoCard from '../InfoCard/InfoCard'

export default function TemperatureCard({ title, temperature, className }) {
  const { temp } = temperature
  const unitChar = temp.unit[0].toUpperCase()
  let duration
  if (temperature.duration) {
    duration = ` for ${temperature.duration} minutes`
  }
  return (
    <div className={[classes.container, className].join(' ')}>
      <h3>{title}</h3>
      <InfoCard icon={() => <FaThermometerThreeQuarters size={30} />}>
        <span>{temp.value}&#176;{unitChar}{duration}</span>
      </InfoCard>
    </div>
  )
}