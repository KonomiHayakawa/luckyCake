import React from 'react'
import { NavLink } from 'react-router-dom'
import CallBackBtn from './../common/CallBackBtn/CallBackBtn'
import CartInfoAreaContainer from '../cart/CartInfoArea/CartInfoAreaContainer'
import classes from './Header.module.css'
import logo from './../../img/header/logo.svg'
import NavigationMenu from './NavigationMenu/NavigationMenu'
import PhoneNumber from './../common/PhoneNumber/PhoneNumber'

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
      </div>
    </header>
  )
}

export default Header