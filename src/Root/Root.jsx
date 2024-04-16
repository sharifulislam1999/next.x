import {Outlet, ScrollRestoration} from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Footer from '../Components/Footer/Footer';
import { useContext } from 'react';
import { AuthProvider } from '../firebase/FirebaseProvider';

const Root = () => {
    const {userInfo} = useContext(AuthProvider)
    return (
        <div className='font-outfit'>
        {userInfo ? <></> : <Nav></Nav>}
        <ScrollRestoration />   
        <Outlet></Outlet>
        <Footer></Footer>            
        </div>
    );
};

export default Root;