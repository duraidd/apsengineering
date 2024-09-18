import React, { useEffect } from 'react'
import Appheader from '../Appbar'
import Footer from '../Footer'
import '../App.css'
import Img1 from "../images/hero/hero_shape_1_1.svg"
import Img2 from "../images/shape/dots_1.svg"
import Img3 from "../images/hero/hero_arrow.svg"
import Img4 from "../images/hero/hero_1_1.png"
import Img5 from "../images/hero/hero_shape_1_1.svg"
import Img6 from "../images/hero/hero_1_2.png"
import Img7 from "../images/hero/hero_1_3.png"
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

      <div class="breatcome-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="breatcome-content">
                                <div class="breatcome-title">
                                    <h1>Power Plant</h1>
                                </div>
                                <div class="bratcome-text">
                                    <ul>
                                        <li><a>Services</a></li>
                                        <li>Power Plant</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

      <div class="th-hero-wrapper hero-1 slider-area" id="hero" /*data-bg-src={require("../images/hero/hero_bg_1.jpg")}*/ style={{
        backgroundImage: `url(${require("../images/hero/hero_bg_1.jpg")})`,marginTop:'75px'
      }}
      >
        <div class="shape-mockup spin" ><img src={Img1} alt="shape" /></div>
        <div class="shape-mockup spin" ><img src={Img2} alt="shape" /></div>

        <Slider {...settings} >
        <div class="swiper-slide">
          <div class="hero-inner">
            <div class="container">
              <div class="hero-style1">
                <div class="hero-arrow" data-ani="slideinright" data-ani-delay="0.4s"><img src={Img3} alt="Arrow" /></div>
                <h1 class="hero-title"><span class="title1" data-ani="slideinup" data-ani-delay="0.2s">We offer home</span> <span class="title2" data-ani="slideinup" data-ani-delay="0.4s">renovation & repair</span> <span class="title3" data-ani="slideinup" data-ani-delay="0.6s">since <span class="text-theme">2003</span></span>
                </h1>
                <p class="hero-text" data-ani="slideinup" data-ani-delay="0.8s">We believe in providing top quality workman and are so confident in our level of service that we back it up</p><a href="service.html" class="th-btn style3" data-ani="slideinup" data-ani-delay="1s">Our All Services</a></div>
            </div>
            <div class="hero-img" data-ani="slideinright" data-ani-delay="0.2s">
              <div class="shape1"><img src={Img5} alt="shape" /></div><img src={Img4} alt="Image" /></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="hero-inner">
            <div class="container">
              <div class="hero-style1">
                <div class="hero-arrow" data-ani="slideinright" data-ani-delay="0.4s"><img src={Img3} alt="Arrow" /></div>
                <h1 class="hero-title"><span class="title1" data-ani="slideinup" data-ani-delay="0.2s">We offer home</span> <span class="title2" data-ani="slideinup" data-ani-delay="0.4s">renovation & repair</span> <span class="title3" data-ani="slideinup" data-ani-delay="0.6s">since <span class="text-theme">2003</span></span>
                </h1>
                <p class="hero-text" data-ani="slideinup" data-ani-delay="0.8s">We believe in providing top quality workman and are so confident in our level of service that we back it up</p><a href="service.html" class="th-btn style3" data-ani="slideinup" data-ani-delay="1s">Our All Services</a></div>
            </div>
            <div class="hero-img" data-ani="slideinright" data-ani-delay="0.2s">
              <div class="shape1"><img src={Img5} alt="shape" /></div><img src={Img6} alt="Image" /></div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="hero-inner">
            <div class="container">
              <div class="hero-style1">
                <div class="hero-arrow" data-ani="slideinright" data-ani-delay="0.4s"><img src={Img3} alt="Arrow" /></div>
                <h1 class="hero-title"><span class="title1" data-ani="slideinup" data-ani-delay="0.2s">We offer home</span> <span class="title2" data-ani="slideinup" data-ani-delay="0.4s">renovation & repair</span> <span class="title3" data-ani="slideinup" data-ani-delay="0.6s">since <span class="text-theme">2003</span></span>
                </h1>
                <p class="hero-text" data-ani="slideinup" data-ani-delay="0.8s">We believe in providing top quality workman and are so confident in our level of service that we back it up</p><a href="service.html" class="th-btn style3" data-ani="slideinup" data-ani-delay="1s">Our All Services</a></div>
            </div>
            <div class="hero-img" data-ani="slideinright" data-ani-delay="0.2s">
              <div class="shape1"><img src={Img5} alt="shape" /></div><img src={Img7} alt="Image" /></div>
          </div>
        </div>
        
        </Slider> 
      </div>

      <div class="col-12 mt-40">
                    
                    <h4 class="mt-10 mb-4">Project Challenges007</h4>
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
                        <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/project_inner_3.jpg")} alt="project" /></div>
                        <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/project_inner_4.jpg")} alt="project" /></div>
                        <div class="col-lg-4 col-md-6 mb-30"><img class="rounded-10 w-100" src={require("../images/gallery/project_inner_5.jpg")} alt="project" /></div>
                    </div>
                    <h4 class="mt-10 mb-4">Final Result</h4>
                    <p class="mb-n2">Roof replacement is the process of removing the existing roof and installing a new one. It is necessary when a roof has reached the end of its lifespan, has sustained extensive damage, or cannot be effectively repaired.<br/><br/>The
                        first step in the roofing replacement process is to have a professional roofing contractor inspect the roof to determine its condition and the extent of any damage. The contractor will then provide an estimate of the cost and time
                        required for the replacement</p>
                </div>
    
      <div class="th-hero-wrapper hero-1 slider-area" id="hero" /*data-bg-src={require("../images/hero/hero_bg_1.jpg")}*/ style={{
        backgroundImage: `url(${require("../images/hero/hero_bg_1.jpg")})`,marginTop:'75px'
      }}
      >

      <div class="overflow-hidden space" data-bg-color="#101840" id="about-sec">
        <div class="shape-mockup spin" data-top="6%" data-left="3%"><img src={Img13} alt="shape" /></div>
        <div class="shape-mockup d-none d-xl-block" data-bottom="3%" data-right="0%"><img src={require("../images/shape/lines_2.png")} alt="shape" /></div>
        <div class="container">
            <div class="row flex-row-reverse">
                <div class="col-xl-6 mb-35 mb-xl-0">
                    <div class="img-box1">
                        <div class="img1"><img src={require("../images/normal/about_1.jpg")} alt="About" /></div>
                        <div class="box-badge">
                            <div
                                class="box-icon"><img src={Img9} alt="icon" /></div>
                    </div><img src={Img10} alt="icon" class="dot-shape" /></div>
            </div>
            <div class="col-xl-6 text-center text-xl-start">
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
                          <IconButton sx={{backgroundColor:'#f47629'}} >
                            <PhoneOutlinedIcon sx={{color:'white'}} />
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
                    <p class="mb-n2">Roof replacement is the process of removing the existing roof and installing a new one. It is necessary when a roof has reached the end of its lifespan, has sustained extensive damage, or cannot be effectively repaired.<br/><br/>The
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