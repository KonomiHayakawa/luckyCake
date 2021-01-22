import React from 'react'
import classes from './OpenCatalogBtb.module.css'
import {NavLink} from 'react-router-dom'

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
