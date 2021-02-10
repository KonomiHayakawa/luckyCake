import React from 'react'
import classes from './ServiceItem.module.css'
import {NavLink} from 'react-router-dom'

const ServiceItem = (props) => {
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.serviceTitle}>
        {props.serviceTitle}
      </div>
      <img 
        alt='serviceImage'
        className={classes.image}
        src={props.imgSrc}
      />
      <div className={classes.description}>
        {props.description}
      </div>
      <NavLink to={props.link} className={classes.actionBtn}>
        {props.actionText}
      </NavLink>
    </div>
  )
}

export default ServiceItem