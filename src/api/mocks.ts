// eslint-disable-next-line
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImp0aSI6ImU5OTY1NWUxLWYwYTYtNGQwMy1hZGU5LTM5MmExODYxZTQzNCIsImlhdCI6MTU2OTg5NTc4NSwiZXhwIjoxNTY5ODk5Mzg1fQ.eOGevTH7reEdgVr023i0Y3G5Sb0klA-n_5ABQRG33GA`;

export default {
  Mutation: () => ({
    signIn: () => ({
      errors: [],
      ok: true,
      token,
    }),
    signUp: () => ({
      errors: [],
      ok: true,
    }),
  }),
};
