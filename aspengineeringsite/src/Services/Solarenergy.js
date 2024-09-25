import React, { useEffect } from 'react'
import Appheader from '../Appbar'
import Footer from '../Footer'
import '../App.css'
import Img1 from "../images/hero/hero_shape_1_1.svg"
import Img2 from "../images/shape/dots_1.svg"
import Img3 from "../images/hero/hero_arrow.svg"
import Img4 from "../images/hero/slider1.png"
import Img5 from "../images/hero/hero_shape_1_1.svg"
import Img6 from "../images/hero/slider2.png"
import Img7 from "../images/hero/slider3.png"
import Img8 from "../images/theme-img/title_icon_white.svg"
import Img9 from "../images/icon/about_badge.svg"
import Img10 from "../images/shape/dots_1.svg"
import Img11 from "../images/icon/about_feature_1.svg"
import Img12 from "../images/icon/about_feature_2.svg"
import Img13 from "../images/shape/dots_1.svg"
import Img14 from "../images/shape/dots_2.svg"
import Img15 from "../images/theme-img/title_icon.svg"
import Slider from 'react-slick'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import { IconButton } from '@mui/material';
import Scrollanimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { ScrollToTop } from "react-simple-scroll-up";



const NextArrow = ({ onClick }) => {
    return (
        <div
            className="next-slick-arrow"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63A27" stroke-width="2">
                <path d="M12 4L20 12L12 20" />
            </svg>
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div
            className="prev-slick-arrow"
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#E63A27" stroke-width="2">
                <path d="M12 20L4 12L12 4" />
            </svg>
        </div>
    );
};


function Solarenergy() {


    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        swipeToSlide: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };



    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])



    return (
        <>
            <Appheader first={"services"} />
            <ScrollToTop bgColor="#ff0400" symbol="&#8593;" strokeFillColor="white" style={{ zIndex: 999 }} />

            <Scrollanimation animateIn="fadeInLeft" >
                <div class="breatcome3-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="breatcome-content">
                                    <div class="breatcome-title">
                                        <h1>Power Plant Work</h1>
                                    </div>
                                    <div class="bratcome-text">
                                        <ul>
                                            <li><a>Services</a></li>
                                            <li>Power Plant Work</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Scrollanimation>

            <div class="project-details-section">
                <div style={{ padding: '5% 8%' }}>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="projetct-details-image">
                                <Scrollanimation animateIn="fadeInLeft" >
                                    <img src={require("../images/resource/pp1.jpg")} alt="Service" />
                                </Scrollanimation>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="info-area">
                                <div class="sub-title">
                                    <h5>information</h5>
                                </div>
                                <ul class="info">
                                    <li>
                                        <h6>project name:</h6>
                                        <p>Power plant &amp;  design</p>
                                    </li>
                                    {/* <li>
                                        <h6>client:</h6>
                                        <p>theme pvt ltd</p>
                                    </li> */}
                                    <li>
                                        <h6>category:</h6>
                                        <p>commercial</p>
                                    </li>
                                    <li>
                                        <h6>delivery mode:</h6>
                                        <p>in hand delivery</p>
                                    </li>
                                    <li>
                                        <h6>location:</h6>
                                        <p>Tirunelveli</p>
                                    </li>
                                    <li>
                                        <h6>share:</h6>
                                        <ul class="d-flex">
                                            <li><a href='https://www.facebook.com/people/Aps-Techh/pfbid02yEy6wg1TQKCJVE9ZeuRV1QbnFMj2VfFt22QFeFLAUQU2HFhVodPU36ijNe3eNx3nl/?mibextid=ZbWKwL' target='_blank'><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href='https://www.instagram.com/aps_technologies.tvl/?igsh=NmZ1bm14ZDZweHMz' target='_blank'><i class="fab fa-instagram"></i></a></li>
                                            <li><a href="#!"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="title">
                                <h4>Power Plant Works</h4>
                            </div>
                            <p>We are highly proficient in the services related to the construction, maintenance and
                                optimization of power plant units such as thermal, hydroelectric and nuclear. Our team is
                                very adept at handling all sorts of power plant projects, navigating the complexities, starting
                                with feasibility tests, site selection, then designing and installation of equipment into
                                seamlessly managing all the site operations.</p>
                        </div>
                        <div class="col-lg-12 list-part">
                            <div class="row align-items-end">
                                <div class="col-lg-8 col-md-12">
                                    <div class="title">
                                        <h4>Turnkey Solutions for Power Plant Construction:</h4>
                                    </div>
                                    <p>We are specialized in offering end-to
                                        end solutions for power plant construction and giving guidance through each step of the
                                        process from its conceptualization to execution. Whether it's designing the layout, selecting
                                        equipment, or managing the construction phase, we ensure a seamless and efficient project
                                        delivery.</p>
                                    <ul class="desc-list">
                                        <li>
                                            <p> <span style={{ fontWeight: 'bold', color: 'black' }} >Excellence in Upgrades, Retrofits, Optimization, and Performance:</span> With an ultimate
                                                focus on high quality outcome, we invest our effort in enhancing the performance of existing
                                                power plants through upgrades, retrofits, and optimization techniques. Our team of plant
                                                experts evaluates each plant's unique requirements and devises tailored solutions to
                                                maximize its efficiency, reduce emissions, and prolong the operational lifespan of the
                                                facility.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <div class="image">
                                        <Scrollanimation animateIn="fadeInRight" >
                                            <img src={require("../images/resource/pp2.jpg")} alt="Service" />
                                        </Scrollanimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="overflow-hidden">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mt-40">
                            <h4 class="mt-10 mb-4">Comprehensive Maintenance and Support Services:</h4>
                            <p class="mb-30">Ensuring uninterrupted power
                                generation is our topmost priority. Hence, we offer a comprehensive range of maintenance
                                services to make power plants run smoothly. From periodic inspections and maintenance
                                regulations to emergency repairs and troubleshooting, our technical team provides round
                                the-clock support to address any issues and minimize downtime. Additionally, we offer
                                services such as spare parts management, technical training, and performance monitoring to
                                enhance the overall reliability. <br /> <br /> We tailor solutions specifically to meet each of our client's particular needs and
                                expectations. By leveraging our deep industrial knowledge and technical prowess, we
                                customize strategies to optimize plant performance and maximize return on investment
                                (ROI). Whether it's optimizing the already existing infrastructure or spearheading the
                                development of new facilities, we are committed to deliver results that drive sustainable
                                growth in the energy sector. </p>
                            <div class="project-listing">
                                <ol>
                                    <li> Whether it's designing the layout, selecting
                                        equipment, or managing the construction phase, we ensure a seamless and efficient project
                                        delivery.</li>
                                    <li>Our team is
                                        very adept at handling all sorts of power plant projects, navigating the complexities, starting
                                        with feasibility tests, site selection, then designing and installation of equipment into
                                        seamlessly managing all the site operations.</li>
                                </ol>
                            </div>
                            <div class="row mt-40">
                                <div class="col-lg-4 col-md-6 mb-30"> <Scrollanimation animateIn="fadeInLeft" ><img class="rounded-10 w-100" src={require("../images/gallery/pixel_1.jpg")} alt="project" /></Scrollanimation></div>
                                <div class="col-lg-4 col-md-6 mb-30"> <Scrollanimation animateIn="fadeInUp" ><img class="rounded-10 w-100" src={require("../images/gallery/pixel_2.jpg")} alt="project" /></Scrollanimation></div>
                                <div class="col-lg-4 col-md-6 mb-30"> <Scrollanimation animateIn="fadeInRight"><img class="rounded-10 w-76" src={require("../images/gallery/pixel_3.jpg")} alt="project" /> </Scrollanimation> </div>
                            </div>
                            <h4 class="mt-10 mb-4">Power Plant Works</h4>
                            <p class="mb-n2">We are highly proficient in the services related to the construction, maintenance and
                                optimization of power plant units such as thermal, hydroelectric and nuclear.</p>
                        </div>

                    </div>

                </div>
            </section>

            <div class="th-hero-wrapper hero-1 slider-area" id="hero" /*data-bg-src={require("../images/hero/hero_bg_1.jpg")}*/ style={{
                backgroundImage: `url(${require("../images/hero/hero_bg_1.jpg")})`, marginTop: '75px'
            }}
            >

                <div class="overflow-hidden space" data-bg-color="#101840" id="about-sec">
                    <div class="shape-mockup spin" data-top="6%" data-left="3%"><img src={Img13} alt="shape" /></div>
                    <div class="shape-mockup d-none d-xl-block" data-bottom="3%" data-right="0%"><img src={require("../images/shape/lines_2.png")} alt="shape" /></div>
                    <div class="container">
                        <div class="row flex-row-reverse">
                            <div class="col-xl-6 mb-35 mb-xl-0">
                                <div class="img-box1">
                                    <div class="img1"><img src={require("../images/normal/normal1.jpg")} alt="About" /></div>
                                    <div class="box-badge">
                                        <div
                                            class="box-icon"><img src={Img9} alt="icon" /></div>
                                    </div><img src={Img10} alt="icon" class="dot-shape" /></div>
                            </div>
                            <div class="col-xl-6 text-center text-xl-start mt-100">
                                <div class="title-area mb-30 pe-xxl-5"><span class="sub-title shape-white"><img src={Img8} alt="shape" />About Us</span>
                                    <h2 class="sec-title text-white">Roof-top Grids for Residential Units</h2>
                                </div>
                                <p class="ff-title fs-18 fw-medium text-white">We install solar panels on the building roof, connecting them to local power grid.
                                    Electricity got from captured sunlight can be used to power all your appliances and
                                    electronics within the building unit.</p>
                                <p class="mb-42 text-light">Any surplus (additional) electricity will be automatically
                                    fed back into the grid, allowing you to earn credits or reduce the EB bills through net
                                    metering programs.</p>
                                <div class="about-feature-wrap">
                                    <div class="about-feature">
                                        <div class="box-icon"><img src={Img11} alt="Icon" /></div>
                                        <h3 class="box-title">Solution for residential roofing</h3>
                                    </div>
                                    <div class="about-feature">
                                        <div class="box-icon"><img src={Img12} alt="Icon" /></div>
                                        <h3 class="box-title">Solution for Reduce EB Bill</h3>
                                    </div>
                                </div>
                                <div class="btn-group justify-content-center"><a class="th-btn style3">Discover More<i> 🡪</i></a>
                                    <div class="call-btn">
                                        <div class="play-btn">
                                            <IconButton sx={{ backgroundColor: '#f47629' }} >
                                                <PhoneOutlinedIcon sx={{ color: 'white' }} />
                                            </IconButton></div>
                                        <div class="media-body">
                                            <p class="box-label">Call Us 24/7</p>
                                            <h6 class="box-link text-white"><a href="tel:+91 73053 95976">+91 73053 95976</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



           

            <Footer />
        </>
    )
}

export default Solarenergy