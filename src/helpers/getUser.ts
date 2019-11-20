import { ApolloClient, NormalizedCacheObject, gql } from 'apollo-boost';

const USER_QUERY = gql`
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

export const getUser = async (client: ApolloClient<NormalizedCacheObject>, id: number) => {
  const userData = await client.query({
    query: USER_QUERY,
    variables: { id },
  }).catch(err => console.log(err));

  return userData && userData.data && userData.data.users && userData.data.users[0];
};
