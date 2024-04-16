import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Title from "../../Components/Title/Title";
import Estate from "../../Components/Estate/Estate";
import Nav from "../../Components/Nav/Nav";
import { useContext } from "react";
import { AuthProvider } from "../../firebase/FirebaseProvider";
import Accordian from "../../Components/Accordian/Accordian";
import AOS from "aos";
import "aos/dist/aos.css";
import MapLocation from "../../Components/MapLocation/MapLocation";
AOS.init({
  startEvent: "DOMContentLoaded",
});

const Home = () => {
    document.title = "Home | Nest.X"
    const estates = useLoaderData()
    const {userInfo} = useContext(AuthProvider);
    return (
        <div>
            {userInfo && <Nav></Nav>}
            <Slider></Slider>   
            <Title dataaos="fade-up" title="Checkout Our Featured Item" des="Discover our featured property: a stunning home with modern amenities in a prime location. Schedule your viewing today!"></Title>
            <div className="container mx-auto px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {estates.map((item,i)=> <Estate key={i} item={item} ></Estate>)}
            </div>
            <Title dataaos="fade-up" title="Why Chose us" des="Choose us for personalized service, expert guidance, and local knowledge to find your dream home effortlessly"></Title>
            <Accordian></Accordian>    
            <div className="mt-40">
            <MapLocation />   
            </div>     
            </div>
        </div>
    );
};

export default Home;