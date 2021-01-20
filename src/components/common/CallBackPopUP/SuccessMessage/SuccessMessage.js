import React from 'react'
import classes from './SuccessMessage.module.css'
import successImg from './../../../../img/common/successImg.png'

const SuccessMessage = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.message}>
        <div>Спасибо!</div>
        <div>Скоро перезвоним :)</div>
      </h2>
      <img src={successImg} className={classes.successImg}/>
    </div>
  )
}

export default SuccessMessage