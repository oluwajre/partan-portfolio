import React from 'react';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faStar, faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { client_1, client_2, client_3, client_4, client_5, clientData } from '../../Constants/testimonials';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,288L48,250.7C96,213,192,139,288,101.3C384,64,480,64,576,90.7C672,117,768,171,864,176C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="container">
            <div className="row text-center text-white">
                <h1 className="display-3 fw-bold">Testimonials</h1>
                <hr style={{width: '100px', height: '3px'}} className='mx-auto'/>
                <p className="lead pt-1">What our clients are saying</p>
            </div>
        

        <div className="row-align-items-center">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* CAROUSEL ITEM 1 */}
                    <div className="carousel-item active">
                        {/* TESTIMONIAL CARD  */}
                        <div className="testimonials__card">
                            <p className="lh-lg">
                                <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rem necessitatibus, 
                                ut reiciendis voluptatibus quaerat quas est id, iusto aut aliquam!
                                <FontAwesomeIcon icon={faQuoteRight} className='icon' />
                            </p>
                            <div className="ratings p-1">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                            </div>
                        </div>
                        {/* CLIENT PICTURE  */}
                        <div className="testimonials__picture">
                            <img src={client_1} alt="client-1 picture" className="rounded-circle img-fluid" />
                        </div>
                        {/* CLIENT NAME & ROLE  */}
                        <div className="testimonials__name">
                            <h3>{clientData.client_1.name}</h3>
                            <p className="fw-light">{clientData.client_1.role}</p>
                        </div>

                    </div>

                    {/* CAROUSEL ITEM 2 */}
                    <div className="carousel-item">
                        {/* TESTIMONIAL CARD  */}
                        <div className="testimonials__card">
                            <p className="lh-lg">
                                <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rem necessitatibus, 
                                ut reiciendis voluptatibus quaerat quas est id, iusto aut aliquam!
                                <FontAwesomeIcon icon={faQuoteRight} className='icon' />
                            </p>
                            <div className="ratings p-1">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                            </div>
                        </div>
                        {/* CLIENT PICTURE  */}
                        <div className="testimonials__picture">
                            <img src={client_2} alt="client-2 picture" className="rounded-circle img-fluid" />
                        </div>
                        {/* CLIENT NAME & ROLE  */}
                        <div className="testimonials__name">
                            <h3>{clientData.client_2.name}</h3>
                            <p className="fw-light">{clientData.client_2.role}</p>
                        </div>

                    </div>

                    {/* CAROUSEL ITEM 3 */}
                    <div className="carousel-item">
                        {/* TESTIMONIAL CARD  */}
                        <div className="testimonials__card">
                            <p className="lh-lg">
                                <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rem necessitatibus, 
                                ut reiciendis voluptatibus quaerat quas est id, iusto aut aliquam!
                                <FontAwesomeIcon icon={faQuoteRight} className='icon' />
                            </p>
                            <div className="ratings p-1">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                            </div>
                        </div>
                        {/* CLIENT PICTURE  */}
                        <div className="testimonials__picture">
                            <img src={client_3} alt="client-3 picture" className="rounded-circle img-fluid" />
                        </div>
                        {/* CLIENT NAME & ROLE  */}
                        <div className="testimonials__name">
                            <h3>{clientData.client_3.name}</h3>
                            <p className="fw-light">{clientData.client_3.role}</p>
                        </div>

                    </div>

                    {/* CAROUSEL ITEM 4 */}
                    <div className="carousel-item">
                        {/* TESTIMONIAL CARD  */}
                        <div className="testimonials__card">
                            <p className="lh-lg">
                                <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rem necessitatibus, 
                                ut reiciendis voluptatibus quaerat quas est id, iusto aut aliquam!
                                <FontAwesomeIcon icon={faQuoteRight} className='icon' />
                            </p>
                            <div className="ratings p-1">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                            </div>
                        </div>
                        {/* CLIENT PICTURE  */}
                        <div className="testimonials__picture">
                            <img src={client_4} alt="client-4 picture" className="rounded-circle img-fluid" />
                        </div>
                        {/* CLIENT NAME & ROLE  */}
                        <div className="testimonials__name">
                            <h3>{clientData.client_4.name}</h3>
                            <p className="fw-light">{clientData.client_4.role}</p>
                        </div>

                    </div>

                    {/* CAROUSEL ITEM 5 */}
                    <div className="carousel-item">
                        {/* TESTIMONIAL CARD  */}
                        <div className="testimonials__card">
                            <p className="lh-lg">
                                <FontAwesomeIcon icon={faQuoteLeft} className='icon' />
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rem necessitatibus, 
                                ut reiciendis voluptatibus quaerat quas est id, iusto aut aliquam!
                                <FontAwesomeIcon icon={faQuoteRight} className='icon' />
                            </p>
                            <div className="ratings p-1">
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                                    <FontAwesomeIcon icon={faStar} className='icon' />
                            </div>
                        </div>
                        {/* CLIENT PICTURE  */}
                        <div className="testimonials__picture">
                            <img src={client_5} alt="client-5 picture" className="rounded-circle img-fluid" />
                        </div>
                        {/* CLIENT NAME & ROLE  */}
                        <div className="testimonials__name">
                            <h3>{clientData.client_5.name}</h3>
                            <p className="fw-light">{clientData.client_5.role}</p>
                        </div>

                    </div>
                </div>
                <div className="text-center">
                    <button className="btn btn-outline-light me-1" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <FontAwesomeIcon icon={faLongArrowAltLeft} className='icon' />
                    </button>
                    <button className="btn btn-outline-light" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <FontAwesomeIcon icon={faLongArrowAltRight} className='icon' />
                    </button>
                </div>
            </div>
        </div>
    </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,288L48,250.7C96,213,192,139,288,101.3C384,64,480,64,576,90.7C672,117,768,171,864,176C960,181,1056,139,1152,133.3C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </section>
  )
}

export default Testimonials