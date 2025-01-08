import React from 'react'
import './formikYup.css'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { schemaValidation } from './Yup'

function Formik_Yup() {
  return (
   <Formik 
    initialValues={{ email: '', password: '' }}
    validationSchema={schemaValidation}
    onSubmit={(values,{resetForm}) => {
      console.log(values); 
      resetForm();
    }}
   >
    {({isSubmitting}) => (
      <Form className='form-container'>
          <h2>Formik & Yup</h2>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" id="email" name="email" placeholder="Enter email"/>
            <ErrorMessage name='email' component='div'/> 
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" id="password" name="password" placeholder="Enter password"/>
            <ErrorMessage name='password' component='div'/>
          </div>
      
          <button type='submit' disabled={isSubmitting}>Submit</button>
      </Form>
    )}

   </Formik>
  )
}

export default Formik_Yup
