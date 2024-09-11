import React from 'react'
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
import Slider from 'react-slick'



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


  return (
    <>
      <Appheader first={"services"} />

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

      <Footer />
    </>
  )
}

export default Solarenergy