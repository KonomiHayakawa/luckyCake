import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './NavigationMenu.module.css'

const NavigationMenu = (props) => {
  const menuItems = [
    {title: 'Торты', link: '/cakes', id: 1},
    {title: 'Капкейки', link: '/cupcakes', id: 2},
    {title: 'Печенье', link: '/biscuits', id: 3},
    {title: 'Пироги', link: '/pies', id: 4},
  ]

  const wrapperClass = props.isForMobile ? classes.mobileMenuWrap : classes.menuWrap
  const itemClass = props.isForMobile ? classes.mobileMenuItem : classes.menuItem

  return (
    <ul className={wrapperClass}>
      {menuItems.map(item => {
        return (
          <li key={item.id}>
            <NavLink 
              className={itemClass}
              to={item.link} 
            >
              {item.title}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationMenu
