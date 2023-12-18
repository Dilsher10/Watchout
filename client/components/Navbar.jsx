import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import imageLoader from './imageLoader';

const Navbar = () => {
    return (
        <section className='navBar sticky-top'>
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <Image loader={imageLoader} src="logo.png" alt="" className='logo' width={0} height={0} layout='responsive' />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" href="#">Action</Link></li>
                                        <li><Link className="dropdown-item" href="#">Another action</Link></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/search">Search</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/about">About us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href="/contact">Contact</Link>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <button className="btn btn-outline-success" id='btn-1'>Login</button>
                                <button className="btn btn-outline-success" id='btn-2'>Signup</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    )
}

export default Navbar;