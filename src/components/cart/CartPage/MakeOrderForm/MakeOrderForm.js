import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import classes from './MakeOrderForm.module.css'

const MakeOrderForm = (props) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Не пропускай это поле!')
      .min(3, 'Минимум 3 символа'),
    address: Yup.string()
      .required('Не пропускай это поле!'),
    phoneNumber: Yup.string()
      .required('Не пропускай это поле!')
      .matches(/^\d+$/, 'Допускаются только цифры!')
      .min(10, 'Номер состоит из 10 символов!'),
  })
  
  const initialValues = {
    name: '',
    address: '',
    phoneNumber: '',
  }
  
  const onSubmit = (deliveryData) => {
    props.makeOrder(deliveryData)
  }
  return (
    <div className={classes.wrapper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {({ errors, touched}) => (
          <Form className={classes.form}>
            <Field 
              name='name'
              type='text' 
              placeholder='Имя'
              className={classes.formInput}
            />
            <div className={classes.errorMessage}>
              <ErrorMessage name='name' />
            </div>

            <Field 
              name='address'
              type='text' 
              placeholder='Адрес'
              className={classes.formInput}
            />
            <div className={classes.errorMessage}>
              <ErrorMessage name='address' />
            </div>

            <Field 
              name='phoneNumber'
              type='tel' 
              placeholder='Телефон'
              maxLength='10'
              className={classes.formInput}
            />
            <div className={classes.errorMessage}>
              <ErrorMessage name='phoneNumber' />
            </div>

            <button 
              className={classes.makeOrderBtn}
              type='submit'
            >
              Оформить заказ
            </button>
          </Form>
        )}  
      </Formik>
    </div>
  )
}

export default MakeOrderForm