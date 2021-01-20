import React from 'react'
import classes from './InformationCard.module.css'

const InformationCard = (props) => {
  const info = {
      title: 'Доставка',
      information: '',
      id: 1,
    }

  return (
    <>
      <h2>
        {info.title}
      </h2>
    </>
  )
}

export default InformationCard