import React from 'react'
import * as Yup from 'yup'
import classes from './CallBackForm.module.css'
import CallBackBtn from '../../CallBackBtn/CallBackBtn'
import {Formik, Form, Field, ErrorMessage} from 'formik'

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
      .matches(/^\d+$/, 'Допускаются только цифры!')
      .min(10, 'Номер состоит из 10 символов!'),
  })
  
  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
  }
  
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
              type='tel' 
              placeholder='Телефон'
              maxLength='10'
              className={classes.formInput}
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