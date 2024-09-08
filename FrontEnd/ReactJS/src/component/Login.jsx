import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [formdata, setFormData] = useState({
        email: '',
        password: '',
    });

    const { email, password } = formdata;

    const onChangeText = (e) => {
        setFormData({ ...formdata, [e.target.name]: e.target.value });
    };

    const loginFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', formdata);
            console.log(res.data);
            // Optionally, reset form data after login
            setFormData({
                email: '',
                password: '',
            });
        } catch (error) {
            console.log('error: ' + error);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginFormSubmit}>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChangeText}
                    placeholder="Enter Email"
                />
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChangeText}
                    placeholder="Enter Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
