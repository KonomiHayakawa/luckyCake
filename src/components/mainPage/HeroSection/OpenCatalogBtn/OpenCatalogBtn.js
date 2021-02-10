import React from 'react'
import {NavLink} from 'react-router-dom'
import classes from './OpenCatalogBtb.module.css'

const OpenCatalogBtn = (props) => {
  return (
    <NavLink to='/cakes' className={classes.openCatalogLink}>
      <button className={classes.openCatalogBtn}>
        Смотреть каталог
      </button>
    </NavLink>
  )
}

export default OpenCatalogBtn