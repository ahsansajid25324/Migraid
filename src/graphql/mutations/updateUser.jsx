import { gql } from "@apollo/client";

export const UPDATE_USER = gql`
  mutation UpdateUser($id: ID!, $firstName: String!, $lastName: String!, $email: String!) {
    updateUser(id: $id, firstName: $firstName, lastName: $lastName, email: $email) {
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
