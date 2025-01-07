import { gql } from '@apollo/client'

export const ADD_USER = gql`
    mutation AddUser($name: String!, $email: String!) {
        addUser(name: $name, email: $email) {
            name
            email
        }
    }
`