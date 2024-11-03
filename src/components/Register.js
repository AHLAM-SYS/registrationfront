import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        grade: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://registrationbackend-5rub.onrender.com/api/students', formData);
            alert(`Registration successful: ${response.data.name}`);
        } catch (error) {
            console.error(error);
            alert('Registration failed!');
        }
    };

    return (
        <div className="container mt-5">
            <h2>School Registration</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Name</label>
                    <input type="text" name="name" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Age</label>
                    <input type="number" name="age" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" name="email" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Grade</label>
                    <input type="text" name="grade" className="form-control" onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" name="password" className="form-control" onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
};

export default Register;
