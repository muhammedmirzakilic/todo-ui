import axios from 'axios';
import { useAuth } from './';
import { useEffect } from 'react';

export const useAuthedAxios = () => {
  const { auth } = useAuth();
  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth}`;
        }
        config.headers['Content-Type'] = 'application/json';
        return config;
      },
      error => Promise.reject(error),
    );

    return () => {
      axios.interceptors.request.eject(requestIntercept);
    };
  }, [auth]);

  return axios;
};
