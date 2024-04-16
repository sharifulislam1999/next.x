import { BiCategoryAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { SlSizeFullscreen } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  startEvent: "DOMContentLoaded",
});


import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const Estate = ({item}) => {
    const {id,image,estate_title,segment_name,description,price,status,location,area,facilities} = item;

    return (
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" className="border rounded-xl flex flex-col">
            <div className="relative">
                <img src={image} alt="" className="rounded-t-xl" />
                <div className="absolute top-4 right-4">
                    {status=== "Sale" ? <span className="px-3 py-1 bg-blue-600 text-white rounded-md">{status}</span> : <span className="px-3 py-1 bg-red-600 text-white rounded-md">{status}</span>}
                </div>
            </div>
            <div className="p-3 space-y-4 flex-grow">
            <div className="space-y-3">
                <div className="text-2xl font-semibold">
                    <h1>{estate_title}</h1>
                </div>
                <div className="text-lg text-[#605c5c]">
                    <h1>{description}</h1>
                </div>
            </div>
            <div className="flex gap-3 justify-between flex-wrap">
                <div className="flex items-center gap-2">
                    <BiCategoryAlt className="text-lg text-[#65B110]"/>
                    <h1>{segment_name}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <SlSizeFullscreen className="text-lg text-[#65B110]"/>
                    <h1>{area}</h1>
                </div>
                <div className="flex items-center gap-2">
                    <BsCurrencyDollar className="text-lg text-[#65B110]"/>
                    <h1>{price}</h1>
                </div>
            </div>
            <div>
                <div>
                   <span className="font-semibold">Facilities :</span>
                    <div>
                    {facilities.map((item,i)=> <span className="py-1 px-3 text-[#65B110] bg-[#a1ec4b24] rounded-full m-1 inline-block" key={i}>{i+1}.{item}</span>)}
                    </div>
                </div>                
            </div>
            <div className="flex items-center gap-2">
                <SlLocationPin className="text-lg text-[#65B110]"/>
                <h1>{location}</h1>
            </div>           
            </div>
            <div className="mb- p-4 mb-4">
                <Link to={`/details/${id}`} className="px-3 border border-[#65B110] duration-200 hover:bg-transparent hover:text-[#65B110] py-2 bg-[#65B110] text-white font-base font-semibold rounded-lg">View Property</Link>
            </div>
        </div>
    );
};
Estate.propTypes = {
    item: PropTypes.obj
}


export default Estate;
// "image": "https://i.ibb.co/bPj6Rg7/lotus-design-n-print-Mcmcjg-Gk8u-M-unsplash.jpg",
// "estate_title": "Desert Oasis Retreat",
// "segment_name": "Apartments",
// "description": "Escape to the desert and unwind in this stunning oasis retreat with panoramic mountain views.",
// "price": 5000000,
// "status": "sale",
// "location": "Scottsdale, Arizona",
// "area": "6000 sq ft",
// "facilities": ["resort-style pool", "outdoor kitchen", "fire pit", "putting green", "home theater"]