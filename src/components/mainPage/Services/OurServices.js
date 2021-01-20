import React from 'react'
import classes from './OurServices.module.css'
import serviceCakes from './../../../img/mainPage/services/service-cakes.png'
import serviceFillings from './../../../img/mainPage/services/service-fillings.png'
import serviceDecoration from './../../../img/mainPage/services/service-decoration.png'
import serviceDelivery from './../../../img/mainPage/services/service-delivery.png'
import ServiceItem from './ServiceItem/ServiceItem'

const OurServices = (props) => {
  const services = [
    { serviceTitle: 'Огромный каталог тортов', 
      imgSrc: serviceCakes, 
      description: 'Вы можете выбрать любой торт из огромного каталога на нашем веб-сайте', 
      actionText: 'Посмотреть каталог', 
      link: '/cakes',
      id: 1
    },
    { serviceTitle: 'Начинка на ваш вкус', 
      imgSrc: serviceFillings, 
      description: 'Выберите на свой вкус одну или несколько начинок из нашего каталога', 
      actionText: 'Посмотреть каталог', 
      link: '/fillings',
      id: 2
    },
    { serviceTitle: 'Уникальный декор', 
      imgSrc: serviceDecoration, 
      description: 'Мы учтём ваши пожелания, чтобы создать уникальный декор специально для вас', 
      actionText: 'Подробнее', 
      link: '/aboutDecoration',
      id: 3
    },
    { serviceTitle: 'Доставка по Киеву бесплатно', 
      imgSrc: serviceDelivery, 
      description: 'При заказе от 3 кг любого торта, доставка по Киеву  - наш подарок для вас', 
      actionText: 'Подробнее', 
      link: '/aboutDelivery',
      id: 4
    },
  ]

  return (
    <>
      <h2>
        Каталог услуг
      </h2>
      <div className={classes.ourServicesWrapper}>
        {services.map(service => {
          return (
            <ServiceItem
              serviceTitle={service.serviceTitle}
              imgSrc={service.imgSrc} 
              description={service.description}
              actionText={service.actionText}
              link={service.link}
              key={service.id} 
            />
          )
        })}
      </div>
    </>
  )
}

export default OurServices