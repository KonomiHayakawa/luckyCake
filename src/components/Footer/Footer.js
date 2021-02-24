import React from 'react'
import { NavLink } from 'react-router-dom'
import BackToTop from './BackToTop/BackToTop'
import CallBackBtn from './../common/CallBackBtn/CallBackBtn'
import classes from './Footer.module.css'
import logoLight from './../../img/footer/logoLight.svg'
import PhoneNumber from './../common/PhoneNumber/PhoneNumber'
import FooterMenu from './FooterMenu/FooterMenu'

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerWrapper}>
        <NavLink to={'/'} className={classes.navLink}>
          <img 
            src={logoLight}  
            alt='logo'
            className={classes.logo}
          />
        </NavLink>

        <div className={classes.footerMenu} >
          <FooterMenu />
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
    </footer>
  )
}

export default Footer