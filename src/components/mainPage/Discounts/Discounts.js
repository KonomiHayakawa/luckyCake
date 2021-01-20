import React from 'react'
import discountImg1 from './../../../img/mainPage/discounts/discountImg1.jpeg'
import discountImg2 from './../../../img/mainPage/discounts/discountImg2.png'
import DiscountItem from './DiscountItem/DiscountItem'
import classes from './Discounts.module.css'

const Discounts = (props) => {
  const discounts = [
    { title: 'Специально к Новому году!', 
      description: 'С 23.12 по 05.01 скидка 30% на новогодние капкейки ', 
      imgSrc: discountImg1, 
      link: '/cakes',
      id: 1
    },
    { title: 'Только на праздники!', 
      description: 'С 23.12 по 05.01 скидка 25% на рождественские и новогодние торты', 
      imgSrc: discountImg2, 
      link: '/cupcakes',
      id: 2
    },
  ]

  return (
    <div className={classes.discountsWrapper}>
      {discounts.map(discount => {
        const isFirstItem = discount.id === 1
        return (
          <DiscountItem 
            imgSrc={discount.imgSrc}
            title={discount.title}
            description={discount.description}
            link={discount.link}
            key={discount.id}
            isFirstItem={isFirstItem}
          />
        )
      })}
    </div>
  )
}

export default Discounts