import { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import { getData } from "../../Ultil/Util";
import SavedCart from "../../Components/SavedCard/SavedCart";
import Bread from "../../Components/Bread/Bread";
const SavedEstate = () => {
    document.title = "Nest.X | Saved Estate"
    const [list,setList] = useState([]);
    const [disList,setDisList] = useState([]);
    useEffect(()=>{
        fetch("/estates.json")
        .then(res => res.json())
        .then(data => setList(data))
    },[])
    useEffect(()=>{
        if(list.length > 0){
            const localReadData = getData();
            const readListtemp = [];
            for(const id of localReadData){
                const book = list.find(item => item.id === id);
                if(book){
                    readListtemp.push(book)
                }
            }
            setDisList(readListtemp);
        }
    },[list]);   
    return (
       <div>
        <Nav></Nav>
        <Bread title={"Saved Estate"}></Bread>
         <div className='container mx-auto px-3'>
            <div className="">
               {disList.map((item,i)=> <SavedCart key={i} item={item}></SavedCart>)}
            </div>
        {disList.length ? <h1></h1> : <h1 className="text-xl md:text-2xl font-semibold">No Saved Estate Found</h1>}
        </div>
       </div>
    );
};

export default SavedEstate;