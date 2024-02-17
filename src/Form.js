import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmail(newValue);
    setEmailValid(validateEmail(newValue));
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(newValue);
    setPasswordValid(validatePassword(newValue));
  };

  const handleConfirmPasswordChange = (e) => {
    const newValue = e.target.value;
    setConfirmPassword(newValue);
    setConfirmPasswordValid(newValue === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div className="form-container">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{ border: emailValid ? '2px solid green' : '2px solid red' }}
        />
        {!emailValid && <p className="error">Please enter a valid email address</p>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ border: passwordValid ? '2px solid green' : '2px solid red' }}
        />
        {!passwordValid && <p className="error">Password must be at least 8 characters long</p>}
      </div>
      <div className="form-group">
        <label>Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{ border: confirmPasswordValid ? '2px solid green' : '2px solid red' }}
        />
        {!confirmPasswordValid && <p className="error">Passwords do not match</p>}
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
