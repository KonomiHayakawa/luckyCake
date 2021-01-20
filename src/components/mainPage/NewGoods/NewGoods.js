import React from 'react'
import classes from './NewGoods.module.css'
import cake1 from './../../../img/mainPage/newGoods/cake1.png'
import cake2 from './../../../img/mainPage/newGoods/cake2.png'
import cake3 from './../../../img/mainPage/newGoods/cake3.png'
import cake4 from './../../../img/mainPage/newGoods/cake4.png'
import ProductItem from '../../common/ProductItem/ProductItem'

const NewGoods = (props) => {
  const goods = [
    { title: 'Торт “Малахит”', 
      imgSrc: cake1,
      description: 'Нежный торт на шпинатном бисквите с начинкой из ягодного компоте, крем-чиза и профитролей с фисташковым кремом',
      price: '1600 грн',
      weight: '4 кг',
      id: 1,
    },
    { title: 'Торт “Мохито”', 
      imgSrc: cake2,
      description: 'Освежающий и легкий торт на основе класического бисквита с мятным слоем лимонным курдом и шоколадным мусом внутри',
      price: '1120 грн',
      weight: '3 кг',
      id: 2,
    },
    { title: 'Торт “Белый сникерс”', 
      imgSrc: cake3,
      description: 'Изысканый торт на кунжутном бисквите, наполнен начинкой из муса на белом шоколаде, крем-чиза, орехов и кунжута в карамели',
      price: '1250 грн',
      weight: '4 кг',
      id: 3,
    },
    { title: 'Торт “Бейлис”', 
      imgSrc: cake4,
      description: 'Пьянящий торт на фундуковом бисквите, пропитаном бейлисом, начинка состоит из взбитого ганаша, хрустящей прослойки и крем-чиза',
      price: '1525 грн',
      weight: '4 кг',
      id: 4,
    }
  ]

  return (
    <div className={classes.wrapper}>
      <h2>
      Наши новинки
      </h2>
      <div className={classes.newGoodsArea}>
       {goods.map(good => {
          return (
            <ProductItem 
              title={good.title}
              imgSrc={good.imgSrc}
              description={good.description}
              price={good.price}
              weight={good.weight}
              key={good.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default NewGoods
