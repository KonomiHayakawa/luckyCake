import React from 'react'
import DiscountLabel from '../DiscountLabel/DiscountLabel'
import classes from './DiscountItem.module.css'
import {NavLink} from 'react-router-dom'

const DiscountItem = (props) => {

  const classForDiscountLabel = props.isFirstItem ? classes.firstDiscountLabel : classes.secondDiscountLabel

  return (
    <NavLink to={props.link} className={classes.discountItemWrapper}>
      <img
        src={props.imgSrc}
        alt='discountImage'
        className={classes.discountImage}
      />
      <div className={classes.infoBlock}>
        <h3>
          {props.title}
        </h3>
        <p className={classes.description}>
          {props.description}
        </p>
      </div>
      <div className={classForDiscountLabel}>
        <DiscountLabel/>
      </div>
    </NavLink>
  )
}

export default DiscountItem