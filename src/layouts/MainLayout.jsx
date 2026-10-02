import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const MainLayout = () => {
    return (
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header>
          <Navbar></Navbar>
        </header>
        {/* Main Content */}
        <main className="min-h-[calc(100vh-300px)]">
          <Outlet></Outlet>
        </main>

        {/* Footer */}
          <Footer></Footer>
      </div>
    );
};

export default MainLayout;