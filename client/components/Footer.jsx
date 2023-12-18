import React from 'react'
import Image from "next/image";
import imageLoader from './imageLoader';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Image loader={imageLoader} src="logo.png" alt="" width={210} height={60}/>
                        <div className="card mb-4 mt-4">
                            <div className="row g-0">
                                <div className="col-md-1">
                                    <Image loader={imageLoader} src="footer_icon.png" className="img-fluid rounded-start" alt="..." width={18} height={10}/>
                                </div>
                                <div className="col-md-11">
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-4">
                            <div className="row g-0">
                                <div className="col-md-1">
                                    <Image loader={imageLoader} src="footer_icon.png" className="img-fluid rounded-start" alt="..." width={18} height={10}/>
                                </div>
                                <div className="col-md-11">
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-1">
                                    <Image loader={imageLoader} src="footer_icon.png" className="img-fluid rounded-start" alt="..." width={18} height={10}/>
                                </div>
                                <div className="col-md-11">
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <Image loader={imageLoader} src="blog-2.png" className='img-fluid' id='footerImg' alt="" width={0} height={0} layout='responsive'/>
                        <div className="card mb-4">
                            <div className="row g-0">
                                <div className="col-md-1">
                                    <Image loader={imageLoader} src="footer_icon.png" className="img-fluid rounded-start" alt="..." width={18} height={10}/>
                                </div>
                                <div className="col-md-11">
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-1">
                                    <Image loader={imageLoader} src="footer_icon.png" className="img-fluid rounded-start" alt="..." width={18} height={10}/>
                                </div>
                                <div className="col-md-11">
                                    <div className="card-body">
                                        <p className="card-text">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <h1>Our News Signup</h1>
                        <p className='footerText'>Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam</p>
                        <form action="">
                            <input type="text" className='form-control' placeholder='Enter Email' />
                            <button className='btn'>Message</button>
                            <h4>Follow Us</h4>
                            <Image loader={imageLoader} src="facebook.png" alt="" width={20} height={20} />
                            <Image loader={imageLoader} src="insta.png" className='mx-3' alt="" width={20} height={20} />
                            <Image loader={imageLoader} src="x.png" alt="" width={20} height={20} />
                        </form>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col">
                        <p className='bottomText-1'>@Copyright 2023 By your WatchOutAlerts</p>
                    </div>
                    <div className="col">
                        <p className='bottomText-2'>Design by Arthur James (OTB Design Solutions)</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer