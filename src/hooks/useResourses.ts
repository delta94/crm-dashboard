import { useState, useEffect } from 'react';
import { ApiResponse } from 'types/api';

export default <T>(resourceRequest: () => Promise<ApiResponse>) => {
  const [resources, setResources] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);

  const loadResources = async () => {
    setLoading(true);

    const { json, error } = await resourceRequest();

    setLoading(false);

    if (!error) setResources(json);
  };

  useEffect(() => {
    loadResources();
    // eslint-disable-next-line
  }, []);

  return { resources, loading, loadResources };
};
