import React from 'react'
import classes from './NavigationMenu.module.css'
import {NavLink} from 'react-router-dom'

const NavigationMenu = (props) => {
  const menuItems = [
    {title: 'Торты', link: '/cakes', id: 1},
    {title: 'Начинки', link: '/fillings', id: 2},
    {title: 'Декор', link: '/decoration', id: 3},
    {title: 'Капкейки', link: '/cupcakes', id: 4},
  ]

  const textStyle = props.textStyle === 'dark' ? classes.darkStyle : classes.lightStyle

  return (
    <ul className={classes.menu}>
      {menuItems.map(item => {
        return (
          <li key={item.id} >
            <NavLink to={item.link} className={`${textStyle}`}>
              {item.title}
            </NavLink>
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationMenu
