import React from 'react'
import classes from './PhoneNumber.module.css'

const PhoneNumber = (props) => {
  const textStyle = props.textStyle === 'dark' ? classes.darkStyle : classes.lightStyle

  return (
    <div className={`${classes.phoneNumberWrapper} ${textStyle}`}>
      +38(044)757-22-324
    </div>
  )
}

export default PhoneNumber