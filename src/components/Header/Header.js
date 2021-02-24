import React from 'react'
import { NavLink } from 'react-router-dom'
import CallBackBtn from './../common/CallBackBtn/CallBackBtn'
import CartInfoAreaContainer from '../cart/CartInfoArea/CartInfoAreaContainer'
import classes from './Header.module.css'
import logo from './../../img/header/logo.svg'
import NavigationMenu from './NavigationMenu/NavigationMenu'
import PhoneNumber from './../common/PhoneNumber/PhoneNumber'
import menuMobile from './../../img/header/menuMobile.png'

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div className={classes.headerWrapper}>
        <NavLink to={'/'}>
          <img 
            src={logo}  
            alt='logo'
            className={classes.logo}
          />
        </NavLink>
    
        <div className={classes.navigationMenu} >
          <NavigationMenu />
        </div>

        <div className={classes.phoneNumber} >
          <PhoneNumber textStyle='dark'/>
        </div>

        <div className={classes.callBack}>
          <CallBackBtn 
            textStyle='pinkTransparent' 
            type='button'
            funcForClick={() => props.toggleCallBackPopUp()} 
          /> 
        </div>
      
        <div className={classes.cart}>
          <CartInfoAreaContainer/>
        </div>

        <MobileMenu {...props} />
      </div>
    </header>
  )
}

const MobileMenu = (props) => {
  return (
    <div className={classes.menuMobile}>
      <img
        alt='openMenu'
        onClick={() => props.setIsMobileMenuOpen(!props.isMobileMenuOpen)}
        src={menuMobile}
      />
      {props.isMobileMenuOpen && 
        <NavigationMenu isForMobile={true}/>
      }
    </div>
  )
}

export default Header