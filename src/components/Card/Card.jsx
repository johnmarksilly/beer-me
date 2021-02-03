import React from 'react'
import classes from './Card.module.css'

export default function Card({ elevation, className, children }) {
  const shadow = {
    boxShadow: `0 2px ${elevation * 4}px 1px rgba(0, 0, 0, 0.4)`
  }
  return (
    <div style={shadow} className={[className, classes.container].join(' ')}>
      {children}
    </div>
  )
}