import React from "react";
import styles from "../Styles/Navbar.module.css"
import {NavLink} from "react-router-dom"

export default function Navbar(){
    return(
        <>
        <div className={styles.navbarContainer}>
            <div className={styles.appName}>
                <NavLink to="/">
                    <i class="fa-solid fa-shop"></i>
                    BuyBusy
                </NavLink>

            </div>

            <div className={styles.navLinks}>
                <NavLink to="/">
                   <span>
                   <i class="fa-solid fa-house"></i>
                   Home
                   </span>
                </NavLink>

                <NavLink to="/">
                   <span>
                   <i class="fa-solid fa-bag-shopping"></i>
                   My Order
                   </span>
                </NavLink>

                <NavLink to="/cart">
                   <span>
                   <i class="fa-shard fa-solid fa-cart-shopping"></i>
                   Cart
                   </span>
                </NavLink>

                <NavLink to="/">
                   <span>
                   <i class="fa-shard fa-solid fa-cart-shopping"></i>
                   Cart
                   </span>
                </NavLink>

            </div>
            
        </div>
        </>
    )
}