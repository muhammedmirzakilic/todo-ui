import axios from 'axios';
import { SIGN_UP_URL, LOGIN_URL } from '../config';

export const signUp = async (name, email, password) => {
  const response = await axios.post(SIGN_UP_URL, JSON.stringify({ name, email, password }), {
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};

export const login = async (email, password) => {
  const response = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};
