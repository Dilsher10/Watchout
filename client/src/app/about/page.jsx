"use client"
import React, { useEffect } from 'react'
import Image from "next/image";
import imageLoader from "../../../components/imageLoader";
import TestimonialSlider from '../../../components/TestimonialSlider';
import Navbar from '../../../components/Navbar'
import Topbar from '../../../components/Topbar'
import Footer from '../../../components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

const page = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
        });
    }, []);
    return (
        <>
            <Topbar />
            <Navbar />

            {/* Header */}

            <header>
                <div className="container aboutHeader">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <Image loader={imageLoader} src="logo.png" alt="" width={400} height={100} />
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat enim ad minim veniam, suscipit lobortis nisl ut aliquip ex ea commodo consequat enim ad minim veniam,</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1>we care about relation!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore</p>
                            <ul>
                                <li><Image loader={imageLoader} src="icon.png" alt="" width={17} height={15} /> Lorem ipsum dolor</li>
                                <li><Image loader={imageLoader} src="icon.png" alt="" width={17} height={15} /> Lorem ipsum dolor</li>
                                <li><Image loader={imageLoader} src="icon.png" alt="" width={17} height={15} /> Lorem ipsum dolor</li>
                                <li><Image loader={imageLoader} src="icon.png" alt="" width={17} height={15} /> Lorem ipsum dolor</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>


            <section className='about-sec-2' data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <Image loader={imageLoader} src="about-img-2.png" alt="" className='img-fluid' width={350} height={0} />
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1>Happy Users 47K+</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat enim ad minim veniam,</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className='about-sec-3' data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <h1>Members 47K+</h1>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat enim ad minim veniam,</p>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <Image loader={imageLoader} src="about-img-3.png" alt="" className='img-fluid' width={500} height={0} />
                        </div>
                    </div>
                </div>
            </section>



            {/* Testimonial Slider */}

            <section className='testimonialSec' data-aos="fade-up">
                <div className="container">
                    <TestimonialSlider />
                </div>
            </section>


            <Footer />

        </>
    )
}

export default page