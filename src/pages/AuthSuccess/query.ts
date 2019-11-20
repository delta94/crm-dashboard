import { gql } from 'apollo-boost';

export const USER_QUERY = gql`
  query user($id: Int) {
    users(where: {id: {_eq: $id}}) {
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
