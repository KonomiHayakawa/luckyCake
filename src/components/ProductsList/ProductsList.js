import React from 'react'
import classes from './ProductsList.module.css'
import cake1 from './../../img/goods/cakes/cake1.png'
import cake2 from './../../img//goods/cakes/cake2.png'
import cake3 from './../../img/goods/cakes/cake3.png'
import cake4 from './../../img/goods/cakes/cake4.png'
import cake5 from './../../img/goods/cakes/cake5.png'
import cake6 from './../../img/goods/cakes/cake6.png'
import cake7 from './../../img/goods/cakes/cake7.png'
import cake8 from './../../img/goods/cakes/cake8.png'
import ProductItem from './../common/ProductItem/ProductItem'

const ProductsList = () => {
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
    },
    { title: 'Торт “Сникерс”', 
      imgSrc: cake5,
      description: 'Знакомый с детства вкус на основе кунжутного бисквита, крем из  молочного шоколада, с добавлением орехов и кунжута в карамели',
      price: '1425 грн',
      weight: '3.5 кг',
      id: 5,
    },
    { title: 'Торт “Шоко-банан”', 
      imgSrc: cake6,
      description: 'Торт с насыщеным вкусом на шоколадном бисквите с начинкой из орехов, бананов в карамели, и молочного шоколада',
      price: '1550 грн',
      weight: '4 кг',
      id: 6,
    },
    { title: 'Торт “Бригадейро”', 
      imgSrc: cake7,
      description: 'Приятный вкус шоколадного бисквита с коньячной пропиткой в сочетании с шоколадным кремом на згущёном молоке',
      price: '1300 грн',
      weight: '3 кг',
      id: 7,
    },
    { title: 'Торт “Моркова-апельсин”', 
      imgSrc: cake8,
      description: 'Пьянящий торт на фундуковом бисквите, пропитаном бейлисом, начинка состоит из взбитого ганаша, хрустящей прослойки и крем-чиза',
      price: '1470 грн',
      weight: '4 кг',
      id: 8,
    },
  ]
  return (
    <>
      <div className={classes.wrapper}>
        <h2>
          Торты
        </h2>
        <div className={classes.productsList}>
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
    </>
  )
}

export default ProductsList