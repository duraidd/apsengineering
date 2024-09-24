import React, { useEffect } from 'react'
import Appheader from '../Appbar'
import Footer from '../Footer'
import Scrollanimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { ScrollToTop } from "react-simple-scroll-up";



function Windpower() {


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [])
  


  return (
    <div style={{ overflow: 'hidden' }}>
            <ScrollToTop bgColor="#ff0400" symbol="&#8593;" strokeFillColor="white" style={{ zIndex: 999 }} />

            <Appheader first={"services"} />
            
            <Scrollanimation animateIn="fadeInLeft" >
            <div class="breatcome1-section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12">
                            <div class="breatcome1-content">
                                <div class="breatcome1-title">
                                    <h1>Wind Power</h1>
                                </div>
                                <div class="bratcome1-text">
                                    <ul>
                                        <li><a>Services</a></li>
                                        <li>Wind Power</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Scrollanimation>

            <div class="project-details-section">
                <div style={{padding:'4% 8% 0% 8%'}}>
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="projetct-details-image">
                                <Scrollanimation animateIn="fadeInLeft" >
                                <img src={require("../images/resource/windpower.jpg")} alt="Service" />
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
                                        <p>Wind &amp; Power Plant</p>
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
                                        <Scrollanimation animateIn="fadeInRight" >
                                        <img src={require("../images/resource/windpower1.jpg")} alt="Service" />
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
                                <img src={require("../images/resource/windpower2.jpg")} alt="service-details" />
                                </Scrollanimation>
                            </div>
                            <div class="service-details-title">
                                <h4>This service overview</h4>
                            </div>
                            <div class="service-details-discription">
                                <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna ali Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irures dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat nonm proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor.</p>
                                <p>sit amet, consectetur adipisicielit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis fvUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi </p>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 col-md-6">
                                    <div class="service-details-thumb-two">
                                        <Scrollanimation animateIn="fadeInLeft" >
                                        <img src={require("../images/resource/windpower3.jpg")} alt="" />
                                        </Scrollanimation>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6">
                                    <div class="service-details-thumb-two">
                                        <Scrollanimation animateIn="fadeInRight" >
                                        <img src={require("../images/resource/windpower4.jpg")} alt="" />
                                        </Scrollanimation>
                                    </div>
                                </div>
                            </div>
                            <div class="service-details-title">
                                <h4>This service overview Everyone</h4>
                            </div>
                            <div class="service-details-discription">
                                <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna ali Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                                    irures dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat nonm proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor.</p>
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
                                <img src={require("../images/project/windpower5.jpg")} alt="" />
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
                                <img src={require("../images/project/windpower6.jpg")} alt="" />
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
                                <img src={require("../images/project/project3.png")} alt="" />
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
                                <img src={require("../images/project/windmillone.jpg")} alt="" />
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
                                <img src={require("../images/project/windmill22.jpg")} alt="" />
                            </div>
                            <div class="project-content">
                                <h4>Addressing Wind Energy</h4>
                                <span>ECO, Supply Chain</span>
                            </div>
                        </div>
                        </Scrollanimation>
                    </div>
                    <div>
                        <Scrollanimation animateIn="fadeInRight" >
                        <div class="project-grid-box">
                            <div class="project-thumb">
                                <img src={require("../images/project/windmill33.jpg")} alt="" />
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

export default Windpower