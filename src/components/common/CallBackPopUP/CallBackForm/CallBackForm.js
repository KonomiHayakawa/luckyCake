import React from 'react'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'
import classes from './CallBackForm.module.css'
import CallBackBtn from '../../CallBackBtn/CallBackBtn'

const CallBackForm = (props) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('Не пропускай это поле!')
      .min(3, 'Минимум 3 символа'),
    email: Yup.string()
      .required('Не пропускай это поле!')
      .email('Некорректный адрес'),
    phoneNumber: Yup.string()
      .required('Не пропускай это поле!')
  })
  
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
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
  
  const onSubmit = (formData) => {
    props.sendFormData(formData)
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
              name='email'
              type='text' 
              placeholder='E-mail'
              className={classes.formInput}
            />
            <div className={classes.errorMessage}>
              <ErrorMessage name='email' />
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
          
            <CallBackBtn 
              textStyle='pink' 
              type='submit'
              funcForClick={() => null}
            />
          </Form>
        )}  
      </Formik>
    </div>
  )
}

export default CallBackForm