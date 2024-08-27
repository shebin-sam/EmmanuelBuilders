import React, { useState } from 'react';
import axios from 'axios';

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async () => {
        try {
            const response = await axios.post('/signin', { username, password });
            console.log(response.data);
        } catch (error) {
            console.error("There was an error signing in!", error);
        }
    };

    return (
        <div className="container">
            <h2>Sign In</h2>
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleSignIn}>Sign In</button>
        </div>
    );
}

export default SignIn;
