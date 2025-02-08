import { gql } from "@apollo/client";

export const REGISTER_USER = gql`
  mutation Register($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    register(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      success
      message
      user {
        id
        firstName
        lastName
        email
      }
    }
  }
`;
