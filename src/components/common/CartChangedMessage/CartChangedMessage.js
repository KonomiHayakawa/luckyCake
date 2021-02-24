import React from 'react'
import classes from './CartChangedMessage.module.css'

const CartChangedMessage = (props) => {
  const action = props.lastCartChange
  return (
    <div className={classes.wrapper}>
      {props.lastCartChange.title} - товар добавлен
    </div>
  )
}

export default CartChangedMessage
