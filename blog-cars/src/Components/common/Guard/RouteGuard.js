import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import AuthContext from '../../../contexts/AuthContext';

function RouteGuard() {
    const user = useContext(AuthContext);

    return user ? <Outlet /> : <Navigate to="/login" />
}

export default RouteGuard;