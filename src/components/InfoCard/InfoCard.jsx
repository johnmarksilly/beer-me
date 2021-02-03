import React from 'react'
import Card from '../Card/Card'
import classes from './InfoCard.module.css'
import { AiFillInfoCircle } from 'react-icons/ai'

export default function InfoCard({icon, children}) {
  return (
    <Card className={classes.container}>
      { !icon && <AiFillInfoCircle color="#33c07e" size={30} /> }
      { icon && icon()}
      <div className={classes.textContainer}>
        {children}
      </div>
    </Card>
  )
}