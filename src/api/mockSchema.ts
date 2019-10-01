export default `
  type Query {
    hello: String
  }
  type Mutation {
    recovery(username: String!): RecoveryPayload
    signIn(username: String!, password: String!): SignInPayload
    signUp(username: String!, password: String!): SignUpPayload
  }
  type RecoveryPayload {
    errors: [UserError!]!
    ok: Boolean!
  }
  type SignInPayload {
    errors: [UserError!]!
    ok: Boolean!
    token: String!
  }
  type SignUpPayload {
    errors: [UserError!]!
    ok: Boolean!
  }
  type UserError {
    message: String!
    path: [String!]
    type: String!
  }
`;
