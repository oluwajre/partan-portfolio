import React from 'react'
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPaperPlane, faCloudUploadAlt, faCode } from '@fortawesome/free-solid-svg-icons';
import { service_1, service_2, service_3 } from '../../Constants/services';

const Services = () => {
  return (
    <section id="services" className="services">
        <div className="container">
            <div className="row text-center">
                <h1 className='display-3 fw-bold'>Our Services</h1>
                <div className="heading-line mb-1"></div>
            </div>

            <div className="row py-2 mt-0 mb-3 align-items-center">
                <div className="col-md-6 border-right">
                    <div className="bg-white p-3">
                        <h2 className="fw-bold text-capitalize text-center">
                            Our Services Range From Initial Design To Deployment Anywhere Anytime
                        </h2>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="bg-white p-4 text-start">
                        <p className="fw-light">Partan is a dynamic and innovative company dedicated to providing top-tier solutions in [industry name]. With a passion for excellence, we leverage technology, creativity, and strategy to deliver outstanding results for our clients.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 services mt-4">
                    <div className="services__content">
                        <FontAwesomeIcon icon={faPaperPlane} className='icon'/>
                        <h3 className="display-3--title mt-1">Marketing</h3>
                        <p className="lh-lg">From SEO to social media advertising, we craft marketing strategies that boost brand awareness and drive conversions.</p>
                        <button type='button' className='rounded-pill btn-rounded border-primary'>Learn more
                            <span><FontAwesomeIcon icon={faArrowRight} className='icon'/></span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 services mt-4 text-end">
                    <div className="services__pic">
                        <img src={service_1} alt="marketing illustration" className="img-fluid" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 services mt-4 text-start">
                    <div className="services__pic">
                    <img src={service_2} alt="web_development illustration" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 services mt-4">
                    <div className="services__content">
                        <FontAwesomeIcon icon={faCode} className='icon'/>
                        <h3 className="display-3--title mt-1">Web Development</h3>
                        <p className="lh-lg">We design and develop user-friendly websites and mobile applications tailored to your business needs.</p>
                        <button type='button' className='rounded-pill btn-rounded border-primary'>Learn more
                            <span><FontAwesomeIcon icon={faArrowRight} className='icon'/></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 services mt-4">
                    <div className="services__content">
                        <FontAwesomeIcon icon={faCloudUploadAlt} className='icon'/>
                        <h3 className="display-3--title mt-1">Cloud Hosting</h3>
                        <p className="lh-lg">Reliable, secure, and high-performance cloud hosting solutions tailored to your business needs. We ensure maximum uptime, scalability, and data security.</p>
                        <button type='button' className='rounded-pill btn-rounded border-primary'>Learn more
                            <span><FontAwesomeIcon icon={faArrowRight} className='icon'/></span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12 services mt-4 text-end">
                    <div className="services__pic">
                    <img src={service_3} alt="cloud_hosting illustration" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services