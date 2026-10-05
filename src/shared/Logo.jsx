import React from 'react';
import jp from "../assets/logo-small.png";
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={jp} alt="JobPortal Logo" className=" w-12" />
          Job<span className="text-primary">Portal</span>
        </Link>
    );
};

export default Logo;