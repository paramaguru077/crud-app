import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Home = () => {
  const API = 'http://localhost:4000';
  const [data, setData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  

  useEffect(() => {
    fetchdata();
  }, []);

  const handleDelete = async(id)=>{
    const response = await axios.delete(`http://localhost:4000/delete/${id}`);
    setData(data.filter(student => student.id!==id));

  }

  return (
    <div>
      <h1 className="title">Student List</h1>
      <div className="container">
        <div className="table-header">
          <Link to="/create"><button className="create-btn">Create +</button></Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((student, id) => (
              <tr key={id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.Email}</td>
                <td>
                  <Link to={`/read/${student.id}`}> <button className='edit-button' style={{background:"blue"}}> Read</button></Link>
                   <Link to={`/edit/${student.id}`}> <button className="edit-button">Edit</button></Link>
                  <button className="delete-button" onClick={()=>handleDelete(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
