import React from 'react'
import './Companies.css'
import {company_1, company_2, company_3, company_4, company_5, company_6  } from '../../Constants/companies';

const Companies = () => {
  return (
    <section id="companies" className="companies">
        <div className="container">
            <div className="row text-center">
                <h4 className='fw-bold lead mb-3'>Trusted by Companies like</h4>
                <div className="heading-line mb-5"></div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-lg-2">
                    <div className="companies__logo-box shadow-sm">
                        <img src={company_1} alt="company-1" className='img-fluid' />
                    </div>
                </div>

                <div className="col-md-4 col-lg-2">
                    <div className="companies__logo-box shadow-sm">
                        <img src={company_2} alt="company-2" className='img-fluid' />
                    </div>
                </div>

                <div className="col-md-4 col-lg-2">
                    <div className="companies__logo-box shadow-sm">
                        <img src={company_3} alt="company-3" className='img-fluid' />
                    </div>
                </div>

                <div className="col-md-4 col-lg-2">
                    <div className="companies__logo-box shadow-sm">
                        <img src={company_4} alt="company-4" className='img-fluid' />
                    </div>
                </div>

                <div className="col-md-4 col-lg-2">
                    <div className="companies__logo-box shadow-sm">
                        <img src={company_5} alt="company-5" className='img-fluid' />
                    </div>
                </div>

                <div className="col-md-4 col-lg-2">
                    <div className="companies__logo-box shadow-sm">
                        <img src={company_6} alt="company-6" className='img-fluid' />
                    </div>
                </div>

                
            </div>
        </div>
    </section>
  )
}

export default Companies