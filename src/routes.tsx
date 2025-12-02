import { Navigate, useLocation } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ImagesPage } from './pages/ImagesPage';
import { isAuthenticated } from './utils/AuthUtils';
import { ComponentType, ReactNode } from 'react';

interface PrivateRouteProps {
  children: ReactNode;
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const location = useLocation();
  const authenticated = isAuthenticated();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

interface RouteConfig {
  path: string;
  component: ComponentType;
  isPublic: boolean;
}

export const routes: RouteConfig[] = [
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
