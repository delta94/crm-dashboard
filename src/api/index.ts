import { loader } from 'graphql.macro';

export const SIGN_IN_MUTATION = loader('./signIn.gql');
export const SIGN_UP_MUTATION = loader('./signUp.gql');
export const RECOVERY_MUTATION = loader('./recovery.gql');