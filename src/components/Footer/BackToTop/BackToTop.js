import React from 'react'
import arrowToTop from './../../../img/arrowToTop.svg'
import classes from './BackToTop.module.css'

const BackToTop = () => {
  const goToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <div 
      className={classes.backToTopWrapper}
      onClick={() => goToTop()}
    >
      <img
        src={arrowToTop}
        alt='arrowToTop'
      />
    </div>
  )
}

export default BackToTop