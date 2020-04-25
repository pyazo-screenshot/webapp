import axios from 'axios';

export function isAuthenticated() {
  return localStorage.getItem('access_token') !== null;
}

export function getAccessToken() {
  if (!isAuthenticated()) {
    return false;
  }

  return localStorage.getItem('access_token');
}

export function storeAccessToken(accessToken) {
  localStorage.setItem('access_token', accessToken);
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
