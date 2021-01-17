import React from 'react'
import classes from './Infographic.module.css'

const Infographic = (props) => {
  const infographicData = [
    {title: 'вариаций начинок', value: 47, id: 1},
    {title: 'способов декора', value: 120, id: 2},
    {title: 'точки по Украине', value: 4, id: 3},
    {title: 'постоянных клиента', value: 83, id: 4},
  ]

  return (
    <>
      <h2>
        О нашем магазине в цифрах
      </h2>

      <div className={classes.infographicContent}>
        {infographicData.map(infoItem => {
          return (
            <div key={infoItem.id} className={classes.infoItem}>
              <span className={classes.infoValue}>
                {infoItem.value}
              </span>
              <span className={classes.infoTitle}>
                {infoItem.title}
              </span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Infographic