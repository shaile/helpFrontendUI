import axios from 'axios';

/* eslint linebreak-style: ["error", "windows"] */
const localToken = localStorage.getItem('token');
const token = (localToken) ? localToken.slice(1, -1) : '';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

const uploadHears = {
  'Content-Type': 'multipart/form-data;',
  Authorization: `Bearer ${token}`
};

export const fetchUsers = async (searchText) => {
  const requestOptions = {
    method: 'GET',
    headers
  };

  return fetch(`http://localhost:3009/api/users?searchText=${searchText}`, requestOptions)
    .then((res) => res.json())
    .then((appsResponse) => appsResponse)
    .catch((error) => {
      throw error;
    });
};

export const createUser = async (userBody) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userBody)
  };
  return fetch('http://localhost:3009/api/auth/users', requestOptions)
    .then((response) => response.status)
    .catch((error) => {
      throw error;
    });
};

export const updateUser = async (userBody) => {
  const requestOptions = {
    method: 'PUT',
    headers,
    body: JSON.stringify(userBody)
  };
  return fetch('http://localhost:3009/api/auth/users', requestOptions)
    .then((response) => response.status)
    .catch((error) => {
      throw error;
    });
};

export const login = async (req) => {
  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(req)
  };
  return fetch('http://localhost:3009/api/auth/login', requestOptions)
    .then((res) => res.json())
    .then((response) => response.access_token)
    .catch((error) => {
      throw error;
    });
};

export const currentUser = async () => {
  const requestOptions = {
    method: 'GET',
    headers
  };
  return fetch('http://localhost:3009/api/auth/verify', requestOptions)
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const uploadProfilePic = async (formData) => axios.post('http://localhost:3009/api/users/upload',
  formData,
  {
    headers: uploadHears
  })
  .then((res) => res.data)
  .catch((error) => {
    throw error;
  });
