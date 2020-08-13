import React, { createContext, ReactNode, useContext } from 'react';
import { Profile, useUser } from 'admin-library';
import { getUserRequest } from 'api/profile';

interface State {
  user: Profile;
  loading: boolean;
}

const UserStateContext = createContext<State | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { getUser, ...state } = useUser(getUserRequest);
  return (
    <UserStateContext.Provider value={state}>
      {children}
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const context = useContext(UserStateContext);

  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }

  return context;
};
