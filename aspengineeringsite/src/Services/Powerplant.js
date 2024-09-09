import React from 'react'
import Appheader from '../Appbar'
import '../App.css'


function Powerplant() {
  return (
    <>
    <Appheader first={"services"} />

    <div class="project-grid-section">        
           
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center',gap:"50px 10px"}} >
                <div class="col-lg-4 col-md-6">
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
                <div class="col-lg-4 col-md-6">
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
                <div class="col-lg-4 col-md-6">
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
                <div class="col-lg-4 col-md-6">
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
                <div class="col-lg-4 col-md-6">
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
                <div class="col-lg-4 col-md-6">
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

    </>
  )
}

export default Powerplant