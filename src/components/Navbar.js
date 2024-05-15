// import React, { useState } from "react";
import styles from "../Styles/Navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";
import { useAuthValue } from "../authContext";

export default function Navbar() {
  const {isLoggIn, signOut} = useAuthValue();
  //  const[isLoggIn,setLoggIn] = useState(false)
  return (
    <>
      <div className={styles.navbarContainer}>
        <div className={styles.appName}>
          <NavLink to="/">
            <i className="fa-solid fa-shop"></i>
            BuyBusy
          </NavLink>
        </div>

        <div className={styles.navLinks}>
          <NavLink to="/">
            <span>
              <i className="fa-solid fa-house"></i>
              Home
            </span>
          </NavLink>

          {isLoggIn && (
            <NavLink to="/myorder">
              <span>
                <i className="fa-solid fa-bag-shopping"></i>
                My Order
              </span>
            </NavLink>
          )}

          {isLoggIn && (
            <NavLink to="/cart">
              <span>
                <i className="fa-shard fa-solid fa-cart-shopping"></i>
                Cart
              </span>
            </NavLink>
          )}

          <NavLink to={!isLoggIn ? "/signin" : "/"}>
            <span>
              {!isLoggIn ? (
                <>
                  <i className="fa-solid fa-right-to-bracket"></i>
                  SignIn
                </>
              ) : (
                <>
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span onClick={signOut}>SignOut</span>
                </>
              )}
            </span>
          </NavLink>
        </div>
      </div>
      <Outlet />
    </>
  );
}
