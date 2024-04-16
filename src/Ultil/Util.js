const getData = ()=>{
    const lists = localStorage.getItem("savedEstate");
    if(lists){
        return JSON.parse(lists)
    }
    return [];
}
const saveData = (lists)=>{
    localStorage.setItem("savedEstate",JSON.stringify(lists))
}
const addData = (list)=>{
    const lists = getData();
    lists.push(list);
    saveData(lists)
}
export {getData,saveData,addData}