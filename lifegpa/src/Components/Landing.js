import React from 'react';
import { Link } from "react-router-dom";

function Landing() {
    return (
    <div>
        <h1>Life GPA</h1>
        <h2>Welcome to the new you.</h2>
        <Link to="/register">
            <button>Create Account</button>
        </Link>
        <Link to="/login">
        <button>Log In</button>
        </Link>
    </div>
    )
}

export default Landing;