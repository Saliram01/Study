import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'

function FormikOnly() {
  return (
    <Formik
        initialValues={{
            email: '',
            password: '',
        }}
        validate={(values) => {
            const errors = {};
            if(!values.email) {
                errors.email = 'required';
            } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = 'Invalid emails address';
            }

            if(!values.password) {
                errors.password = 'required';
            } else if (values.password.length < 8) {
                errors.password = 'Password must be 8 character';
            }

            return errors;
        }}

        onSubmit={(values,{setValues}) => {
            setTimeout(()=>{
                alert(JSON.stringify(values,null,2))
                // setValues({email: '', password: ''});
            }, 500);
        }}
    >
        {({isSubmitting}) => (
            <Form>
                <label>Email</label>
                <Field type='email' name="email"/>
                <ErrorMessage name='email' component="div"/>

                <label>Password</label>
                <Field type='password' name='password'/>
                <ErrorMessage name='password' component="div"/>

                <button type='submit'>Submit</button>
            </Form>
        )}
      
    </Formik>
  )
}

export default FormikOnly;
