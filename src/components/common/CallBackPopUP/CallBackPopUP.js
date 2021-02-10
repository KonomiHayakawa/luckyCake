import React from 'react'
import CallBackForm from './CallBackForm/CallBackForm'
import classes from './CallBackPopUp.module.css'
import ClosePopUpIcon from './ClosePopUpIcon'
import PopUpDecoration from './PopUpDecoration/PopUpDecoration'
import SuccessMessage from './SuccessMessage/SuccessMessage'

const CallBackPopUP = (props) => {
  return (
    <div className={classes.wrapper}>
      {props.successMessage ? (
        <SuccessMessage closePopUp={props.toggleCallBackPopUp}/>
      ) : (
        <>
        <h2>
          Заполните форму и мы Вам перезвоним
        </h2>
        <CallBackForm sendFormData={props.sendFormData}/>
        <ClosePopUpIcon closePopUp={props.toggleCallBackPopUp}/>
        <PopUpDecoration />
        </>
      )}
    </div>
  )
}

export default CallBackPopUP