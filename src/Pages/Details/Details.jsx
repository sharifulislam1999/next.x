import { useLoaderData, useParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { SlSizeFullscreen } from "react-icons/sl";
import { BsCurrencyDollar } from "react-icons/bs"
import Nav from "../../Components/Nav/Nav";
import { addData, getData } from "../../Ultil/Util";
import { Flip, ToastContainer, toast } from 'react-toastify';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init({
  startEvent: "DOMContentLoaded",
});
const Details = () => {
    const {_id} = useParams();
    const data = useLoaderData();
    const filterData = data.find((item)=> item.id === parseInt(_id));
    console.log(filterData)
    const {id,image,estate_title,segment_name,description,price,status,location,area,facilities} = filterData;
    document.title = `Nest.X | ${estate_title}`;
    const handleSave = (id)=>{
        const lists = getData();
        console.log(lists)
        if(!lists.includes(id)){
            addData(id)
            toast.success("Added Success",{
                transition: Flip,
            })
        }else{
            toast.error("Already Added",{
                transition: Flip,
            })
        }
    }
    const style = {
        backgroundImage : `linear-gradient(207deg, rgba(20,45,205,0) -1%, rgba(101,177,16,1) 100%), url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
    }
    return (
        <div>
            <Nav></Nav>
            <div style={style} className="py-10 md:py-20">
                <div className="container mx-auto px-3">
                    <h1 className="text-xl text-white md:text-3xl font-bold">{estate_title}</h1>
                    <h1 className="text-white">Segment: <span className="font-bold">{segment_name}</span></h1>
                </div>
            </div>
           <div className="container mx-auto px-3 mt-10 lg:mt-20">
           <div className="flex-col flex lg:flex-row gap-11 items-center">
                <div data-aos="fade-right" className="lg:flex-1">
                    <img className="rounded-lg" src={image} alt="" />
                </div>
                <div data-aos="fade-left" className="flex-1 space-y-2 lg:space-y-1 xl:space-y-4">
                    <div className="text-2xl md:text-3xl font-bold">
                        <h1>{estate_title}</h1>
                    </div>
                    <div>
                        <h1>Segment Name: {segment_name}</h1>
                    </div>
                    <div>
                        <div className="flex gap-3 items-center">
                            <h1 className="font-bold">Feature for: </h1>
                            <div className="">
                    {status=== "Sale" ? <span className="px-3 py-1 bg-blue-600 text-white rounded-md">{status}</span> : <span className="px-3 py-1 bg-red-600 text-white rounded-md">{status}</span>}
                </div>
                        </div>
                    </div>
                    <div className="text-lg font-medium">
                        <p>{description}</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 ">
                        <IoLocationOutline className="text-[#65B110]" />
                            <span>{location}</span>
                        </div>
                    </div>
                    <div>
                    <div className="flex items-center gap-2 ">
                        <SlSizeFullscreen className="text-[#65B110]" />
                            <span>{area}</span>
                    </div>
                    </div>
                    <div>
                    <div className="flex items-center gap-2 ">
                        <BsCurrencyDollar className="text-[#65B110]" />
                            <span>{price}</span>
                    </div>
                    </div>
                    <div>
                    <span className="font-semibold">Facilities :</span>
                    <div>
                    {facilities.map((item,i)=> <span className="py-1 px-3 text-[#65B110] bg-[#a1ec4b24] rounded-full m-1 inline-block" key={i}>{i+1}.{item}</span>)}
                    </div>
                </div>  
                <div>
                <button className="btn bg-[#65B110] text-white hover:bg-transparent hover:text-[#1F2937] hover:border-[#65B110]" onClick={()=>handleSave(id)}>Save Etate</button>
                </div> 
                </div>
           </div>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default Details;