import { gql } from 'apollo-boost';

export const USER_QUERY = gql`
  query user {
    users {
      email
      first_name
      id
      last_name
      picture
      role
      status
      updated_at
      created_at
      auth_timestamp
    }
  }
`;
