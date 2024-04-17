import { useContext, useRef, useState } from "react";
import { FiEye,FiEyeOff } from "react-icons/fi";
import googleImg from "../../assets/icons/google.png"
import {useForm} from "react-hook-form"
import githubImg from "../../assets/icons/github.png"
import { useLocation, useNavigate } from "react-router-dom";
import { Flip, ToastContainer, toast } from 'react-toastify';
import { GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";
import { AuthProvider } from "../../firebase/FirebaseProvider";
import Nav from "../../Components/Nav/Nav";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  startEvent: "DOMContentLoaded",
});
const Login = () => {
    document.title = "Nest.X | log In";
    const location = useLocation();
    const navigate = useNavigate();
    const {userInfo,logInWithUP,signInPopUp} = useContext(AuthProvider)
    const {register,handleSubmit} = useForm();
    const [eyeToggle,setEyeToggle] = useState(true);
    const formData = useRef();
    const handleEye = ()=>{
        const passwordFiled = formData.current["password"];
        if(eyeToggle){
            passwordFiled.type = "text";
        }else{
            passwordFiled.type  = "password";
        }
        setEyeToggle(!eyeToggle);
    }
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
    const formSubmit = (data)=>{
       const {email,password} = data;
       if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
        errorMsg("Your password must be at least 6 characters long and contain at least one uppercase and one lowercase letter.")
        return;
       }
       logInWithUP(email,password)
       .then(()=>{
           successMessage("Log In Success");
           setTimeout(()=>{
            navigate(location.state ? location.state : "/") 
           },1000)     
       })
       .catch((err)=>{
        if(err.code === "auth/invalid-credential"){
            errorMsg("You Provide Invalid Email or Password")
        }       
        console.log(err.code)
       });              
    }
    const signinWithGoogle = ()=>{
        const provider = new GoogleAuthProvider();
        signInPopUp(provider)
        .then(()=>{
            successMessage("Login Success");
            setTimeout(()=>{
                navigate(location.state ? location.state : "/") 
               },1000)  
        })
        .catch(()=>{
    
        });
    }
    const signinWithGithub = ()=>{
        const provider = new GithubAuthProvider();
        signInPopUp(provider)
        .then(()=>{
            successMessage("Login Success");
            setTimeout(()=>{
                navigate(location.state ? location.state : "/") 
               },1000)
        })
        .catch(()=>{
        });
    }
    const goRegister =()=>{
        navigate("/register",{state:location.state})
    }
    return (
        <div>
            {userInfo && <Nav></Nav>}
            <div className="container mx-auto px-3">
            <div data-aos="fade-down" className="py-16 flex justify-center items-center">
                <div className="w-full lg:w-[70%] border p-4 rounded-xl">
                    <form ref={formData}  className="" onSubmit={handleSubmit(formSubmit)}>
                        <div className="text-center text-xl lg:text-3xl  font-bold">
                            <h1>Log In</h1>
                        </div>
                        <div className="space-y-2 mb-4">
                            <span className="text-lg">Email</span><br/>
                            <input {...register("email")} placeholder="Enter Your Email" className=" text-lg text-[#605c5c] focus:outline-none px-2 py-1 rounded-lg border outline-1 w-full" type="email" required/>
                        </div>
                        <div className="space-y-2 mb-4">
                            <span className="text-lg">Password</span><br/>
                            <div className="relative cursor-pointer">
                            <input {...register("password")}  placeholder="Enter Your Password" className=" text-lg text-[#605c5c] focus:outline-none px-2 py-1 rounded-lg border outline-1 w-full" type="password" required />
                            <div onClick={handleEye} className="absolute top-[10px] right-[10px]">
                            {eyeToggle ?  <FiEye /> :<FiEyeOff/>}
                                
                            </div>
                            </div>
                        </div>
                        <div className="text-base text-red-600 mb-4">
                        </div>
                        <div>
                            <input className=" border-2 duration-200 cursor-pointer border-[#65B110] hover:bg-transparent hover:text-black p-2 text-lg font-medium rounded-lg bg-[#65B110] text-white w-full" type="submit" value="Log In" />
                        </div>
                       
                    </form>
                    <div className="text-center text-lg font-semibold mt-5">
                        <h1>Log in With</h1>
                        <div className="flex justify-center items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-11 cursor-pointer" onClick={signinWithGoogle}>
                                <img className="w-full h-full" src={githubImg} alt="" />
                                </div>
                                <div className="w-11 cursor-pointer" onClick={signinWithGithub}>
                                <img className="w-full" src={googleImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center my-3">
                        <h1>Don`t have an account ? Please <span className="text-blue-600 font-semibold cursor-pointer" onClick={goRegister}>Register</span></h1>
                    </div>
                    
                </div>

            </div>
            <ToastContainer/>
        </div>
        </div>
    );
};

export default Login;