import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import './index.css';

import { routes, PrivateRoute } from './routes';
import { GlobalStyle } from './styles/GlobalStyle';
import { getAccessToken } from './utils/AuthUtils';

const accessToken = getAccessToken();

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

if (accessToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
}

createRoot(document.getElementById('root')).render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        {routes.map((route) =>
          route.isPublic ? (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={<PrivateRoute><route.component /></PrivateRoute>}
            />
          )
        )}
      </Routes>
    </BrowserRouter>
  </>
);
