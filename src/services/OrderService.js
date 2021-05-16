import getPermissions from 'src/auth/getPermission';

/* eslint linebreak-style: ["error", "windows"] */
const apiUrl = process.env.REACT_APP_API_URL;
const localToken = localStorage.getItem('token');
const token = localToken ? localToken.slice(1, -1) : '';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};
const roles = getPermissions();
const assignmentApiUrl = (roles === 'admin') ? 'api/assignment' : 'api/myorders';

export const fetchOrders = async (searchText, page, limit) => {
  const requestOptions = {
    method: 'GET',
    headers
  };
  return fetch(
    `${apiUrl}${assignmentApiUrl}?searchText=${searchText}&page=${page}&limit=${limit}`,
    requestOptions
  )
    .then((res) => res.json())
    .then((appsResponse) => appsResponse)
    .catch((error) => {
      throw error;
    });
};

export const fetchOrderById = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers
  };
  return fetch(`${apiUrl}api/assignment/${id}`, requestOptions)
    .then((res) => res.json())
    .then((appsResponse) => appsResponse)
    .catch((error) => {
      throw error;
    });
};

export const fetchOrderByUserId = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers
  };
  return fetch(`${apiUrl}api/userorder/${id}`, requestOptions)
    .then((res) => res.json())
    .then((appsResponse) => appsResponse)
    .catch((error) => {
      throw error;
    });
};
