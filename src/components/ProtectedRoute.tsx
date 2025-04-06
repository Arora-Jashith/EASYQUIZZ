
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

type ProtectedRouteProps = {
  children: React.ReactNode;
  allowedRole?: string;
};

const ProtectedRoute = ({ children, allowedRole }: ProtectedRouteProps) => {
  const { isAuthenticated, role } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRole && role !== allowedRole) {
    // Redirect to appropriate dashboard based on role
    if (role === 'teacher') {
      return <Navigate to="/teacher/dashboard" />;
    } else if (role === 'student') {
      return <Navigate to="/student/dashboard" />;
    }
    // Fallback to home
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
