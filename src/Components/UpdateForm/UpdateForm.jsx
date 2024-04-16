import { useContext} from 'react';
import {useForm} from "react-hook-form"
import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from '../../firebase/FirebaseProvider';
import auth from '../../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  startEvent: "DOMContentLoaded",
});
const UpdateForm = () => {
    const navigate = useNavigate();
    const {userInfo} = useContext(AuthProvider);
    const {displayName,photoURL,email} = userInfo;
    const {register,handleSubmit} = useForm(); 
    const successMessage = (msg)=>{    
            toast.success(msg,{                
                transition: Flip,
            });
    }
    const errorMsg = (msg)=>{    
            toast.error(msg,{
                transition: Flip,
            });
    }
    const formSubmit = (data) =>{
        const {name,photo} = data;
        console.log(name,photo)
            updateProfile(auth.currentUser,{
                displayName: name,
                photoURL: photo
            })
            .then(()=>{
                successMessage("Data Update Success")
                setTimeout(()=>{
                    navigate("/profile")
                },1000)
            })
            .catch(()=>{
                errorMsg("Something Problem")
        });     

    }
    return (
        <div className="">
        <div data-aos="fade-down" className="py-16 flex justify-center items-center">
            <div className="w-full lg:w-[70%] border p-4 rounded-xl">
                <form className="py-6" onSubmit={handleSubmit(formSubmit)}>
                  <div className='flex justify-center'>
                  <div className='h-40 w-40 mb-4'>
                        <img className='w-full rounded-full border-4 border-[#65B110]' src={userInfo.photoURL} alt="" />
                    </div>
                  </div>
                    <div className="text-center text-xl lg:text-3xl font-bold">
                        <h1>Update Profile</h1>
                    </div>
                    <div className="space-y-2 mb-4">
                        <span className="text-lg">Name</span><br/>
                        <input {...register("name")} defaultValue={displayName} placeholder="Enter Your Name" className=" text-lg text-[#605c5c] focus:outline-none px-2 py-1 rounded-lg border outline-1 w-full" type="text" required />

                    </div>
                    <div className="space-y-2 mb-4">
                        <span className="text-lg">Email</span><br/>
                        <input {...register("email")} defaultValue={email ? email : "Github Privider"} placeholder="Enter Your Email" className=" text-lg text-[#605c5c] focus:outline-none px-2 py-1 rounded-lg border outline-1 w-full" type="email" required disabled />
                        
                    </div>
                    <div className="space-y-2 mb-4">
                        <span className="text-lg">Photo Url</span><br/>
                        <input {...register("photo")} defaultValue={photoURL} placeholder="Enter Your Photo Url" className=" text-lg text-[#605c5c] focus:outline-none px-2 py-1 rounded-lg border outline-1 w-full" type="url" required />
                        
                    </div>
                    {/* <div className="space-y-2 mb-4">
                        <span className="text-lg">Password</span><br/>
                        <div className="relative cursor-pointer">
                        <input {...register("password")} defaultValue={password}  placeholder="Enter Your Password" className=" text-lg text-[#605c5c] focus:outline-none px-2 py-1 rounded-lg border outline-1 w-full" type="password" required />
                    
                        <div onClick={handleEye} className="absolute top-[10px] right-[10px]">
                        {eyeToggle ? <FiEye />  : <FiEyeOff/>}                            
                        </div>
                        </div>
                    </div> */}
                    {/* <div className="text-base text-red-600 mb-4">
                        <span>{errorMessage}</span>
                    </div> */}
                    <div>
                        <input className=" border-2 duration-200 cursor-pointer border-[#65B110] hover:bg-transparent hover:text-black p-2 text-lg font-medium rounded-lg bg-[#65B110] text-white w-full" type="submit" value="Update" />
                    </div>
                   
                </form>               
            </div>
        </div>
        <ToastContainer/>
    </div>
    );
};

export default UpdateForm;