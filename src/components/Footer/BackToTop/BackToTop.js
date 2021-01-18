import React from 'react'
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
      <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.4243 1.59521V39.5952M15.4243 1.59521L1 16.6184M15.4243 1.59521L29 16.6184" stroke="white" strokeWidth="2"/>
      </svg>
    </div>
  )
}

export default BackToTop