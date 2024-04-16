import { useContext } from "react";
import { AuthProvider } from "../../firebase/FirebaseProvider";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  startEvent: "DOMContentLoaded",
});

const ProfileData = () => {
    const {userInfo} = useContext(AuthProvider)
    return (
        <div data-aos="fade-down" className="flex justify-center">
           <div className="px-4 py-10 border rounded-lg w-96 space-y-6">
           <div className="flex justify-center">
            <img className="rounded-full border-4 border-[#65B110] h-40 w-40 object-cover" src={userInfo.photoURL} alt="" />
           </div>
           <div className="text-center">
            <h1 className="text-3xl font-semibold">{userInfo.displayName}</h1>
           </div>
           {/* <table className="table-fixed w-full text-base">
            <tr>
                <td className="md:w-32 border p-2">Email:</td>
                <td className="border p-2">{userInfo?.email || "Github Privider"}</td>
            </tr>
            <tr>
                <td className="md:w-32 border p-2">Email Verified:</td>
                <td className="border p-2">{userInfo.emailVerified ? "Verified" : "Not Verified"}</td>
            </tr>
           </table> */}
           <div className="space-y-2">
            <div className="flex md:gap-2 border">
                <h1 className="p-2 font-bold ">Email:</h1>
                <h1 className="p-2 ">{userInfo?.email || "Github Privider"}</h1>
            </div>
            <div className="flex gap-2 border">
                <h1 className="p-2 font-bold ">Email Verified:</h1>
                <h1 className="p-2 ">{userInfo.emailVerified ? "Verified" : "Not Verified"}</h1>
            </div>
           </div>
            <div className="flex justify-center">
            <Link to="/updateprofile" className="btn bg-[#65B110] border border-[#65B110] hover:border-[#65B110] text-white hover:bg-transparent hover:text-black">Update Profile</Link>
            </div>
           </div>
        </div>
    );
};

export default ProfileData;