"use client";
import { useEffect } from 'react';
import $ from "jquery";
import Image from "next/image";
import imageLoader from './imageLoader';

const Slider = () => {
    useEffect(() => {
        function detect_active() {
            var get_active = $("#dp-slider .dp_item:first-child").data("class");
            $("#dp-dots li").removeClass("active");
            $("#dp-dots li[data-class=" + get_active + "]").addClass("active");
        }

        $("#dp-next").click(function () {
            var total = $(".dp_item").length;
            $("#dp-slider .dp_item:first-child").hide().appendTo("#dp-slider").fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });
            detect_active();
        });

        $("#dp-prev").click(function () {
            var total = $(".dp_item").length;
            $("#dp-slider .dp_item:last-child").hide().prependTo("#dp-slider").fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });

            detect_active();
        });

        $("#dp-dots li").click(function () {
            $("#dp-dots li").removeClass("active");
            $(this).addClass("active");
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dp-slider .dp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dp-slider")
                .fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });
        });

        $("body").on("click", "#dp-slider .dp_item:not(:first-child)", function () {
            var get_slide = $(this).attr("data-class");
            console.log(get_slide);
            $("#dp-slider .dp_item[data-class=" + get_slide + "]")
                .hide()
                .prependTo("#dp-slider")
                .fadeIn();
            $.each($(".dp_item"), function (index, dp_item) {
                $(dp_item).attr("data-position", index + 1);
            });

            detect_active();
        });
    }, []);

    return (
        <>
            <div id="slider">
                <Image loader={imageLoader} src="slider-img.png" className="img-fluid" id="sliderImg" alt="" width={130} height={10} />
                <div className="dp-wrap">
                    <div id="dp-slider">
                        <div className="dp_item" data-class="1" data-position="1">
                            <div className="dp-content">
                                <h2>Cheating</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <Image loader={imageLoader} src="testi-1.png" className="img-fluid rounded-start" alt="..." width={0} height={0} layout='responsive' />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><Image loader={imageLoader} src="location.png" alt="" width={15} height={18}/> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <Image loader={imageLoader} className="img-fluid" src="slider-1.png" alt="" width={300} height={100} />
                            </div>
                        </div>
                        <div className="dp_item" data-class="2" data-position="2">
                            <div className="dp-content">
                                <h2>Cheating</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <Image loader={imageLoader} src="testi-1.png" className="img-fluid rounded-start" alt="..." width={0} height={0} layout='responsive' />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><Image loader={imageLoader} src="location.png" alt="" width={15} height={18}/> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <Image loader={imageLoader} className="img-fluid" src="slider-2.png" alt="" width={300} height={100} />
                            </div>
                        </div>
                        <div className="dp_item" data-class="3" data-position="3">
                            <div className="dp-content">
                                <h2>Cheating</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <Image loader={imageLoader} src="testi-1.png" className="img-fluid rounded-start" alt="..." width={0} height={0} layout='responsive' />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><Image loader={imageLoader} src="location.png" alt="" width={15} height={18}/> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <Image loader={imageLoader} className="img-fluid" src="slider-3.png" alt="" width={300} height={100} />
                            </div>
                        </div>
                        <div className="dp_item" data-class="4" data-position="4">
                            <div className='dp-content'>
                                <h2>Cheating</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <div className="card">
                                    <div className="row g-0">
                                        <div className="col-md-1">
                                            <Image loader={imageLoader} src="testi-1.png" className="img-fluid rounded-start" alt="..." width={0} height={0} layout='responsive' />
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card-body">
                                                <h5 className="card-title">anna ken</h5>
                                                <p className="card-text"><Image loader={imageLoader} src="location.png" alt="" width={15} height={18}/> California</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="dp-img">
                                <Image loader={imageLoader} className="img-fluid" src="slider-4.png" alt="" width={300} height={100} />
                            </div>
                        </div>
                    </div>

                </div>
                <ul id="dp-dots">
                    <li data-class='1' class='active'></li>
                    <li data-class='2'></li>
                    <li data-class='3'></li>
                    <li data-class='4'></li>
                </ul>
            </div>
        </>
    );
};

export default Slider;
