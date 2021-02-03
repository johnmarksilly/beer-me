import React from 'react'
import classes from './Chip.module.css'

export default function Chip({ title, content }) {
  return (
    <div className={classes.container}>
      <span className={classes.title}>{title}: </span>
      <span>{content}</span>
    </div>
  )
}