import axios from 'axios';
import { SIGN_UP_URL } from '../config';

export const signUp = async (name, email, password) => {
  const response = await axios.post(SIGN_UP_URL, JSON.stringify({ name, email, password }), {
    headers: { 'Content-Type': 'application/json' },
  });
  return response;
};
