import React from 'react'
import classes from './CardActions.module.css'

export default function CardActions({children}) {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}