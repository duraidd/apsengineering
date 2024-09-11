import React from 'react'
import Appheader from '../Appbar'
import '../App.css'
import Footer from '../Footer'


function Powerplant() {
  return (
    <div style={{overflow:'hidden'}}>
    <Appheader first={"services"} />

    <div class="breatcome-section">
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


    <div class="service-details-section">
        <div style={{padding:'0% 7%'}} >
            <div class="row">
                <div>
                    <div class="service-details-thumb">
                        <img src={require("../images/resource/service-details.png")} alt="service-details" />
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
                                <img src={require("../images/resource/service-details2.png")} alt="" />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="service-details-thumb-two">
                                <img src={require("../images/resource/service-details3.png")} alt="" />
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
           
            <div  style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:"30px 10px",padding:"0 2% 0 2%"}} >
                <div>
                    <div class="project-grid-box">
                        <div class="project-thumb">
                            <img src={require("../images/project/project1.png")} alt="" />
                        </div>
                        <div class="project-content">
                            <h4>Chain Finance Program</h4>
                            <span>ECO, Supply Chain</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="project-grid-box">
                        <div class="project-thumb">
                            <img src={require("../images/project/project2.png")} alt="" />
                        </div>
                        <div class="project-content">
                            <h4>New Public Attitude Tracker</h4>
                            <span>Digital Product</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="project-grid-box">
                        <div class="project-thumb">
                            <img src={require("../images/project/project3.png")} alt="" />
                        </div>
                        <div class="project-content">
                            <h4>Smarter Ways to Manage</h4>
                            <span>ECO, Supply Chain</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="project-grid-box">
                        <div class="project-thumb">
                            <img src={require("../images/project/project4.png")} alt="" />
                        </div>
                        <div class="project-content">
                            <h4>Task Managemen</h4>
                            <span>Creative Work</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="project-grid-box">
                        <div class="project-thumb">
                            <img src={require("../images/project/project5.png")} alt="" />
                        </div>
                        <div class="project-content">
                            <h4>Addressing Wind Energy</h4>
                            <span>ECO, Supply Chain</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="project-grid-box">
                        <div class="project-thumb">
                            <img src={require("../images/project/project6.png")} alt="" />
                        </div>
                        <div class="project-content">
                            <h4>Historical Book Design</h4>
                            <span>Finance, Supply</span>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>

    <Footer />

    </div>
  )
}

export default Powerplant