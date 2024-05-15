import React, { useRef } from "react";
import styles from "../Styles/SignIn.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthValue } from "../authContext";

export default function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const { signIn } = useAuthValue();

   function handleSubmit(e) {
    e.preventDefault(); // Prevents page from reloading when clicking submit

    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    };

    const status =  signIn(data);

    // Check if login was successful
    if (status) {
      navigate("/");
    } else {
      // If login fails, clear the password field
      passwordRef.current.value = "";
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputForm}>
        <h1>SignIn</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email..."
            required
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Enter Password..."
            required
            ref={passwordRef}
          />
          <button>Submit</button>
        </form>
        <br />
        <span>or &nbsp;</span>
        <NavLink to="/signup">Create New Account</NavLink>
      </div>
    </div>
  );
}
