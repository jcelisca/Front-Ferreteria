import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { auth } from "../firebase/credentials";
import { signOut } from "firebase/auth";
import { useNavigate} from "react-router-dom";
import {AuthContext} from "../context/auth";

const Navbar = () => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleSignout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <nav>
            <h3>
                <Link to="/">Messenger</Link>
            </h3>
            <div>
                {user ? (
                    <>
                        <Link to="/inventory">Inventory</Link>
                        <Link to="/profile">Profile</Link>
                        <button className="btn" onClick={handleSignout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/register">Register</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;