import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './DiscountItem.module.css'
import DiscountLabel from '../DiscountLabel/DiscountLabel'

const DiscountItem = (props) => {
  const classForDiscountLabel = props.isFirstItem ? classes.firstDiscountLabel : classes.secondDiscountLabel

  return (
    <NavLink to={props.link} className={classes.discountItemWrapper}>
      <img
        alt='discountImage'
        className={classes.discountImage}
        src={props.imgSrc}
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