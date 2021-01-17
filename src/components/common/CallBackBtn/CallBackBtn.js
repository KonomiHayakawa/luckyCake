import React from 'react'
import classes from './CallBackBtn.module.css'

const CallBackBtn = (props) => {
  let textStyle 
  switch (props.textStyle) {
    case 'dark': 
      textStyle = classes.darkStyle
      break;
    case 'light': 
      textStyle = classes.lightStyle
      break;
    case 'pink': 
      textStyle = classes.pinkStyle
      break;
    default: textStyle = classes.darkStyle
  } 

  return (
    <button 
      className={`${classes.callBackBtn} ${textStyle}`}
      type={props.type}
      onClick={() => props.funcForClick()}
    >
      Заказать звонок
    </button>
  )
}

export default CallBackBtn
