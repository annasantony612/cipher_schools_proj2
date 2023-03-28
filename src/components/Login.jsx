import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Main from './Main';
import Button from './Button';
import LoginBG from '../assets/LoginBG.png';
import UserBox from './UserBox';
import Followers from './Followers';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password, name }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
        
          window.location.href = '/main';
          setName(name);
        } else {
          setError('Invalid email or password');
        }
      })
      .catch(err => {
        console.error(err);
        setError('An error occurred during login');
      });
  };

  return (
    <div className='BG'>
      <img src={LoginBG} />
      <div className='Login'>
        <div className='LoginContainer'>
          <h1>Welcome To Cipher Schools!!</h1>
        </div>
        <div className='LoginContent'>
          <div className='LoginTextN'>Name</div>
          <input
            className='input'
            type='text'
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {error && <div className='LoginError'>{error}</div>}
          <div className='LoginText'>Email</div>
          <input
            className='input'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <div className='LoginText'>Password</div>
          <input
            className='input'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <div className='LoginButton'>
          <Link to='/Main' link={Main}>
            <Button onClick={handleLogin}>Login</Button>
          </Link>
        </div>
      </div>
 
    </div>
  );
};

export default Login;






















