import React from 'react'
import Chip from '../Chip/Chip'
import classes from './Ingredients.module.css'
import { IoMdBeaker } from 'react-icons/io'
import { GiWheat } from 'react-icons/gi'

export default function Ingredients({malt, hops, yeast}) {

  const filteredHops = hops.reduce((cur, next) => {
    if (cur[next.add]) {
      cur[next.add].push(next)
    } else {
      cur[next.add] = [next]
    }
    return cur
  }, {})
  
  return (
    <div className={classes.container}>
      <section>
        <h3>Malt</h3>
        {malt.map(h => (
          <div key={h.name} className={classes.ingredient}>
            <IoMdBeaker size={30} />
            <div className={classes.information}>
              <h4>{h.name}</h4>
              <span>{`${h.amount.value} ${h.amount.unit}`}</span>
            </div>
          </div>
        ))}
      </section>
      <section>
        <h3>Hops</h3>
        {Object.keys(filteredHops).map(key => (
          <div key={key} className={classes.hops}>
            <h4>{key.replace(/^\w/, c => c.toUpperCase())}</h4>
            { filteredHops[key].map(h => (
              <div key={`${h.name}-${h.amount.value}-${h.attribute}`} className={classes.ingredient}>
                <GiWheat size={30} />
                <div className={classes.information}>
                  <h4>{h.name}</h4>
                  <span>{h.amount.value} {h.amount.unit}</span>
                  <div className={classes.chips}>
                    <Chip title="Purpose" content={h.attribute}></Chip>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </section>
      <section>
        <h3>Yeast</h3>
        <p>{yeast}</p>
      </section>
    </div>
  )
}