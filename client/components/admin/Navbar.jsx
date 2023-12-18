"use client"
import React from 'react'
import { useState } from 'react';

const Navbar = () => {

    const [token, setToken] = useState(localStorage.getItem("token"));

    const handleLogout = () => {
        setToken("");
        localStorage.removeItem("token");
        alert("Logout Successfully");
        window.location.href = '/admin/login';
    };

    return (
        <>
            <nav className="navbar navbar-expand navbar-light sticky-top px-4 py-0">
                <div className="navbar-nav align-items-center ms-auto">
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src="/admin/user.jpg" alt="" style={{ width: '40px; height: 40px' }} />
                            <span className="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" className="dropdown-item">My Profile</a>
                            <a href="#" className="dropdown-item">Settings</a>
                            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;