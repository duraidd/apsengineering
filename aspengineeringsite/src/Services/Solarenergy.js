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
import { IconButton } from '@mui/material'


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
                                        <li><a>Power Plant Work</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="project-details-section">
                <div style={{padding:'5% 8%'}}>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="projetct-details-image">
                                <img src={require("../images/resource/pp1.jpg")} alt="Service" />
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
                                    <li>
                                        <h6>client:</h6>
                                        <p>theme pvt ltd</p>
                                    </li>
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
                                        <p>USA</p>
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
                                <h4>Description of Situation</h4>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nul pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                                unde omnis iste natus e voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae</p>
                        </div>
                        <div class="col-lg-12 list-part">
                            <div class="row align-items-end">
                                <div class="col-lg-8 col-md-12">
                                    <div class="title">
                                        <h4>client's goal</h4>
                                    </div>
                                    <p>The result of employees, over 115 detailers and engineers, all coming together to solve probl before they arise. the teamwork it demonstrates both internally and externally is outstandingThe result of employees, over 115 detailers
                                        and engineers, all coming together to solve problem before they</p>
                                    <ul class="desc-list">
                                        <li>
                                            <p>The triple pressures of more regulations outstanding in the creation.</p>
                                        </li>
                                        <li>
                                            <p>The legacy of the financial crisis has meant a few tricky years</p>
                                        </li>
                                        <li>
                                            <p>Now, the triple pressures of more regulations more regulations</p>
                                        </li>
                                        <li>
                                            <p>Outstanding in the creation he triple pressures of more regulations</p>
                                        </li>
                                        <li>
                                            <p>The triple pressures of more regulations outstanding in the creation</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <div class="image">
                                        <img src={require("../images/resource/pp2.jpg")} alt="Service" />
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
                            <h4 class="mt-10 mb-4">Project Challenges</h4>
                            <p class="mb-30">Weather conditions: Weather conditions can significantly impact roofing projects, as high winds, heavy rain, or extreme temperatures can make it unsafe or impossible to work on the Roof. Contractors must carefully monitor weather conditions
                                and adjust their schedule accordingly.</p>
                            <div class="project-listing">
                                <ol>
                                    <li>Access to the roof is critical to completing a roofing project, and some roofs can be challenging to reach, such as those with steep slopes or located at high elevations. Contractors must take appropriate safety measures to
                                        ensure they can work safely and efficiently</li>
                                    <li>Safety concerns: Roofing projects can be dangerous, and contractors must take appropriate safety measures to protect themselves, their workers, and anyone else in the vicinity. This includes using fall protection equipment,
                                        ensuring proper ladder placement, and following all safety regulations</li>
                                </ol>
                            </div>
                            <div class="row mt-40">
                                <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/pixel_1.jpg")} alt="project" /></div>
                                <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/pixel_2.jpg")} alt="project" /></div>
                                <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-76" src={require("../images/gallery/pixel_3.jpg")} alt="project" /></div>
                            </div>
                            <h4 class="mt-10 mb-4">Final Result</h4>
                            <p class="mb-n2">Roof replacement is the process of removing the existing roof and installing a new one. It is necessary when a roof has reached the end of its lifespan, has sustained extensive damage, or cannot be effectively repaired.<br /><br />The
                                first step in the roofing replacement process is to have a professional roofing contractor inspect the roof to determine its condition and the extent of any damage. The contractor will then provide an estimate of the cost and time
                                required for the replacement</p>
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
                                    <h2 class="sec-title text-white">Committed to Give Quality House Repairing</h2>
                                </div>
                                <p class="ff-title fs-18 fw-medium text-white">Commercial & Residential Clients across Sydney Repairs for their fast and reliable 24 hour Roofing Repair services.</p>
                                <p class="mb-42 text-light">Welcome to Rakar renovation, we provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world
                                    view of disruptive innovation via workplace diversity and empowerment.</p>
                                <div class="about-feature-wrap">
                                    <div class="about-feature">
                                        <div class="box-icon"><img src={Img11} alt="Icon" /></div>
                                        <h3 class="box-title">Solution for residential roofing</h3>
                                    </div>
                                    <div class="about-feature">
                                        <div class="box-icon"><img src={Img12} alt="Icon" /></div>
                                        <h3 class="box-title">Solution for furniture assembly</h3>
                                    </div>
                                </div>
                                <div class="btn-group justify-content-center"><a href="about.html" class="th-btn style3">Discover More<i> 🡪</i></a>
                                    <div class="call-btn">
                                        <div class="play-btn">
                                            <IconButton sx={{ backgroundColor: '#f47629' }} >
                                                <PhoneOutlinedIcon sx={{ color: 'white' }} />
                                            </IconButton></div>
                                        <div class="media-body">
                                            <p class="box-label">Call Us 24/7</p>
                                            <h6 class="box-link text-white"><a href="tel:+0123456789">+0 (123) 456 789</a></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <section class="overflow-hidden space">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mt-40">

                            <h4 class="mt-10 mb-4">Project Challenges</h4>
                            <p class="mb-30">Weather conditions: Weather conditions can significantly impact roofing projects, as high winds, heavy rain, or extreme temperatures can make it unsafe or impossible to work on the Roof. Contractors must carefully monitor weather conditions
                                and adjust their schedule accordingly.</p>
                            <div class="project-listing">
                                <ol>
                                    <li>Access to the roof is critical to completing a roofing project, and some roofs can be challenging to reach, such as those with steep slopes or located at high elevations. Contractors must take appropriate safety measures to
                                        ensure they can work safely and efficiently</li>
                                    <li>Safety concerns: Roofing projects can be dangerous, and contractors must take appropriate safety measures to protect themselves, their workers, and anyone else in the vicinity. This includes using fall protection equipment,
                                        ensuring proper ladder placement, and following all safety regulations</li>
                                </ol>
                            </div>
                            {/* <div class="row mt-40">
                        <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/project_inner_3.jpg")} alt="project" /></div>
                        <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/project_inner_4.jpg")} alt="project" /></div>
                        <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/project_inner_5.jpg")} alt="project" /></div>
                    </div> */}
                            <h4 class="mt-10 mb-4">Final Result</h4>
                            <p class="mb-n2">Roof replacement is the process of removing the existing roof and installing a new one. It is necessary when a roof has reached the end of its lifespan, has sustained extensive damage, or cannot be effectively repaired.<br /><br />The
                                first step in the roofing replacement process is to have a professional roofing contractor inspect the roof to determine its condition and the extent of any damage. The contractor will then provide an estimate of the cost and time
                                required for the replacement</p>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </>
    )
}

export default Solarenergy