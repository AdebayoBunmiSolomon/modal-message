/** @format */

import React, { useRef, useState } from 'react';
import Header from '../../component/pages.component/Header';
import {
  faSignIn,
  faClose,
  faCloudMoon
} from '../../../node_modules/font-awesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '../../../node_modules/font-awesome/react-fontawesome';
import Error from '../../component/message.component/Error';
import './signup.style.css';

function Signup() {
  //To show error message component
  const [buttonPopup, setButtonPopup] = useState(false);
  const [errorText, setErrorText] = useState('');

  //To get input text
  const txtUsername = useRef(null);
  const txtPassword = useRef(null);

  //To set and initialize dark mode functionality;
  const [darkMode, setDarkMode] = useState('main-container-default-mode');
  const [modeText, setModeText] = useState('Default Mode ');
  const [isToggleState, setIsToggleState] = useState(true);

  //To set and initialize body dark mode functionality
  const [bodyDarkMode, setBodyDarkMode] = useState('body-default-mode');

  const btnSignUp = () => {
    if (txtUsername.current.value === '') {
      setButtonPopup(true);
      setErrorText('Username is empty');
      txtUsername.current.focus();
      return;
    }

    if (txtPassword.current.value === '') {
      setButtonPopup(true);
      setErrorText('Password is empty');
      return;
    }
  };

  const btnToggle = () => {
    if (isToggleState === true) {
      setDarkMode('main-container-dark-mode');
      setModeText('Dark Mode');
      setBodyDarkMode('body-dark-mode');
      setIsToggleState(false);
    } else {
      setDarkMode('main-container-default-mode');
      setModeText('Default Mode');
      setBodyDarkMode('body-default-mode');
      setIsToggleState(true);
      return;
    }
  }

  return (
    <div className={bodyDarkMode}>
      <Header />

      <div className="container text-end">
        <span className="txt-dark-mode-default text-white">{modeText}</span>&nbsp;
        <FontAwesomeIcon icon={faCloudMoon} className='text-warning' />
        <div
          className="position-relative form-check form-switch"
        >
          <input
            type="checkbox"
            className="form-check-input position-absolute top-0 end-0"
            onClick={btnToggle}
          />
        </div>
      </div>

      <div className={`container w-70 text-center ${darkMode}`}>
        <div className='container w-100 mt-5 inner-div'>
          <div className='container-fluid'>
            <input type='text' className='form-control' ref={txtUsername} placeholder='Enter username'></input>
          </div>
          <div className='container-fluid mt-3'>
            <input type='password' className='form-control' ref={txtPassword} placeholder='Enter password'></input>
          </div>
          <div className='container-fluid mt-3 text-end'>
            <button className='btn btn-primary' onClick={btnSignUp}>
              Sign in  <FontAwesomeIcon icon={faSignIn} />
            </button>
            <button className='btn btn-danger' style={{ marginLeft: '5px' }}>
              Close Page <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
        </div>
      </div>
      <Error trigger={buttonPopup} setTrigger={setButtonPopup} errorText={`${errorText} `} />
    </div >
  )
}

export default Signup;
