import PropTypes from 'prop-types'
import { useContext } from 'react'
import { AuthContext } from '../providers/AuthProvider'
import Loader from '../components/Loader/Loader';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Data is not Loaded Yet
  if (loading) return <Loader></Loader>;

  // User is Logged In
  if (user) return children;

  // User is not Logged In
  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRoute

PrivateRoute.propTypes = {
  children: PropTypes.node
}