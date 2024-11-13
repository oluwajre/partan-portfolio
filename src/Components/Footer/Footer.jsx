import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneVolume, faEnvelopeOpenText, faMapLocation, faCopyright, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex align-items-center">
                    <FontAwesomeIcon icon={faPhoneVolume} className='contact-box__icon mb-lg-2' />
                    <div className="contact-box__info">
                        <a href="tel:+2349137819540" className="contact-box__info--title">+234 913 781 9540</a>
                        <p className="contact-box__info--subtitle">Mon-Fri 9am-6pm</p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex align-items-center">
                    <FontAwesomeIcon icon={faEnvelopeOpenText} className='contact-box__icon mb-lg-2' />
                    <div className="contact-box__info">
                        <a href="mailto:oluwajre2412" className="contact-box__info--title">oluwajre2412@gmail.com</a>
                        <p className="contact-box__info--subtitle">Online support</p>
                    </div>
                </div>
                <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex align-items-center">
                    <FontAwesomeIcon icon={faMapLocation} className='contact-box__icon mb-lg-2' />
                    <div className="contact-box__info">
                        <a href="" className="contact-box__info--title">Lagos, Nigeria</a>
                        <p className="contact-box__info--subtitle">LG 100281, NG</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-sm" style={{ backgroundColor: '#212121' }}>
            <div className="container">
                <div className="row py-4 text-center text-white">
                    <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                        Connect with us on Social Media
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} className='icon' /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className='icon' /></a>
                        <a href="#"><FontAwesomeIcon icon={faGithub} className='icon' /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className='icon' /></a>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-5">
            <div className="row text-white justify-content-center mt-3 pb-3">
                <div className="col-12 col-sm-6 col-lg-6 mx-auto">
                    <h5 className="text-capitalize fw-bold">Company Name</h5>
                    <hr className='bg-white d-inline-block mb-4' style={{ width: '60px', height: '2px'}}/>
                    <p className="lh-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem impedit molestiae iure adipisci pariatur saepe harum architecto.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
                    <h5 className="text-capitalize fw-bold">Products</h5>
                    <hr className='bg-white d-inline-block mb-4' style={{ width: '60px', height: '2px'}}/>
                    <ul className="list-inline company-list">
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
                    <h5 className="text-capitalize fw-bold">Useful Links</h5>
                    <hr className='bg-white d-inline-block mb-4' style={{ width: '60px', height: '2px'}}/>
                    <ul className="list-inline company-list">
                        <li><a href="#">Your Account</a></li>
                        <li><a href="#">Become an Affiliate</a></li>
                        <li><a href="#">Create an Account</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
                <div className="col-12 col-sm-6 col-lg-2 mb-4 mx-auto">
                    <h5 className="text-capitalize fw-bold">Contact</h5>
                    <hr className='bg-white d-inline-block mb-4' style={{ width: '60px', height: '2px'}}/>
                    <ul className="list-inline company-list">
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                        <li><a href="#">Lorem Ipsum</a></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-bottom py-5">
            <div className="container">
                <div className="row text-center text-white">
                    <div className="col-12">
                        <div className="footer-bottom__copyright">
                        <FontAwesomeIcon icon={faCopyright} className='icon me-1' />Copyright 2024 <a href="#">Multi-purpose Company</a> | Created by <a href="#">Adeolu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <a href="#" className="shadow btn btn-primary rounded-circle back-to-top">
            <FontAwesomeIcon icon={faChevronUp} className='icon'/>
        </a>
    </footer>
  )
}

export default Footer