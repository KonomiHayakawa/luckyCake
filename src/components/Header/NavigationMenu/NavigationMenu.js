import React from 'react'
import classes from './NavigationMenu.module.css'
import {NavLink} from 'react-router-dom'

const NavigationMenu = (props) => {
  const menuItems = [
    {title: 'Торты', link: '/cakes', id: 1},
    {title: 'Капкейки', link: '/cupcakes', id: 2},
    {title: 'Печенье', link: '/biscuits', id: 3},
    {title: 'Пироги', link: '/pies', id: 4},
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

export default NavigationMenu