import React, { useEffect } from 'react'
import Appheader from '../Appbar'
import '../App.css'
import Footer from '../Footer'
import Scrollanimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { ScrollToTop } from "react-simple-scroll-up";




function Powerplant() {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [])



    return (
        <div style={{ overflow: 'hidden' }}>
            <Appheader first={"services"} />
            <ScrollToTop bgColor="#ff0400" symbol="&#8593;" strokeFillColor="white" style={{ zIndex: 999 }} />


            <Scrollanimation animateIn="fadeInLeft" >
                <div class="breatcome2-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="breatcome-content">
                                    <div class="breatcome-title">
                                        <h1>Solar Energy</h1>
                                    </div>
                                    <div class="bratcome-text">
                                        {/* <ul>
                                            <li><a>Services</a></li>
                                            <li>Solar Energy</li>
                                        </ul> */}
                                        <div style={{ textAlign: 'center', fontWeight: 'bold' }} >Services / Solar Energy </div>

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
                                    <img src={require("../images/resource/project-details1.jpg")} alt="Service" />
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
                                        <p>solar &amp; exterior design</p>
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
                                <h4>Solar Energy Services</h4>
                            </div>
                            <p>As pioneers in ‘Solar Power Solutions’, we offer quality installation and maintenance
                                services that help the customers with an easy transition to the solar power system by
                                utilising the abundant, inexhaustible energy from the sun. At APS Engineering Services, we
                                incorporate the latest and reliable advancements in Solar Technology, thus empowering
                                numerous households, businesses and communities to choose a budget and eco-friendly
                                power source aka solar energy. <br /><br /> <span style={{ fontWeight: 'bold', color: 'black' }} >Highly Economical:</span> Consumption of solar power helps consumers to generate their own
                                electricity, and reducing their electricity bills over time. Investing in solar power energy
                                production is quite safe and secured. You don’t need to spend anything extra on land costs.
                                You get to avail certain tax benefits. Most importantly, you need not worry about the
                                maintenance cost as it is significantly low comparing to other energy consumptions. <br /><br /> <span style={{ fontWeight: 'bold', color: 'black' }} > Vast Resource: </span> India receives abundant sunlight throughout the year, making it an ideal
                                location for solar power generation. With wide expanses of land available for solar
                                installations, consumers have endless opportunity to harness this profitable energy
                                resource.    </p>
                        </div>
                        <div class="col-lg-12 list-part">
                            <div class="row align-items-end">
                                <div class="col-lg-8 col-md-12">
                                    <div class="title">
                                        <h4>Environmentally Friendly:</h4>
                                    </div>
                                    <p>Solar power is a clean renewable energy source that generates
                                        electricity without any emission of greenhouse gases or pollutants. Switching to solar power
                                        help consumers to significantly lessen their carbon footprint and positively contribute to
                                        mitigating climate change and increasing air pollution.</p>
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
                                            <img src={require("../images/resource/service3.png")} alt="Service" />
                                        </Scrollanimation>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="title">
                                <h4>Energy Independence:</h4>
                            </div>
                            <p>Solar power provides the users with high energy independence by
                                allowing them to generate their own electricity on-site. This lowers their reliance on
                                centralized power grids and fossil fuels, providing a more dependable source of energy. <br /><br /> <span style={{ fontWeight: 'bold', color: 'black' }} >Government Incentives:</span> The Indian government offers various incentives and subsidies to
                                promote solar power adoption, such as subsidies on solar panel installations, tax incentives,
                                and net metering policies. These incentives help make solar power more affordable and
                                accessible to consumers. <br /><br /> <span style={{ fontWeight: 'bold', color: 'black' }} >Local Career Growth:</span> This promising industry has the potential to create millions of jobs
                                across the value chain, including production, installation, maintenance, and operation of solar
                                power systems in India. Usage of solar power resources contribute to our nation’s economic
                                growth and offers employment opportunities, especially in rural areas. <br /> <br /> Overall, solar power consumption offers numerous benefits for consumers in India, including
                                cost savings, environmental sustainability, energy independence, and economic growth. As
                                the cost of solar technology continues to decline and government support for renewable
                                energy increases, solar power is becoming an increasingly attractive option for consumers
                                across the country. </p>
                        </div>
                    </div>
                </div>
            </div>


            <div style={{ padding: '0% 7%' }} >
                <div class="row">
                    <div>
                        <div class="service-details-thumb">
                            <Scrollanimation animateIn="fadeInDown" >
                                <img src={require("../images/resource/service-details.png")} alt="service-details" />
                            </Scrollanimation>
                        </div>
                        <div class="service-details-title">
                            <h4>Solar Power Plants of Any Scale</h4>
                        </div>
                        <div class="service-details-discription">
                            <p>We conduct initial feasibility studies and proper site assessment to determine the
                                optimal placement and configuration of panels. We will help you with periodic monitoring and
                                maintenance to optimize efficiency thus ensuring the system longevity. We also offer
                                finance facilities and alternative options thus helping our clients to own a solar power plant
                                and also making it even more accessible and affordable for everyone.</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="service-details-thumb-two">
                                    <Scrollanimation animateIn="fadeInLeft" >
                                        <img src={require("../images/resource/service-details2.png")} alt="" />
                                    </Scrollanimation>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="service-details-thumb-two">
                                    <Scrollanimation animateIn="fadeInRight" >
                                        <img src={require("../images/resource/service-details3.png")} alt="" />
                                    </Scrollanimation>
                                </div>
                            </div>
                        </div>
                        <div class="service-details-title">
                            <h4>This service overview Everyone</h4>
                        </div>
                        <div class="service-details-discription">
                            <p>We conduct initial feasibility studies and proper site assessment to determine the
                                optimal placement and configuration of panels. We will help you with periodic monitoring and
                                maintenance to optimize efficiency thus ensuring the system longevity. We also offer
                                finance facilities and alternative options thus helping our clients to own a solar power plant
                                and also making it even more accessible and affordable for everyone.</p>
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
                                    <img src={require("../images/project/project1.png")} alt="" />
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
                                    <img src={require("../images/project/solar.png")} alt="" />
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
                                    <img src={require("../images/project/solar1.jpg")} alt="" />
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
                                    <img src={require("../images/project/project4.png")} alt="" />
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
                                    <img src={require("../images/project/project5.png")} alt="" />
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
                                    <img src={require("../images/project/project6.png")} alt="" />
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

export default Powerplant