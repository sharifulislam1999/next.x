import { useContext } from 'react';
import { AuthProvider } from '../firebase/FirebaseProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
const PrivateRoute = ({children}) => {    
    const {userInfo,loading} = useContext(AuthProvider);
    const location = useLocation();
    if(userInfo){
        return children
    }
    if(loading){
        return <div className='py-10 flex justify-center'>
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;