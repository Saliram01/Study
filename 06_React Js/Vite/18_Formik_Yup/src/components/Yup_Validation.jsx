import * as Yup from 'yup'

// Yup is a schema validation library for JavaScript objects, commonly used with Formik for validating form inputs.

export const signUpSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Enter your email"),
  password: Yup.string().min(8).required("Enter your password"),
  conform_password: Yup.string().required().oneOf([Yup.ref('password'), null, "Password must match"]),
});