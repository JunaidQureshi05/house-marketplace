import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowRightComponent } from '../assets/svg/keyboardArrowRightIcon.svg';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import visibilityIcon from '../assets/svg/visibilityIcon.svg';
const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    try {
      if (userCredential.user) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <div className="passwordInputDiv">
              <input
                type={showPassword ? 'text' : 'password'}
                className="passwordInput"
                placeholder="Password"
                id="password"
                value={password}
                onChange={onChange}
              />
              <img
                src={visibilityIcon}
                className="showPassword"
                alt="showPassword"
              />
            </div>
            <Link to="/forgot-password" className="forgotPasswordLink">
              Forgot Password
            </Link>
            <div className="signInBar">
              <p className="signInText">Sign In</p>
              <button className="signInButton">
                <ArrowRightComponent fill="#fff" width="34px" height="34px" />
              </button>
            </div>
          </form>
          {/* Google OAuth */}
          <Link to="/sign-up" className="registerLink">
            Sign Up Instead
          </Link>
        </main>
      </div>
    </>
  );
};

export default SignIn;
