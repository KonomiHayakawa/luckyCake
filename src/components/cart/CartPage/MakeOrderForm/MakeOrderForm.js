import React from 'react'
import * as Yup from 'yup'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import classes from './MakeOrderForm.module.css'
import MaskedInput from 'react-text-mask'

const MakeOrderForm = (props) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Не пропускай это поле!')
      .min(3, 'Минимум 3 символа'),
    phoneNumber: Yup.string()
      .required('Не пропускай это поле!'),
    deliveryType: Yup.string()
      .required('Не пропускай это поле!'),
    address: Yup.string().when(['deliveryType'], {
      is: 'delivery',
      then: Yup.string().required('Не пропускай это поле!'),
    })
  })
  
  const initialValues = {
    name: '',
    phoneNumber: '',
    deliveryType: '',
    address: '',
  }

  const phoneNumberMask = [
    "(",
    /[0-9]/,
    /\d/,
    /\d/,
    ")",
    " ",
    /\d/,
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/,
    "-",
    /\d/,
    /\d/
  ]
  
  const onSubmit = (deliveryData) => {
    props.makeOrder(deliveryData)
  }

  return (
    <div className={classes.wrapper}>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
        {({ errors, touched, values}) => (
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
              name='phoneNumber'
              render={({ field }) => (
                <MaskedInput
                  {...field}
                  mask={phoneNumberMask}
                  id='phoneNumber'
                  placeholder='Номер телефона'
                  type='text'
                  className={classes.formInput}
                />
              )}
            />
            <div className={classes.errorMessage}>
              <ErrorMessage name='phoneNumber' />
            </div>

            <Field 
              name='deliveryType'
              as='select'
              className={`${classes.formInput} ${classes.deliverySelect}`}
            >
              <option value='' disabled defaultValue>Способ доставки</option>
              <option value='delivery'>Адресная доставка</option>
              <option value='takeAway'>Самовывоз</option>
            </Field>
            <div className={classes.errorMessage}>
              <ErrorMessage name='phoneNumber' />
            </div>

            {values.deliveryType === 'delivery' 
              && <>
                <Field 
                  name='address'
                  type='text' 
                  placeholder='Адрес'
                  className={classes.formInput}
                />
                <div className={classes.errorMessage}>
                  <ErrorMessage name='address' />
                </div>
              </>
            }

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