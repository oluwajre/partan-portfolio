import React from 'react';
import './Portfolio.css';
import { portfolio_img_1, portfolio_img_2, portfolio_img_3, portfolio_img_4, portfolio_img_5, portfolio_img_6, portfolio_img_7, portfolio_img_8, portfolio_img_9 } from '../../Constants/portfolio';

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
        <div className="container">
            <div className="row text-center mt-5">
                <h1 className="display-3 fw-bold text-capitalize">Latest Work</h1>
                <div className="heading-line"></div>
                <div className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non saepe a!</div>
            </div>
            <div className="row mt-5 mb-4 g-3 text-center">
                <div className="col-md-12">
                    <button className="btn btn-outline-primary me-2" type="button">All</button>
                    <button className="btn btn-outline-primary me-2" type="button">Websites</button>
                    <button className="btn btn-outline-primary me-2" type="button">Design</button>
                    <button className="btn btn-outline-primary" type="button">Mockup</button>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_1} alt="portfolio 1 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>       
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_2} alt="portfolio 2 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_3} alt="portfolio 3 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_4} alt="portfolio 4 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_5} alt="portfolio 5 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_6} alt="portfolio 6 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_7} alt="portfolio 7 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_8} alt="portfolio 8 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="portfolio-box shadow">
                        <img src={portfolio_img_9} alt="portfolio 9 image" className="img-fluid" />
                        <div className="portfolio-info">
                            <div className="caption">
                                <h4>PROJECT NAME</h4>
                                <p>Category Project</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Portfolio