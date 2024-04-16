import Nav from "../../Components/Nav/Nav";
import ProfileData from "../../Components/Profile/ProfileData";
const Profile = () => {   
    document.title = "Nest.X | Profile"
    return (
        <div>
            <Nav></Nav>
            <div className='container mx-auto px-3 mt-10'>
            <ProfileData></ProfileData>            
            </div>
        </div>
    );
};

export default Profile;