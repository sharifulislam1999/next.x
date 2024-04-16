import { useLoaderData } from "react-router-dom";
import Slider from "../../Components/Slider/Slider";
import Title from "../../Components/Title/Title";
import Estate from "../../Components/Estate/Estate";
import Nav from "../../Components/Nav/Nav";
import { useContext } from "react";
import { AuthProvider } from "../../firebase/FirebaseProvider";
import Accordian from "../../Components/Accordian/Accordian";

const Home = () => {
    document.title = "Home | Nest.X"
    const estates = useLoaderData()
    const {userInfo} = useContext(AuthProvider);
    return (
        <div>
            {userInfo && <Nav></Nav>}
            <Slider></Slider>   
            <Title title="Checkout Our Featured Item" des="Discover our featured property: a stunning home with modern amenities in a prime location. Schedule your viewing today!"></Title>
            <div className="container mx-auto px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {estates.map((item,i)=> <Estate key={i} item={item} ></Estate>)}
            </div>
            <Title title="Why Chose us" des="Discover our featured property: a stunning home with modern amenities in a prime location. Schedule your viewing today!"></Title>
            <Accordian></Accordian>
            </div>
        </div>
    );
};

export default Home;