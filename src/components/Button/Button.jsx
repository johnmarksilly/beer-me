import React from 'react'
import classes from './Button.module.css'

export default function Button({ onClick, color, style, children }) {

  function handleClick() {
    onClick && onClick()
  }

  return (
    <button onClick={handleClick} className={[classes.container, classes[color]].join(' ')} style={style}>
      {children}
    </button>
  )
}