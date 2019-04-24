import React from 'react';
import Button from '../../components/button';

const SignInLinks = () => (
   <ul className="sign-in-nav">
    <li>
      <Button className="theme-btn-outline-pink" href="/login">
        Login
      </Button>
    </li>
    <li>
      <Button className="theme-btn-filled-white" href="/register">
        Register
      </Button>
    </li>
  </ul>
);
export default SignInLinks;
