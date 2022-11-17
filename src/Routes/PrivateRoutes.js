import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoutes = ({children}) => {
   const {user, loading} = useContext(AuthContext);
   const location = useLocation();
   if (loading) {
      return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400 mx-auto mt-5"></div>
   }
   if (user && user.uid) {
      return children;
   }
   return <Navigate to='/login' state={{ from: location }} replace ></Navigate>
};

export default PrivateRoutes;