import React from 'react'
import MainPageDecoration from './MainPageDecoration/MainPageDecoration'
import ProductsListDecoration from './ProductsListDecoration/ProductsListDecoration'
import { useLocation } from "react-router-dom"

const DecorationContainer = (props) => {
  const { pathname } = useLocation()

  const productCategories = pathname === '/cakes' || '/cupcakes' || '/biscuits' || '/pies'
  
  return (
    <>
      {pathname === '/' && <MainPageDecoration/>}
      {productCategories && <ProductsListDecoration />}
    </>
  )
}

export default DecorationContainer