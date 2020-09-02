import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { getLanguagesRequest } from 'api';
import { LocalizationLanguage } from 'types/languages';

interface State {
  languages: LocalizationLanguage[];
  loading: boolean;
}

const LanguagesStateContext = createContext<State | undefined>(undefined);

export const LanguagesProvider = ({ children }: { children: ReactNode }) => {
  const [languages, setLanguages] = useState([]);
  const [loading, setLoading] = useState(false);
  const state = { languages, loading };

  const getLanguages = async () => {
    setLoading(true);
  
    const { json, error } = await getLanguagesRequest();
    
    setLoading(false);

    if (!error) {
      setLanguages(json);
    }
  };

  useEffect(() => {
    getLanguages();
  }, []);
  
  return (
    <LanguagesStateContext.Provider value={state}>
      {children}
    </LanguagesStateContext.Provider>
  );
};

export const useLanguagesState = () => {
  const context = useContext(LanguagesStateContext);

  if (context === undefined) {
    throw new Error('useLanguagesState must be used within a LanguagesProvider');
  }

  return context;
};
