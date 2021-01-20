import React from 'react'
import CallBackForm from './CallBackForm/CallBackForm'
import classes from './CallBackPopUP.module.css'
import PopUpDecoration from './PopUpDecoration/PopUpDecoration'
import SuccessMessage from './SuccessMessage/SuccessMessage'

const CallBackPopUP = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.successMessage ? (
        <SuccessMessage />
      ) : (
        <>
        <h2>
          Заполните форму и мы Вам перезвоним
        </h2>
        <CallBackForm sendFormData={props.sendFormData}/>
        <ClosePopUpIcon toggleCallBackPopUp={props.toggleCallBackPopUp}/>
        <PopUpDecoration />
        </>
      )}
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
