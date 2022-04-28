import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./Footer.css"
const Footer = () => {
  return (
    <div className='Footer'>
        <div className="footercontent">
                <div className="imgn">
                    <div className="img">
                        <img height="60%" src="https://assets.inshorts.com/website_assets/images/logo_footer.png" alt="" />
                        <br />
                        <p><span>Inshorts</span> Pte. Ltd.</p>
                        <p>©COPYRIGHT 2022</p>
                    </div>
                    <div className="contact">
                        <h2>Contact us</h2>
                        <br />
                        <p>Terms & conditions</p>
                        <p>Privacy Policies</p>
                    </div>
                </div>
                <div className="icon">
                    <div className="order">
                    <FacebookIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Footer