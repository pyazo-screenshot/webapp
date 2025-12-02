import axios from 'axios';

export function isAuthenticated(): boolean {
  return localStorage.getItem('access_token') !== null;
}

export function getAccessToken(): string | false {
  if (!isAuthenticated()) {
    return false;
  }

  return localStorage.getItem('access_token') as string;
}

export function storeAccessToken(accessToken: string): void {
  localStorage.setItem('access_token', accessToken);
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}
