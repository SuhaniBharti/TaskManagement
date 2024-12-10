import React,{useState,useEffect} from 'react'
import Cards from "../components/Home/Cards";
import axios from 'axios';
const Incompletedtasks = () => {
  const [Data, setData] = useState()
  const headers = {
    id:localStorage.getItem("id"),
    authorization:`Bearer ${localStorage.getItem("token")}`,
      
  };
  useEffect(() => {
    const fetch = async()=>{
      const response=await axios.get(
        `${window.location.origin}/api/v2/get-incomplete-tasks`,
        {headers}
      );
      setData(response.data.data);
    };
    fetch();
  });
  return (
    <div>
      <Cards home={"false"} data={Data}/>
    </div>
  );
}

export default Incompletedtasks