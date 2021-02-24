import React from 'react'
import classes from './SuccessMessage.module.css'
import ClosePopUpIcon from '../ClosePopUpIcon'
import successImg from './../../../../img/common/successImg.png'

const SuccessMessage = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2 className={classes.message}>
        <div>
          Спасибо!
        </div>
        <div>
          Скоро перезвоним :)
        </div>
      </h2>
      <img 
        alt='request sended'
        className={classes.successImg}
        src={successImg} 
      />
      <ClosePopUpIcon closePopUp={props.closePopUp}/>
    </div>
  )
}

export default SuccessMessage