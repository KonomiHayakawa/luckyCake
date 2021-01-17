import React from 'react'
import classes from './NavigationMenu.module.css'

const NavigationMenu = (props) => {
  const menuItems = [
    {title: 'Торты', link: '#', id: 1},
    {title: 'Начинки', link: '#', id: 2},
    {title: 'Декор', link: '#', id: 3},
    {title: 'Капкейки', link: '#', id: 4},
  ]

  const textStyle = props.textStyle === 'dark' ? classes.darkStyle : classes.lightStyle

  return (
    <ul className={`${classes.menu} ${textStyle}`}>
      {menuItems.map(item => {
        return (
          <li key={item.id}>
            {item.title}
          </li>
        )
      })}
    </ul>
  )
}

export default NavigationMenu
