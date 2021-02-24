import React from 'react'
import MainPageDecoration from './MainPageDecoration/MainPageDecoration'
import ProductsListDecoration from './ProductsListDecoration/ProductsListDecoration'
import { useLocation } from "react-router-dom"

const DecorationContainer = (props) => {
  const { pathname } = useLocation()
  
  return (
    <>
      {pathname === '/' ? <MainPageDecoration/> : <ProductsListDecoration />}
    </>
  )
}

export default DecorationContainer