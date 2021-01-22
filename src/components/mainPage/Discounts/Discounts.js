import React from 'react'
import DiscountItem from './DiscountItem/DiscountItem'
import classes from './Discounts.module.css'

const Discounts = (props) => {
  return (
    <div className={classes.discountsWrapper}>
      {Object.keys(props.discountsData).map(discountTitle => {
        const discount = props.discountsData
        const isFirstItem = discount[discountTitle].id == 1
        return (
          <DiscountItem 
            imgSrc={discount[discountTitle].imgSrc}
            title={discount[discountTitle].title}
            description={discount[discountTitle].description}
            link={discount[discountTitle].link}
            key={discount[discountTitle].id}
            isFirstItem={isFirstItem}
          />
        )
      })}
    </div>
  )
}

export default Discounts