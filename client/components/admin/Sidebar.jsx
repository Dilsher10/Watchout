import React from 'react'
import { FaTachometerAlt } from "react-icons/fa";
import { FaLaptop } from 'react-icons/fa';
import { FaTh } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';
import { FaChartBar } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <>
      <div className="sidebar pe-4 pb-3">
        <nav className="navbar navbar-light">
          <a href="index.html" className="navbar-brand mx-2 mb-3">
            <h3 className="title">DASHBOARD</h3>
          </a>
          <div className="d-flex align-items-center ms-4 mb-4">
            <div className="position-relative"></div>
            <div className="ms-3">
              <h6 className="mb-0"></h6>
              <span></span>
            </div>
          </div>
          <div className="navbar-nav w-100">
            <a href="" className="nav-item nav-link active"><div className="iconBox"><FaTachometerAlt className='sidebarIcon' /></div><span>Dashboard</span></a>
            <a href="" className="nav-item nav-link"><div className="iconBox"><FaLaptop className='sidebarIcon' /></div><span>Elements</span></a>
            <a href="" className="nav-item nav-link"><div className="iconBox"><FaTh className='sidebarIcon' /></div><span>Widgets</span></a>
            <a href="" className="nav-item nav-link"><div className="iconBox"><FaKeyboard className='sidebarIcon' /></div><span>Forms</span></a>
            <a href="" className="nav-item nav-link"><div className="iconBox"><FaTable className='sidebarIcon' /></div><span>Tables</span></a>
            <a href="" className="nav-item nav-link"><div className="iconBox"><FaChartBar className='sidebarIcon' /></div><span>Charts</span></a>
            <a href="" className="nav-item nav-link"><div className="iconBox"><FaFileAlt className='sidebarIcon' /></div><span>Pages</span></a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Sidebar