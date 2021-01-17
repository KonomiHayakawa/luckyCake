import React from 'react'
import classes from './ServiceItem.module.css'

const ServiceItem = (props) => {
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.serviceTitle}>
        {props.serviceTitle}
      </div>
      <img 
        src={props.imgSrc}
        alt='serviceImage'
      />
      <div className={classes.description}>
        {props.description}
      </div>
      <div className={classes.actionBtn}>
        {props.actionText}
      </div>
    </div>
  )
}

export default ServiceItem