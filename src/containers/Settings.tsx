import React, { createContext, ReactNode, useContext, useState, useEffect } from 'react';
import { getSettingsRequest } from 'api';
import { Settings } from 'types/settings';

interface State {
  settings: Settings;
  loading: boolean;
}

const initSettings = { store_root_url: '' };

const SettingsStateContext = createContext<State | undefined>(undefined);

export const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const [settings, setSettings] = useState(initSettings);
  const [loading, setLoading] = useState(false);
  const state = { settings, loading };

  const getSettings = async () => {
    setLoading(true);
  
    const { json, error } = await getSettingsRequest();
    
    setLoading(false);

    if (!error) {
      setSettings(json);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);
  
  return (
    <SettingsStateContext.Provider value={state}>
      {children}
    </SettingsStateContext.Provider>
  );
};

export const useSettingsState = () => {
  const context = useContext(SettingsStateContext);

  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }

  return context;
};
