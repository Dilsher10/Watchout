import React from 'react'
import Image from "next/image";
import imageLoader from './imageLoader';

const Topbar = () => {
    return (
        <section className='topBar'>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card">
                            <div className="row g-0">
                                <div className="col-md-1">
                                    <Image loader={imageLoader} src="phone.png" className="img-fluid" alt="..." width={30} height={30}/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">+1234567890</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card" id='card-2'>
                            <div className="row g-0">
                                <div className="col-1">
                                    <Image loader={imageLoader} src="news.png" className="img-fluid" alt="..." width={30} height={30}/>
                                </div>
                                <div className="col-6">
                                    <div className="card-body" id='newsText'>
                                        <p className="card-text">News & Alert</p>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <ul>
                                        <li><Image loader={imageLoader} src="x.png" alt="" width={20} height={20}/></li>
                                        <li><Image loader={imageLoader} src="insta.png" alt="" width={20} height={20}/></li>
                                        <li><Image loader={imageLoader} src="facebook.png" alt="" width={20} height={20}/></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Topbar