/* eslint-disable linebreak-style */
import { useState } from 'react';

export default function useToken() {
  const tokenString = localStorage.getItem('token');

  const [token, setToken] = useState(tokenString);
  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  };
}
