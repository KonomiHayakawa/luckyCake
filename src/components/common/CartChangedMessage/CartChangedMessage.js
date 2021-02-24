import React from 'react'
import classes from './CartChangedMessage.module.css'

const CartChangedMessage = (props) => {
  const action = props.lastCartChange[0] === 'removeItem' ? 'товар удален': 'товар добавлен'
  return (
    <div className={classes.wrapper}>
      {props.lastCartChange[1].title} - {action}
    </div>
  )
}

export default CartChangedMessage
