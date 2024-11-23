import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import '../Style/ReadPage.css'
const ReadPage = () => {
    const {id}= useParams();
    const [student,setStudent]= useState({});
    const fetchApi = async()=>{
       try{
        const response = await axios.get(`https://crud-app-ng1o.onrender.com/read/${id}`)
        setStudent(response.data[0]);
        

       }
       catch(err){
           console.log("error :",err)
       }

    }
    useEffect(()=>{
        fetchApi();
    },[])
  return (
    <div className='container-box'>
       <h2 className='titleh3'>Student Details</h2>
       <h3 > ID:{student.id}</h3>
       <h3 > NAME: {student.name}</h3>
       <h3>EMAIL : {student.Email}</h3>
       <div className='btn-box'>
       <Link to={`/edit/${student.id}`}> back</Link>
       <button>Edit</button>

       </div>
       

    </div>
  )
}

export default ReadPage