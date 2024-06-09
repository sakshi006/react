import { useState } from "react";
import { LOGO_URL } from "../utils/constants";


export const Header = () => {
    const [loginBtn, setLoginBtn] = useState(false)
    const setLogin = () => {
        setLoginBtn(!loginBtn)
    }
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button onClick={setLogin} className="login-btn">{loginBtn?"Login":"LogOut"}</button></li>
                </ul>
            </div>
        </div>
    );
};