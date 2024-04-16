import { Link } from 'react-router-dom';
import { BsCurrencyDollar } from "react-icons/bs";
import { PropTypes } from 'prop-types';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  startEvent: "DOMContentLoaded",
});
const SavedCart = ({item}) => {
    const {id,image,estate_title,segment_name,price,status} = item;
    return (
        <div data-aos="fade-down" className='flex flex-col md:flex-row gap-4 border mb-5 rounded-md p-3 lg:p-8 items-center'>
            <div className='md:w-80'>
            <img className='full rounded-md' src={image} alt="" />
            </div>            
            <div className='w-full md:flex-1 space-y-3'>
                <div>
                    <h1 className='text-xl md:text-2xl font-semibold'>{estate_title}</h1>    
                </div>    
                <div>
                    <h1>{segment_name}</h1>    
                </div>    
                <div className=''>
                {status=== "Sale" ? <span className="px-3 py-1 bg-blue-600 text-white rounded-md">{status}</span> : <span className="px-3 py-1 bg-red-600 text-white rounded-md">{status}</span>}   
                </div>
                <div>
                <div className="flex items-center gap-2">
                    <BsCurrencyDollar className="text-lg text-[#65B110]"/>
                    <h1>{price}</h1>
                </div>
                </div>
                <div>
                <Link to={`/details/${id}`} className="px-3 border border-[#65B110] duration-200 hover:bg-transparent inline-block hover:text-[#65B110] py-2 bg-[#65B110] text-white font-base font-semibold rounded-lg">View Property</Link>
                </div>    
            </div>            
        </div>
    );
};
SavedCart.propTypes = {
    item: PropTypes.obj
}

export default SavedCart;