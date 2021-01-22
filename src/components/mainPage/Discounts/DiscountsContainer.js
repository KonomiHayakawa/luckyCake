import React, { useEffect, useState } from 'react'
import Discounts from './Discounts'
import {getDiscounts} from './../../../queries'

const DiscountsContainer = (props) => {
  const [discountsData, setDiscountsData] = useState({})

  useEffect(() => {
    getDiscounts('december2020')
      .then((data) => setDiscountsData(data))
  }, [])
  
  return (
    <Discounts discountsData={discountsData}/>
  )
}

export default DiscountsContainer