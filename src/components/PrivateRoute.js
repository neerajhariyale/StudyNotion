import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({isUserLoggedIn, children}) => {
    if(isUserLoggedIn){
        return children;
    }
    else{
        return <Navigate to="/Login" />;
    }
  
}

export default PrivateRoute
