import React from 'react';
import './GetStarted.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';

const GetStarted = () => {
  return (
    <section id="contact" className="get-started">
        <div className="container">
            <div className="row text-center">
                <h1 className="display-3 fw-bold text-capitalize">Get Started</h1>
                <div className="heading-line"></div>
                <p className="lh-lg">
                    To be a global leader in our industry, setting new standards for innovation, quality, and customer satisfaction.
                </p>
            </div>

            <div className="row text-white">
                <div className="col-12 col-lg-6 gradient shadow p-3">
                    <div className="cta-info w-100">
                        <h4 className="display-4 fw-bold">100% Satisfaction Guaranteed</h4>
                        <p className="lh-lg">To transform businesses with tailored solutions that drive success, efficiency, and growth.</p>
                        <h3 className="display-3--brief">What will be the next step</h3>
                        <ul className="cta-info__list">
                            <li><FontAwesomeIcon icon={faCheck} className='icon'/>We'll prepare the proposal</li>
                            <li><FontAwesomeIcon icon={faCheck} className='icon'/>We'll discuss it together</li>
                            <li><FontAwesomeIcon icon={faCheck} className='icon'/>Let's start the discussion</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-lg-6 bg-white shadow p-3">
                    <div className="form w-100 pb-2">
                        <h4 className="display-3--title mb-5">Start your Project</h4>
                        <form action="" className='row'>
                            <div className="col-lg-6 col-md-6 mb-3">
                                <input type="text" placeholder="First Name" id="imputFirstName" className="shadow form-control form-control-lg" />
                            </div>
                            <div className="col-lg-6 col-md-6 mb-3">
                                <input type="text" placeholder="Last Name" id="imputLastName" className="shadow form-control form-control-lg" />
                            </div>
                            <div className="col-lg-12 mb-3">
                                <input type="email" placeholder="Email Address" id="imputEmail" className="shadow form-control form-control-lg" />
                            </div>
                            <div className="col-lg-12 mb-3">
                                <textarea name="message" placeholder="message" id="message" rows="8" className='shadow form-control form-control-lg'></textarea>
                            </div>

                            <div className="text-center d-grid mt-1">
                                <button type="button" className="btn btn-primary rounded-pill py-3">
                                    Submit
                                    <FontAwesomeIcon icon={faPaperPlane} className='icon ms-1' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetStarted