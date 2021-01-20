import React from 'react'
import classes from './ProductsListDecoration.module.css'

const ProductsListDecoration = () => {
  return (
    <>
      <svg className={classes.circle1} width="384" height="422" viewBox="0 0 474 502" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="152.744" cy="180.492" r="320.611" fill="#DBA7B3"/>
      </svg>
      <svg className={classes.circle1Additional} width="338" height="376" viewBox="0 0 408 436" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="153.368" cy="180.492" r="254.526" fill="#FBF2F2"/>
      </svg>

      <svg className={classes.circle2} width="235" height="239" viewBox="0 0 275 279" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="167.621" cy="111.681" r="167.246" fill="#DBA7B3"/>
      </svg>
    </>
  )
}

export default ProductsListDecoration