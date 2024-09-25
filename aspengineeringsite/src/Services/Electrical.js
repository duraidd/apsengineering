import React, { useEffect } from 'react'
import Appheader from '../Appbar'
import Footer from '../Footer'
import Scrollanimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { ScrollToTop } from "react-simple-scroll-up";



function Electrical() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])



    return (
        <div style={{ overflow: 'hidden' }}>

            <ScrollToTop bgColor="#ff0400" symbol="&#8593;" strokeFillColor="white" style={{ zIndex: 999 }} />


            <Appheader first={"services"} />

            <Scrollanimation animateIn="fadeInLeft" >
                <div class="breatcome4-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="breatcome-content">
                                    <div class="breatcome-title">
                                        <h1>Electrical</h1>
                                    </div>
                                    <div class="bratcome-text">
                                        <ul>
                                            <li><a>Services</a></li>
                                            <li>Electrical</li>
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
                                    <img src={require("../images/resource/elct1.jpg")} alt="Service" />
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
                                        <p>Electrical &amp; exterior work</p>
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
                                <h4>Electrical</h4>
                            </div>
                            <p>As leaders in solar energy solutions, we provide a full spectrum of services to harness the abundant power of the sun. Our expertise covers everything from initial feasibility studies and system design to installation, monitoring, and maintenance of solar energy systems.</p>
                        </div>
                        <div class="col-lg-12 list-part">
                            <div class="row align-items-end">
                                <div class="col-lg-8 col-md-12">
                                    <div class="title">
                                        <h4>client's goal</h4>
                                    </div>
                                    <p>We work closely with our clients to tailor solutions that maximize energy output while minimizing environmental impact. By leveraging the latest advancements in solar technology, we empower businesses and communities to transition to clean, renewable energy sources.</p>
                                    <ul class="desc-list">
                                        <li>
                                            <p>Design and install solar energy systems for residential, commercial, and industrial applications.</p>
                                        </li>
                                        <li>
                                            <p>Conduct feasibility studies and site assessments to determine the optimal placement and configuration of solar panels.</p>
                                        </li>
                                        <li>
                                            <p>Offer financing options and incentives to make solar energy more accessible and affordable for customers.</p>
                                        </li>
                                        <li>
                                            <p>Provide ongoing monitoring and maintenance services to optimize system performance and longevity.</p>
                                        </li>
                                        <li>
                                            <p>Educate customers about the environmental and financial benefits of transitioning to solar energy.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-lg-4 col-md-12">
                                    <div class="image">
                                        <Scrollanimation animateIn="fadeInRight" >
                                            <img src={require("../images/resource/elct2.jpg")} alt="Service" />
                                        </Scrollanimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="service-details-section">
                <div style={{ padding: '0% 7%' }} >
                    <div class="row">
                        <div>
                            <div class="service-details-thumb">
                                <Scrollanimation animateIn="zoomIn" >
                                    <img src={require("../images/resource/elct4.jpg")} alt="service-details" />
                                </Scrollanimation>
                            </div>
                            <div class="service-details-title">
                                <h4>This service overview</h4>
                            </div>
                            <div class="service-details-discription">
                                <p>Electricity is the set of physical phenomena associated with the presence and motion of matter possessing an electric charge. Electricity is related to magnetism, both being part of the phenomenon of electromagnetism, as described by Maxwell's equations.</p>
                                <p>One of the properties of electricity is that it is very useful for energy transmission as well as for information transmission. These were also the first areas in which electrical engineering was developed. Today, electrical engineering has many subdisciplines, the most common of which are listed below. Although there are electrical engineers who focus exclusively on one of these subdisciplines, many deal with a combination of them</p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="service-details-thumb-two">
                                        <Scrollanimation animateIn="fadeInLeft" >
                                            <img src={require("../images/resource/elct.jpg")} alt="" />
                                        </Scrollanimation>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="service-details-thumb-two">
                                        <Scrollanimation animateIn="fadeInRight" >

                                            <img src={require("../images/resource/elct55.jpg")} alt="" />
                                        </Scrollanimation>
                                    </div>
                                </div>
                            </div>
                            <div class="service-details-title">
                                <h4>Power and energy</h4>
                            </div>
                            <div class="service-details-discription">
                                <p>In many regions of the world, governments maintain an electrical network called a power grid that connects a variety of generators together with users of their energy. Users purchase electrical energy from the grid, avoiding the costly exercise of having to generate their own. Power engineers may work on the design and maintenance of the power grid as well as the power systems that connect to it. Such systems are called on-grid power systems and may supply the grid with additional power, draw power from the grid, or do both. Power engineers may also work on systems that do not connect to the grid, called off-grid power systems, which in some cases are preferable to on-grid systems.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <div class="project-grid-section">

                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: "30px 10px", padding: "0 2% 0 2%" }} >
                    <div>
                        <Scrollanimation animateIn="fadeInLeft" >
                            <div class="project-grid-box">
                                <div class="project-thumb">
                                    <img src={require("../images/project/elct66.jpg")} alt="" />
                                </div>
                                <div class="project-content">
                                    <h4>Chain Finance Program</h4>
                                    <span>ECO, Supply Chain</span>
                                </div>
                            </div>
                        </Scrollanimation>
                    </div>
                    <div>
                        <Scrollanimation animateIn="fadeInDown" >
                            <div class="project-grid-box">
                                <div class="project-thumb">
                                    <img src={require("../images/project/elct77.jpg")} alt="" />
                                </div>
                                <div class="project-content">
                                    <h4>New Public Attitude Tracker</h4>
                                    <span>Digital Product</span>
                                </div>
                            </div>
                        </Scrollanimation>
                    </div>
                    <div>
                        <Scrollanimation animateIn="fadeInRight" >
                            <div class="project-grid-box">
                                <div class="project-thumb">
                                    <img src={require("../images/project/elct88.png")} alt="" />
                                </div>
                                <div class="project-content">
                                    <h4>Smarter Ways to Manage</h4>
                                    <span>ECO, Supply Chain</span>
                                </div>
                            </div>
                        </Scrollanimation>
                    </div>
                    <div>
                        <Scrollanimation animateIn="fadeInLeft" >
                            <div class="project-grid-box">
                                <div class="project-thumb">
                                    <img src={require("../images/project/elct10.jpg")} alt="" />
                                </div>
                                <div class="project-content">
                                    <h4>Task Managemen</h4>
                                    <span>Creative Work</span>
                                </div>
                            </div>
                        </Scrollanimation>
                    </div>
                    <div>
                        <Scrollanimation animateIn="fadeInUp" >
                            <div class="project-grid-box">
                                <div class="project-thumb">
                                    <img src={require("../images/project/elct11.jpg")} alt="" />
                                </div>
                                <div class="project-content">
                                    <h4>Addressing Wind Energy</h4>
                                    <span>ECO, Supply Chain</span>
                                </div>
                            </div>
                        </Scrollanimation>
                    </div>
                    <div>
                        <Scrollanimation animateIn="fadeInRight">
                            <div class="project-grid-box">
                                <div class="project-thumb">
                                    <img src={require("../images/project/elct60.png")} alt="" />
                                </div>
                                <div class="project-content">
                                    <h4>Historical Book Design</h4>
                                    <span>Finance, Supply</span>
                                </div>
                            </div>
                        </Scrollanimation>
                    </div>
                </div>

            </div>

            <Footer />

        </div>
    )
}

export default Electrical