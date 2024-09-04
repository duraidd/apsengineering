import logo from './logo.svg';
import './App.css';
import Slider from 'react-slick'
import { useEffect, useState } from 'react';
import Appbar from './Appbar';



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


function Home() {


    const [activeIndex, setActiveIndex] = useState(0);



    useEffect(() => {
        // Initialize the accordion
        const accordionItems = document.querySelectorAll('.accordion > li');
        accordionItems[0].classList.add('active');
        accordionItems[0].querySelector('p').style.display = 'block';
    }, []);


    const handleAccordionClick = (index) => {
        // Toggle the accordion item
        const accordionItems = document.querySelectorAll('.accordion > li');
        accordionItems.forEach((item, i) => {
            if (i === index) {
                setActiveIndex(index)
                item.classList.add('active');
                item.querySelector('p').style.display = 'block';
            } else {
                item.classList.remove('active');
                item.querySelector('p').style.display = 'none';
            }
        });
    };


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
        <div className="App" style={{ overflow: 'hidden' }} >

<Appbar/>
            <Slider  {...settings} >

                <div class="slider-section d-flex align-items-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12">
                                <div class="slider-content">
                                    <h4> Our Solar Systems</h4>
                                    <h1>Energize Society By</h1>
                                    <h1>Reliadle Energy</h1>
                                    <p>The increase in extreme weather events and rising sea levels are unmistakable signs of climate change. Roughly 850 million people still live without access to electricity,</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                                        <div class="solar-btn slider1 wow slideInLeft">
                                            <a href="service-details.html">Our Service</a>
                                        </div>
                                        <div class="solar-btn slider2  wow slideRight">
                                            <a href="about-us.html">More About!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider-section style-three d-flex align-items-center">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-12">
                                <div class="slider-content" >
                                    <h4> Our Solar Systems</h4>
                                    <h1>Energize Society By</h1>
                                    <h1>Reliadle Energy</h1>
                                    <p>The increase in extreme weather events and rising sea levels are unmistakable signs of climate change. Roughly 850 million people still live without access to electricity,</p>
                                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                                        <div class="solar-btn slider1">
                                            <a href="service-details.html">Our Service </a>
                                        </div>
                                        <div class="solar-btn slider2">
                                            <a href="about-us.html">More About! </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>

            <div class="about-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="about-thumb">
                                <img src={require("../src/images/about/about-thumb.jpg")} alt="" />
                                <div class="about-counter">
                                    <div class="about-counter-text">
                                        <div class="about-numbar">
                                            <h4 class="counter">29</h4>
                                            <span>+</span>
                                        </div>
                                        <div class="about-text">
                                            <h5>Years Exprience</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="about-counter-two d-flex align-items-center">
                                    <div class="about-counter-img">
                                        <img src={require("../src/images/about/about-shape.png")} alt="" />
                                    </div>
                                    <div class="about-number-two">
                                        <h4 class="counter">2900</h4>
                                        <span>+</span>
                                        <h5>Satisfied Clients</h5>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="about-section-title">
                                <div class="about-section-sub-title wow slideInUp">
                                    <h4>Our Introductton</h4>
                                </div>
                                <div class="about-section-main-title wow slideInRight">
                                    <h2>We're Developing Future Solar Solutions </h2>
                                </div>
                            </div>
                            <div class="tab">
                                <ul class="tabs active wow slideInRight">
                                    <li class="current"><a href="#">About Us <i class="bi bi-arrow-up-right"></i></a></li>
                                    <li class=""><a href="#">Mission <i class="bi bi-arrow-up-right"></i></a></li>
                                    <li class=""><a href="#">Visiont <i class="bi bi-arrow-up-right"></i></a></li>
                                </ul>

                                <div class="tab_content">
                                    <div class="tabs_item" >
                                        <div class="tabs-items-content">
                                            <div class="about-content-discription wow slideInLeft">
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam aperiam, eaquecy epsa abillo inventore veritatis architecto beatae</p>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                                    <div class="about-list wow slideInLeft">
                                                        <ul>
                                                            <li> Best Insurance Agency</li>
                                                            <li> Trusted & Experience</li>
                                                            <li> Key Managerial Persons</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-6">
                                                    <div class="about-list wow slideInRight">
                                                        <ul>
                                                            <li> Dedicated Support </li>
                                                            <li> Board Composition</li>
                                                            <li> Board Committees</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div class="col-lg-12">
                                                    <div class="solar-btn about">
                                                        <a href="#">Our Service</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="service-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-title text-center">
                                <div class="section-sub-title wow animate__fadeOutDown">
                                    <h4>Our Most Service</h4>
                                </div>
                                <div class="section-main-title wow slideInLeft">
                                    <h2>Provide Solar Solution</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" >
                        <div class="col-lg-4 col-md-6">
                            <div class="service-box">
                                <div class="service-thumb">
                                    <img src={require("../src/images/resource/service1.png")} alt="" />
                                    <div class="service-content">
                                        <div class="service-icon-thumb">
                                            <img src={require("../src/images/resource/service-icon1.png")} alt="" />
                                        </div>
                                        <div class="service-text" >
                                            <h4><a href="service-details.html">Solar Panels Services</a></h4>
                                            <p>Suspendisse natoque elit in eget orci amet  volutpat, est. Integer mauris feugiat</p>
                                            <a href="service-details.html">Read More </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-box">
                                <div class="service-thumb">
                                    <img src={require("../src/images/resource/service2.png")} alt="" />
                                    <div class="service-content">
                                        <div class="service-icon-thumb">
                                            <img src={require("../src/images/resource/service-icon2.png")} alt="" />
                                        </div>
                                        <div class="service-text">
                                            <h4><a href="service-details.html">Roof Solar Panels</a></h4>
                                            <p>Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat</p>
                                            <a href="service-details.html">Read More </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="service-box">
                                <div class="service-thumb">
                                    <img src={require("../src/images/resource/service3.png")} alt="" />
                                    <div class="service-content">
                                        <div class="service-icon-thumb">
                                            <img src={require("../src/images/resource/service-icon3.png")} alt="" />
                                        </div>
                                        <div class="service-text" >
                                            <h4><a href="service-details.html">Commercial Roofing</a></h4>
                                            <p>Suspendisse natoque elit in eget orci amet volutpat, est. Integer mauris feugiat</p>
                                            <a href="service-details.html">Read More </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="contact-us-section">
                {/* <div class="container"> */}
                <div class="row contact-us align-items-center">
                    <div class="col-lg-2"></div>
                    <div class="col-lg-7 col-md-6">
                        <div class="section-title wow animate__fadeInLeft">
                            <div class="section-main-title contact-us">
                                <h2>How We Create Solar Energy</h2>
                            </div>
                        </div>
                        <div class="contact-us-discription wow animate__fadeInUp">
                            <p>Building & Maintaining The Energy</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="solar-btn contact-us wow animate__fadeInRight">
                            <a href="contact-us.html">Contact Now <i class="bi bi-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div>


            <div class="pricing-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="section-title">
                                <div class="section-sub-title pricing">
                                    <h4>Our Prlcing Table</h4>
                                </div>
                                <div class="section-main-title pricing">
                                    <h2>Want to Ask Something</h2>
                                    <h2>from Us?</h2>
                                </div>
                            </div>
                            <div class="tab_container"  >
                                <div id="tab1" class="tab_content" >
                                    <ul class="accordion" style={{paddingLeft:'0px'}} >
                                        <li>
                                            <a onClick={() => handleAccordionClick(0)} style={{backgroundColor: activeIndex === 0 ? "#E63A27":""}}  ><span> What warranties do I have for installation? </span></a>
                                            <p>The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, A or team might be at your home for half a day.</p>
                                        </li>
                                        <li>
                                            <a onClick={() => handleAccordionClick(1)} style={{backgroundColor: activeIndex === 1 ? "#E63A27":""}} ><span> What warranties do I have for installation? </span></a>
                                            <p>The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, A or team might be at your home for half a day.</p>
                                        </li>
                                        <li>
                                            <a onClick={() => handleAccordionClick(2)} style={{backgroundColor: activeIndex === 2 ? "#E63A27":""}}><span> What warranties do I have for installation? </span></a>
                                            <p>The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, A or team might be at your home for half a day.</p>
                                        </li>
                                        <li>
                                            <a onClick={() => handleAccordionClick(3)} style={{backgroundColor: activeIndex === 3 ? "#E63A27":""}}><span> What warranties do I have for installation? </span></a>
                                            <p>The time it takes to repair a roof depends on the extent of the damage. For minor repairs, it might take an hour or two. For significant repairs, A or team might be at your home for half a day.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="pricing-box wow animate__fadeInTopRight">
                                <div class="pricing-info">
                                    <div class="pricing-year">
                                        <h4>Yearly</h4>
                                    </div>
                                    <div class="pricing-rate">
                                        <h2>$148<span>.99</span></h2>
                                    </div>
                                </div>
                                <div class="pricing-icon">
                                    <i>✓</i>
                                </div>
                                <div class="pricing-content">
                                    <h4>15 Days Free</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                                <div class="pricing-value">
                                    <h5>Best Value</h5>
                                </div>
                            </div>
                            <div class="pricing-box wow animate__fadeInBottomLeft">
                                <div class="pricing-info">
                                    <div class="pricing-year">
                                        <h4>Yearly</h4>
                                    </div>
                                    <div class="pricing-rate">
                                        <h2>$13<span>.99</span></h2>
                                    </div>
                                </div>
                                <div class="pricing-icon">
                                    <i>✓</i>
                                </div>
                                <div class="pricing-content">
                                    <h4>12 Days Free</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
                                </div>
                                <div class="pricing-value">
                                    <h5>Best Value</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="call-do-action-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="single-video text-center wow animate__bounceInDown">
                                <div class="video-icon">
                                    <a class="video-vemo-icon venobox vbox-item" data-vbtype="youtube" data-autoplay="true" href="https://youtu.be/BS4TUd7FJSg"><i class="bi bi-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="choose-us-section">               
                    <div class="row choose">
                        <div class="col-lg-6 col-md-12" style={{padding:'20px',flexWrap:'wrap'}} >
                            <div class="section-title"  >
                                <div class="section-sub-title choose">
                                    <h4>Why Choose Us</h4>
                                </div>
                                <div class="section-main-title choose">
                                    <h2>Best Solution For Your</h2>
                                </div>
                            </div>
                            <div class="choose-us-discription">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                            </div>
                            <div class="choose-us-content" >
                                <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'20px'}} >
                                <div class="choose-us-thumb">
                                    <img src={require("../src/images/resource/choose-thumb.png")} alt="" />
                                </div>
                                <div class="choose-us-list" >
                                    <ul style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'flex-start',alignContent:'flex-start',gap:'10px'}} >
                                        <li><i class="bi bi-check"></i> Best of Perfect Shine</li>
                                        <li><i class="bi bi-check"></i> Geeen Energy Green Natural</li>
                                        <li><i class="bi bi-check"></i> Solar Energy fou All The </li>
                                    </ul>
                                </div>
                                </div>
                                <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:'20px'}} >
                                    <div class="solar-btn choose">
                                        <a href="#">Get A Quote <i class="bi bi-arrow-right"></i></a>
                                    </div>
                                    <div class="choose-us-icon">
                                        <i>✔</i>
                                    </div>
                                    <div class="choose-us-phone">
                                        <h5>Emergency Call <span>+123956(6565)556-02</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="choose-contact-box">
                                <div class="choose-contact-title">
                                    <h4>Make an Appointment</h4>
                                </div>
                                <form action="https://formspree.io/f/myyleorq" method="POST" id="it-form">
                                    <div class="row">
                                        <div class="col-lg-12">
                                            <div class="form-box">
                                                <input type="text" name="name" placeholder="Full Name *" />
                                                <i class="bi bi-person"></i>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-box">
                                                <input type="text" name="email" placeholder="Email Here *" />
                                                <i class="bi bi-envelope"></i>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="form-box">
                                                <input type="text" name="subject" placeholder="Select Service *" />
                                                <i class="bi bi-pencil-square"></i>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-box">
                                                <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Your Comment *"></textarea>
                                                <i class="bi bi-chat-left-text-fill"></i>
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12">
                                            <div class="form-box-button">
                                                <button type="Submit">Appontment Now <i class="bi bi-arrow-right"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>                                
                            </div>
                        </div>
                    </div>
                
            </div>


        </div>
    );
}

export default Home;
