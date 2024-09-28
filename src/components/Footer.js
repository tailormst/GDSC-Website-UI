import React from "react";
import "./Footer.css";
import gdgLogo from './Images/gdglogo.png';
import emailimg from './Images/emailimg.png';
import footimg from './Images/footimg.png';
import instaimg from './Images/instaimg.png';
import linkedinimg from './Images/linkedinimg.png';
import locimg from './Images/locimg.png';
import twitterimg from './Images/twitterimg.png';

function Footer() {

    const rbuAddress = "https://www.google.com/maps/dir/21.1779584,79.0560768/rbu+nagpur+address+map/@21.1771851,79.0536115,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3bd4c1006cc78ce9:0x37afa03de75a8708!2m2!1d79.0611366!2d21.1763009?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D";

    const gdsc = "https://rcoem-gdsc.netlify.app/"
    return (
        <footer>
            <div className="footer">
                <div className="foot-left">
                    <img src={gdgLogo} alt="GDG RCOEM logo" />
                    <div className="footer-text">
                        <p>Google Developers Group</p>
                        <p>
                            <a href={gdsc}>On Campus</a> &bull; Ramdeobaba University
                        </p>
                    </div>
                </div>
                <div className="foot-right">
                    <div className="contact-details">
                        <a href={rbuAddress}>
                            <img src={locimg} alt="Location" />
                        </a>
                        <p>
                            Shri Ramdeobaba College of Engineering and Management, Katol Road,
                            Nagpur-440013
                        </p>
                    </div>
                    <div className="contact-details email-section">
                        <a href="mailto:email@rcoem.edu">
                            <img className="sec-det-img" src={emailimg} alt="Email" />
                        </a>
                        <p>dsc_rknec@gmail.com</p>
                    </div>
                    <div className="follow-us">
                        <p className="follow">Follow Us:</p>
                        <p className="follow-img">
                            <a
                                href="https://www.instagram.com/gdg_rbu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={instaimg} alt="Instagram" />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/gdsc-rcoem/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img className="sec-fol-img" src={linkedinimg} alt="Linkedin" />
                            </a>
                            <a
                                href="https://x.com/i/flow/login?redirect_after_login=%2Fgdsc_rcoem"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={twitterimg} alt="Twitter" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="foot-bottom">
                <img src={footimg} alt="Footer bottom image" />
            </div>
        </footer>
    );
}

export default Footer;