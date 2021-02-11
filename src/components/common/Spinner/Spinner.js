import React from 'react'
import classes from './Spinner.module.css'
import spinner from './../../../img/common/spinner.svg'

const Spinner = () => {
  return (
    <div className={classes.spinner}>
      <img
        alt='spinner'
        src={spinner}
      />
    </div>
  )
}

export default Spinner