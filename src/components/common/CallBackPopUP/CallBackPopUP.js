import React from 'react'
import CallBackForm from './CallBackForm/CallBackForm'
import classes from './CallBackPopUP.module.css'
import PopUpDecoration from './PopUpDecoration/PopUpDecoration'

const CallBackPopUP = (props) => {
  return (
    <div className={classes.wrapper}>
      <h2>
        Заполните форму и мы Вам перезвоним
      </h2>
      <CallBackForm/>
      <ClosePopUpIcon toggleCallBackPopUp={props.toggleCallBackPopUp}/>
      <PopUpDecoration />
    </div>
  )
}

const ClosePopUpIcon = (props) => {
  return (
    <div 
      className={classes.closePopUpIcon}
      onClick={() => props.toggleCallBackPopUp()}
    >
      X
    </div>
  )
}

export default CallBackPopUP
