/* eslint-disable implicit-arrow-linebreak */
import axios from 'axios';

/* eslint linebreak-style: ["error", "windows"] */
const apiUrl = process.env.REACT_APP_API_URL;
const localToken = localStorage.getItem('token');
const token = localToken ? localToken.slice(1, -1) : '';
const headers = {
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`
};

const uploadHears = {
  'Content-Type': 'multipart/form-data;',
  Authorization: `Bearer ${token}`
};

export const fetchUsers = async (searchText, page, limit) => {
  const requestOptions = {
    method: 'GET',
    headers
  };
  return fetch(
    `${apiUrl}api/users?searchText=${searchText}&page=${page}&limit=${limit}`,
    requestOptions
  )
    .then((res) => res.json())
    .then((appsResponse) => appsResponse)
    .catch((error) => {
      throw error;
    });
};

export const fetchUserById = async (id) => {
  const requestOptions = {
    method: 'GET',
    headers
  };
  return fetch(`${apiUrl}api/users/${id}`, requestOptions)
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
  return fetch(`${apiUrl}api/auth/users`, requestOptions)
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
  return fetch(`${apiUrl}api/auth/users`, requestOptions)
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
  return fetch(`${apiUrl}api/auth/login`, requestOptions)
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
  return fetch(`${apiUrl}api/auth/verify`, requestOptions)
    .then((res) => res.json())
    .then((response) => response)
    .catch((error) => {
      throw error;
    });
};

export const uploadProfilePic = async (formData) =>
  axios
    .post(`${apiUrl}api/users/upload`, formData, {
      headers: uploadHears
    })
    .then((res) => res.data)
    .catch((error) => {
      throw error;
    });
