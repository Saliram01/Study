import * as Yup from 'yup'

export const schemaValidation = Yup.object({
    email: Yup.string().email('Valid email').required('required'),
        password: Yup.string().min(8,'password must be at least 8 character').required('required'),
})