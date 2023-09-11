import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add your signup logic here.
    // After signup, navigate back to main page with the user logged in.
    
    navigate('/', {  });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>회원가입</h1>
        <input id="id" name="id" classtype="text" placeholder="ID" />
        <input id="email" name="email" placeholder="Email" />
        <input id="password" name="password" type="password" placeholder="Password" />
        <input id="passworda" name="passworda" placeholder="Password Again" />
        <input id="telNum" name="telNum" type="text" placeholder="Phone Number" />
        <input id="birth" name="birth" type="text" placeholder="Birth ex)990730"/>
        <button onClick={handleSignup}>회원가입</button>
        <Link to="/" className="signup-link">Go back to main page</Link>
      </div>
    </div>
  );
}

export default Signup;
