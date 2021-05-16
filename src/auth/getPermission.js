/* eslint-disable linebreak-style */
import decodeJwt from 'jwt-decode';

const getPermissions = () => {
  const tokenString = localStorage.getItem('token');
  let role;
  if (tokenString) {
    const decodedToken = decodeJwt(tokenString);
    role = decodedToken.role;
  }
  return role;
};

export default getPermissions;
