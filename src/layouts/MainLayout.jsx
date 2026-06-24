import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';

const MainLayout = () => {
    return (
        <div className = "max-w-7xl mx-auto">
            {/* Header */}
            <Navbar></Navbar>
            {/* Main Content */}
            <Outlet></Outlet>

            {/* Footer */}

        </div>
    );
};

export default MainLayout;