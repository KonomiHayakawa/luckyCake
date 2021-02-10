import React from 'react'
import classes from './AboutDelivery.module.css'
import cakeSliceForLists from './../../../img/common/cakeSliceForLists.png'

const AboutDelivery = (props) => {
  const deliveryPoints = [
    {
      id: 1,
      info: 'Беслатная доставка по Киеву при заказе от 1000 грн'
    },
    {
      id: 2,
      info: 'Доступен самовывоз по предварительной договоренности'
    },
    {
      id: 3,
      info: 'Оплата только наличными при получении'
    },
    {
      id: 4,
      info: 'Возможны регулярные поставки для кафе и ресторанов на интивидуальных условиях'
    },
  ]
  return (
    <div className={classes.wrapper}>
      {deliveryPoints.map(item => {
        return (
          <div className={classes.itemWrapper} key={item.id}>
            <img
              alt='listItem'
              className={classes.listItemImg}
              src={cakeSliceForLists}
            />
            <div>
              {item.info}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default AboutDelivery