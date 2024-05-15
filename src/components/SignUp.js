import React, { useRef } from "react";
import styles from "../Styles/SignIn.module.css"
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../authContext";

export default function SignUp() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const nameRef = useRef();

    const navigate = useNavigate();

    const {singUp} = useAuthValue();

    function handleSubmit(e){
        e.preventDefault();  //this line will prevent from render page when click submit

        const data = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
        }
        singUp(data);
        navigate("/signin");
    }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputForm}>
          <h1>SignUp</h1>

          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter Name..."
              required
              ref={nameRef}
            />
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
        </div>
      </div>
    </>
  );
}
