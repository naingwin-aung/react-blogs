import { Navigate, Outlet } from 'react-router-dom';
import useAuthStore from '../stores/useAuthStore';

const GuestRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  return isAuthenticated ? <Navigate to="/" replace /> : <Outlet />;
};

export default GuestRoute;