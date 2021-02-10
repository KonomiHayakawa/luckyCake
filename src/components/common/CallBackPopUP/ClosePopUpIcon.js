import React from 'react'
import classes from './CallBackPopUp.module.css'

const ClosePopUpIcon = (props) => {
  return (
    <div 
      className={classes.closePopUpIcon}
      onClick={() => props.closePopUp()}
    >
      X
    </div>
  )
}

export default ClosePopUpIcon 