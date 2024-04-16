import { useContext } from 'react';
import Nav from '../../Components/Nav/Nav';
import UpdateForm from './../../Components/UpdateForm/UpdateForm';
import { AuthProvider } from '../../firebase/FirebaseProvider';
const UpdateProfile = () => {
    const {userInfo} = useContext(AuthProvider)
    document.title = "Nest.X | Update";
    return (
        <div>
           {userInfo && <Nav></Nav>}
            <div className='container mx-auto px-3'>
            <UpdateForm></UpdateForm>
        </div>
        </div>
    );
};

export default UpdateProfile;