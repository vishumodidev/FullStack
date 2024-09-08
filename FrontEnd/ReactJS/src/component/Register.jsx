import React, { useState } from 'react';
import axios from 'axios';

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });

    const { username, password, email } = formData;

    const onChangeText = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const registerDetails = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', formData);
            console.log(res.data);
            // Clear form data after successful registration
            setFormData({
                username: '',
                password: '',
                email: '',
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div>Register</div>
            <form onSubmit={registerDetails}>
                <div>
                    <input
                        type="text"
                        value={username}
                        name="username"
                        onChange={onChangeText}
                        placeholder="Enter Username"
                    />
                    <input
                        type="password"
                        value={password}
                        name="password"
                        onChange={onChangeText}
                        placeholder="Enter Password"
                    />
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={onChangeText}
                        placeholder="Enter Email ID"
                    />
                </div>
                <input type="submit" value="Register" />
            </form>
        </>
    );
}

export default Register;
