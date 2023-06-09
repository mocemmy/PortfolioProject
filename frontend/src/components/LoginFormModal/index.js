// frontend/src/components/LoginFormModal/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from 'react-router-dom';

function LoginFormModal() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors({});
    return dispatch(sessionActions.login({ credential, password }))
      .then(closeModal)
      .then(() => history.push('/'))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) {
          setErrors(data.errors);
        }
      });
  };

  const demoUser = () => {
    setCredential("demo@user.io")
    setPassword("password")
  }

  return (
    <>
      <h1 className="login-label">Log In</h1>
      <form id="login-form" onSubmit={handleSubmit}>
        
      {errors.credential && (
          <p className="errors">{errors.credential}</p>
        )}
          <input className="input"
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required
            placeholder=" Username or Email"
          />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="password"
          />
        <div className="login-buttons-container">
        <button id="login-button" type="submit" disabled={credential.length < 4 || password.length < 6 ? true : false}>Log In</button>
        <button id="demo-user-button" type="submit" onClick={demoUser}>Log in as Demo User</button>
        </div>
      </form>
    </>
  );
}

export default LoginFormModal;