import React from 'react'
import classes from './Footer.module.css'
import NavigationMenu from './../common/NavigationMenu/NavigationMenu'
import PhoneNumber from './../common/PhoneNumber/PhoneNumber'
import CallBackBtn from './../common/CallBackBtn/CallBackBtn'
import logoLight from './../../img/logoLight.svg'
import BackToTop from './BackToTop/BackToTop'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {
  return (
    <div className={classes.footerWrapper}>
      <NavLink to={'/'}>
        <img 
          src={logoLight}  
          alt='logo'
          className={classes.logo}
        />
      </NavLink>

      <div className={classes.navigationMenu} >
        <NavigationMenu textStyle='light'/>
      </div>

      <div className={classes.backToTop} >
        <BackToTop />
      </div>

      <div className={classes.phoneNumber} >
        <PhoneNumber textStyle='light'/>
      </div>

      <div className={classes.callBack}>
        <CallBackBtn 
          textStyle='light' 
          type='button'
          funcForClick={props.toggleCallBackPopUp}
          /> 
      </div>
    </div>
  )
}

export default Footer