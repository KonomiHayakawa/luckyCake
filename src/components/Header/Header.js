import React from 'react'
import logo from './../../img/logo.svg'
import NavigationMenu from './../common/NavigationMenu/NavigationMenu'
import classes from './Header.module.css'
import PhoneNumber from './../common/PhoneNumber/PhoneNumber'
import CallBackBtn from './../common/CallBackBtn/CallBackBtn'
import CartArea from './CartArea/CartArea'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
  return (
    <div className={classes.headerWrapper}>
      <NavLink to={'/'}>
        <img 
          src={logo}  
          alt='logo'
          className={classes.logo}
        />
      </NavLink>
  
      <div className={classes.navigationMenu} >
        <NavigationMenu textStyle='dark' />
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
        <CartArea />
      </div>
    </div>
  )
}

export default Header