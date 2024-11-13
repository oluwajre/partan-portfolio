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
                        <p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur nam ad neque sunt totam vero recusandae doloremque officiis nostrum, numquam mollitia ipsam facilis eveniet sapiente corrupti?</p>
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
                        <p className="lh-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cupiditate incidunt accusamus nihil! Sint natus recusandae atque nisi ullam odio totam suscipit. Sunt, dignissimos. Non dolores debitis voluptate.</p>
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
                        <p className="lh-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cupiditate incidunt accusamus nihil! Sint natus recusandae atque nisi ullam odio totam suscipit. Sunt, dignissimos. Non dolores debitis voluptate.</p>
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
                        <p className="lh-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cupiditate incidunt accusamus nihil! Sint natus recusandae atque nisi ullam odio totam suscipit. Sunt, dignissimos. Non dolores debitis voluptate.</p>
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