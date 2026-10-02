import React from 'react';
import jp from "/jp.png";
import { Link } from 'react-router';

const Logo = () => {
    return (
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src={jp} alt="JobPortal Logo" className="h-16 w-16 mr-[-16px]" />
          Job<span className="text-primary">Portal</span>
        </Link>
    );
};

export default Logo;