import React, { useState } from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import '../Style/CreatePage.css'
const CreatePage = () => {

 const navigate = useNavigate(); 
  const initalState = {
    id:"",
    name:"",
    email:""
  }
  const[user,setUser]= useState(initalState);

  const handleChanges=(e)=>{
      const{name,value}=e.target;
      const idlen = user.lenght+1;
      setUser({...user,[name]:value}) 

  }
  const sendData = async()=>{
    try{
      const response = await axios.post("https://crud-app-ng1o.onrender.com/student",user);
      console.log(response);


    }
    catch(err){
      console.log("error",err);

    }
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
      sendData();
      navigate('/');
    
   

  }
  return (
    <div className='box'>
        <h2>Add Students Details</h2>
        <form className='form' onSubmit={handleSubmit}>
            <label htmlFor="name"> Name:</label>
            <input  
            type='text'
            placeholder='Enter the name'
            value={user.name}
            name='name'

            onChange={handleChanges}/>
            

            <label htmlFor="Email">Email:</label>
            <input 
            type='text'
            placeholder='Enter the name'
            value={user.email}
            name='email'
            onChange={handleChanges}/>

            <button className='sub-btn'>Submit</button>
            


        </form>
    </div>
  )
}

export default CreatePage