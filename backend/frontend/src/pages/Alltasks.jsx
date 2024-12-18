import React from 'react'
import Cards from '../components/Home/Cards'
import { IoMdAddCircle } from "react-icons/io";
import InputData from '../components/Home/InputData';
import { useState,useEffect } from 'react';
import axios from 'axios';
const Alltasks = () => {
  const [inputdiv, setinputdiv] = useState("hidden");
  const [Data,setData] = useState();
  const [UpdatedData, setUpdatedData] = useState(
    {
      id:"",
    title:"",
    desc:""
    }
  );
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
      
  };
  useEffect(() => {
    const fetch = async()=>{
      const response=await axios.get(
        `http://localhost:1000/api/v2/get-all-tasks`,
        {headers}
      );
      setData(response.data.data);
    };
    if(localStorage.getItem("id") && localStorage.getItem("token")){
      fetch();
    }
   
  });
 

  return (
    <>
    <div>
      <div className="w-full flex justify-end item p-4"> 
        <button onClick={()=>setinputdiv("fixed")}>
         
        <IoMdAddCircle className="text-4xl text-gray-400 hover:text-gray-100 transition-all duration-300"/>
        </button>
        
      </div>
      {Data &&(
      <Cards 
      home={"true"} 
      setinputdiv={setinputdiv} 
      data={Data.tasks} 
      setUpdatedData={setUpdatedData}/>)}
    </div>
    <InputData 
     inputdiv={inputdiv}
      setinputdiv={setinputdiv} 
      UpdatedData={UpdatedData}
      setUpdatedData={setUpdatedData}
      />
    </>
  );
};

export default Alltasks