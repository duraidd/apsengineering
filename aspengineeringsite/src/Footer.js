import React from 'react'
import './App.css';
import { Box } from '@mui/material';
import logo from './logo.svg';
import Face from '../src/images/Facebook.png'
import Twit from '../src/images/Twitter.png'
import Insta from '../src/images/Instagram.png'
import LinkedIn from '../src/images/LinkedIn.png'
import styled from 'styled-components';


const P = styled.p`
  
  
  font-family: 'Plus Jakarta Sans';
  margin-bottom: 20px;  
  cursor: pointer; 
  color:white; 
  
  &:hover {
    color: #e63a27;    
    border-radius:5px;
    cursor: pointer;
  }
`;


function Footer() {



    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', backgroundColor: '#1c1632', justifyContent: 'center', alignItems: 'center', marginTop: '50px', '@media (max-width:1024px)': { padding: '5%', flexWrap: 'wrap' } }} >
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column' }} >
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'row', paddingLeft: '5%', paddingRight: '3%', justifyContent: 'space-between', flexWrap: 'wrap', '@media (max-width:798px)': { gap: '30px' } }} >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                        <Box>
                            <img src={require('../src/images/resource/footer-logo.png')} width={'100%'} />
                        </Box>
                        <p style={{ textAlign: 'justify', color: '#ffffff', marginTop: '30px' }} >Feugiat a ligula rutrum luctus primis ultrice <br /> nteger congue magna at pretium purus a <br /> pretium ligula rutrum and luctus risus</p>
                        <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }} >
                            <a href='https://www.facebook.com/people/Aps-Techh/pfbid02yEy6wg1TQKCJVE9ZeuRV1QbnFMj2VfFt22QFeFLAUQU2HFhVodPU36ijNe3eNx3nl/?mibextid=ZbWKwL' target='_blank' ><img src={Face} height={24} width={24} style={{ cursor: "pointer" }} /></a>
                            <img src={Twit} height={24} width={24} style={{ cursor: "pointer" }} />
                            <a href='https://www.instagram.com/aps_technologies.tvl/?igsh=NmZ1bm14ZDZweHMz' target='_blank'>
                                <img src={Insta} height={24} width={24} style={{ cursor: "pointer" }} />
                            </a>
                            <img src={LinkedIn} height={24} width={24} style={{ cursor: "pointer" }} />
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', color: '#ffffff' }} >
                        <h2 style={{ marginBottom: "20px" ,color:'white' }} >Industry Sector</h2>
                        <P>Contact us</P>
                        <P>How it Works</P>
                        <P>Office Create</P>
                        <P>Residential ExPlore</P>
                        <P>Terms & Services</P>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', color: '#ffffff', textAlign: 'justify' }} >
                        <h2 style={{ marginBottom: "20px",color:'white' }} >Get In Touch</h2>
                        <p style={{color:'white'}} >23/C, First floor, <br/>
                            Rajarajeshwari Nagar south Street<br/>
                            NGO B colony<br/>
                            Tirunelveli 627007<br /></p>
                        <p style={{color:'white'}} >+91 73053 95976</p>
                        <P>example@gmail.com</P>
                    </Box>
                </Box>
                <hr
                    style={{
                        backgroundColor: 'red',
                        width: '100%',
                        height: 1
                    }}
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', textAlign: 'justify', color: '#ffffff' }} >
                    <Box>
                        <p>© 2023-25 | Alrights reserved by <span style={{ color: 'red', textDecoration: 'underline', cursor: 'pointer' }} >TechTime</span></p>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row' }} >
                        <p>Privacy</p>
                        <p>Terms & Condition</p>
                        <p>Legal</p>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ '@media (max-width:1024px)': { display: 'none' } }} >
                <img src={require("../src/images/resource/footer-thumb.png")} width={'100%'} alt="" />
            </Box>
        </Box>
    )
}

export default Footer