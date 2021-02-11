import React from 'react'
import classes from './ErrorPage.module.css'
import error from './../../img/error/error.svg'

const ErrorPage = (props) => {
  return (
    <>
      <div className={classes.wrapper}>
        <img 
          alt='an error has occurred'
          className={classes.errorImage}
          src={error}
        />
        <div className={classes.errorMessage}>
          {props.errorMessage}
        </div>
      </div>
    </>
  )
}

export default ErrorPage