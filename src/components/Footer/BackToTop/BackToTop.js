import React from 'react'
import classes from './BackToTop.module.css'
import {ReactComponent as GoToTopImg} from './../../../img/footer/goToTopImg.svg'

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
      <GoToTopImg/>
    </div>
  )
}

export default BackToTop