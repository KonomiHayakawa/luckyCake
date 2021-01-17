import React from 'react'
import classes from './NewGoodsCategories.module.css'

const NewGoodsCategories = (props) => {
  const categories = [
    {title: 'Все',id: 1},
    {title: 'Детские',id: 2},
    {title: 'На юбилей',id: 3},
    {title: 'Свадебные',id: 4},
    {title: 'Капкейки',id: 5},
  ]
  return (
    <>
      <ul className={classes.goodsCategories}>
        {categories.map(category => {
          return (
            <li key={category.id}>
              {category.title}
            </li>
          )
        })
        }
      </ul>
    </>
  )
}

export default NewGoodsCategories
