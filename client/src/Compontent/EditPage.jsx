import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import '../Style/CreatePage.css';

const EditPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Initialize user state to store the form data
    const [user, setUser] = useState({
        name: "",
        email: ""
    });

    // Fetch the existing user data when the component loads
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://crud-app-ng1o.onrender.com/update/${id}`);
                const data = response.data[0];
                setUser({
                    name: data.name,
                    email: data.Email
                });
            } catch (err) {
                console.log("Error:", err.message);
            }
        };
        fetchUserData();
    }, [id]);

    // Handle input changes
    const handleChanges = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Send the updated data to the server
    const sendData = async () => {
        try {
            const response = await axios.put(`https://crud-app-ng1o.onrender.com/update/${id}`, user);
            console.log(response);
        } catch (err) {
            console.log("Error:", err);
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        sendData();
        navigate('/');
    };

    return (
        <div className='box'>
            <h2>Update Student Details</h2>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type='text'
                    placeholder='Enter the name'
                    value={user.name}
                    name='name'
                    onChange={handleChanges}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type='text'
                    placeholder='Enter the email'
                    value={user.email}
                    name='email'
                    onChange={handleChanges}
                />

                <button className='sub-btn'>Update</button>
            </form>
        </div>
    );
};

export default EditPage;
