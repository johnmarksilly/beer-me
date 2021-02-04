import React from 'react'
import classes from './TitledList.module.css'

export default function TitledList({ title, items, className }) {
  return (
    <div className={[classes.container, className].join(' ')}>
      <h4>{title}</h4>
      { items.map(i => <p key={i}>{i}</p>)}
    </div>
  )
}