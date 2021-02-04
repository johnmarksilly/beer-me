import React from 'react'
import Chip from '../Chip/Chip'
import classes from './Chips.module.css'

export default function Chips({ items, }) {
  return (
    <div className={classes.container}>
      {items.map(item => (
        <Chip 
        key={`${item.title}-${item.content}`}
        title={item.title}
        content={item.content} />
      ))}
    </div>
  )
}