import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__links">
                <Link className="navbar__link" to="/coins">
                    Coins
                </Link>
                <Link className="navbar__link" to="about">
                    About
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
