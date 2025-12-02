import { Navigate, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ImagesPage } from './pages/ImagesPage';
import { isAuthenticated } from './utils/AuthUtils';

export function PrivateRoute({ children }) {
  const location = useLocation();
  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export const routes = [
  {
    path: '/login',
    component: LoginPage,
    isPublic: true,
  },
  {
    path: '/register',
    component: RegisterPage,
    isPublic: true,
  },
  {
    path: '/',
    component: ImagesPage,
    isPublic: false,
  },
];
