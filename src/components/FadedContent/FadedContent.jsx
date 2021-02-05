import React from 'react'
import classes from './FadedContent.module.css'

export default function FadedContent({children}) {
  return (
    <div className={classes.container}>
      {children}
      <div className={classes.bottom}></div>
    </div>
  )
}