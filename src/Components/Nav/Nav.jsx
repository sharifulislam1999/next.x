import { Link, NavLink } from "react-router-dom";
import { HiOutlineBarsArrowDown ,HiOutlineBarsArrowUp  } from "react-icons/hi2";
import "../Nav/Nav.css"
import { useContext, useState } from "react";
import { AuthProvider } from "../../firebase/FirebaseProvider";

const Nav = () => {
    const {logOut,userInfo,loading} = useContext(AuthProvider)
    const [toggle,setToggle] = useState(false)
    const [navPadding,setNavPadding] = useState(false)
    const handleNav = ()=>{
        setToggle(!toggle)
    }
    const handleLogOut = ()=>{
        logOut()
    }
    const handleScroll = ()=>{
        if(window.scrollY > 0){
            setNavPadding(true)
        }else{
            setNavPadding(false)
        }
    }
    window.addEventListener("scroll",handleScroll)
    return (
        <div className={`sticky bg-white top-0 left-0 right-0 border-b border-[#4241411b] duration-150 z-50 ${navPadding ? "md:py-3 py-2": "md:py-4 py-3" }`}>
            <div className="container mx-auto px-3">
            <div className="flex justify-between items-center">
                <div>
                    <Link to="/" className=" text-2xl md:text-4xl font-bold text-main">Nest.X</Link>
                </div>
                <div className={`${toggle || "hidden"} md:block md:static bg-white text-center absolute pb-6 md:pb-0 duration-300 top-12 left-0 w-full md:w-auto`}>
                    <nav className="text-base">
                        <ul className="md:flex md:pt-0 gap-6 space-y-4 md:space-y-0 ">
                            <li><NavLink onClick={()=>setToggle(!toggle)} to="/" className={({isActive})=> isActive ? "active" : "pending"}>Home</NavLink></li>
                            <li><NavLink onClick={()=>setToggle(!toggle)} to="/updateprofile" className={({isActive})=> isActive ? "active" : "pending"} >Update Profile</NavLink></li>
                            <li><NavLink onClick={()=>setToggle(!toggle)} to="/profile"  className={({isActive})=> isActive ? "active" : "pending"}>Profile </NavLink></li>
                            <li><NavLink onClick={()=>setToggle(!toggle)} to="/savedestate"  className={({isActive})=> isActive ? "active" : "pending"}>Saved Estate </NavLink></li>
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        {loading ? <span className="loading loading-dots loading-md"></span> : userInfo ? <div  className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                            <div className="tooltip tooltip-bottom" data-tip={userInfo.displayName}>
                                <img className="h-8 w-8 md:h-12 cursor-pointer md:w-12 object-cover rounded-full border-2 border-[#65B110]" src={userInfo.photoURL} alt="" />
                            </div>
                            <div>
                                <button className="py-0 px-2 md:px-2 md:py-0 rounded-md border-2 font-semibold border-[#65B110] hover:text-black duration-100 hover:bg-transparent hover:border-[#65B1110] bg-[#65B110] text-white  " onClick={handleLogOut}>Log Out</button>
                            </div>
                            </div>
                              

                        </div> : <div>
                        <Link to="/login" className="py-1 px-2 md:px-2 md:py-2 rounded-md border-2 font-semibold border-[#65B110] hover:text-black duration-100 hover:bg-transparent hover:border-[#65B1110] bg-[#65B110] text-white ">Log In</Link>
                        </div>   }  
                        <div className="md:hidden text-2xl" onClick={handleNav}>
                               {toggle ?  <HiOutlineBarsArrowUp  /> : <HiOutlineBarsArrowDown></HiOutlineBarsArrowDown> }
                            </div>                   
                    </div>
                </div>
                
            </div>
            </div>
        </div>
    );
};

export default Nav;