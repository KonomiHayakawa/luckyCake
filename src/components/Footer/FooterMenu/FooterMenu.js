import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './FooterMenu.module.css'

const FooterMenu = (props) => {
  const menuItems = [
    {title: 'Декор', link: '/aboutDecoration', id: 1},
    {title: 'Доставка', link: '/aboutDelivery', id: 2},
  ]

  return (
    <ul className={classes.menu}>
      {menuItems.map(item => {
        return (
          <li key={item.id} >
            <NavLink 
              to={item.link} 
              className={classes.menuItem}
            >
              {item.title}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default FooterMenu