"use client";
import { useEffect } from 'react';
import $ from "jquery";
import Image from "next/image";
import imageLoader from './imageLoader';

const TestimonialSlider = () => {
    useEffect(() => {
        function detect_active() {
            var get_active = $("#dpp-slider .dpp_item:first-child").data("class");
            $("#dpp-dots li").removeClass("active");
            $("#dpp-dots li[data-class=" + get_active + "]").addClass("active");
        }

        $("#dpp-next").click(function () {
            var total = $(".dpp_item").length;
            $("#dpp-slider .dpp_item:first-child").hide().appendTo("#dpp-slider").fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });
            detect_active();
        });

        $("#dpp-prev").click(function () {
            var total = $(".dpp_item").length;
            $("#dpp-slider .dpp_item:last-child").hide().prependTo("#dpp-slider").fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });

            detect_active();
        });

        $("#dpp-dots li").click(function () {
            $("#dpp-dots li").removeClass("active");
            $(this).addClass("active");
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dpp-slider .dpp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dpp-slider")
                .fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });
        });

        $("body").on("click", "#dpp-slider .dpp_item:not(:first-child)", function () {
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dpp-slider .dpp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dpp-slider")
                .fadeIn();
            $.each($(".dpp_item"), function (index, dpp_item) {
                $(dpp_item).attr("data-position", index + 1);
            });

            detect_active();
        });
    }, []);

    return (
        <>
            <div id="sliderr">
                <h1>What People Think About Us</h1>
                <div className="dpp-wrap">
                    <div id="dpp-slider">
                        <div className="dpp_item" data-class="1" data-position="1">
                            <div className="dpp-content">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>Thomas Green</h2>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex</p>
                                <button className='btn'>Submit</button>
                            </div>
                            <div className="dpp-img">
                                <Image loader={imageLoader} className="img-fluid" src="Testii-1.png" alt="" width={380} height={100} />
                            </div>
                        </div>
                        <div className="dpp_item" data-class="2" data-position="2">
                            <div className="dpp-content">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>Thomas Green</h2>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex</p>
                                <button className='btn'>Submit</button>
                            </div>
                            <div className="dpp-img">
                                <Image loader={imageLoader} className="img-fluid" src="Testi-2.png" alt="" width={380} height={100} />
                            </div>
                        </div>
                        <div className="dpp_item" data-class="3" data-position="3">
                            <div className="dpp-content">
                                <div className="row">
                                    <div className="col-6">
                                        <h2>Thomas Green</h2>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                            <li><Image loader={imageLoader} src="review.png" className='review' alt="" width={30} height={30} /></li>
                                        </ul>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex</p>
                                <button className='btn'>Submit</button>
                            </div>
                            <div className="dpp-img">
                                <Image loader={imageLoader} className="img-fluid" src="Testi-3.png" alt="" width={380} height={100} />
                            </div>
                        </div>
                    </div>
                </div>
                <ul id="dpp-dots">
                    <li data-class="1" className="active"></li>
                    <li data-class="2"></li>
                    <li data-class="3"></li>
                </ul>
            </div>
        </>
    );
};

export default TestimonialSlider;
