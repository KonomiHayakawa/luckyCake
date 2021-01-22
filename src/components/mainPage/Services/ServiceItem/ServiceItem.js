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
        src={props.imgSrc}
        alt='serviceImage'
        className={classes.image}
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