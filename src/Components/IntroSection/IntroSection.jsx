import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCirclePlay, faXmark } from '@fortawesome/free-solid-svg-icons';
import video_illustration from '../../assets/images/arts/intro-section-illustration.png';
import './IntroSection.css';


const VideoOverlay = ({ src, HandleVideo }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadTimeout = setTimeout(() => setIsLoading(false), 2000);

        return () => clearTimeout(loadTimeout);
    }, []);

    return (
        <div className="videoOverlay d-flex align-items-center justify-content-center position-fixed top-0 vw-100 vh-100">
            {isLoading ? (
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            ) : (
                <iframe
                    width="100%"
                    height="315"
                    src={`${src}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video shadow"
                ></iframe>
            )}

            <button
                className="btn btn-primary position-absolute top-0 end-0 me-3 mt-3 me-sm-5"
                type="button"
                onClick={HandleVideo}
            >
                <FontAwesomeIcon icon={faXmark} className="icon" />
            </button>
        </div>
    );
};



const IntroSection = () => {
  const [closeVideo, setCloseVideo] = useState(true);

  const HandleVideo = () => {
    setCloseVideo(!closeVideo);
  }

  return (
    <section id="home" className="intro-section">
        <div className="container">
            <div className="row align-items-center text-white">
                <div className="col-md-6 intros">
                    <h1 className="display-2">
                        <span className="display-2 intro">Welcome to Patrix</span>
                        <span className="display-2 description lh-base">
                            This is a multi-purpose portfolio landing page built with react and bootstrap v5. (here you can place your description text)
                        </span>
                    </h1>
                    <button type='button' className='rounded-pill btn-rounded'>Get in Touch 
                        <span><FontAwesomeIcon icon={faArrowRight} className='icon'/></span>
                    </button>
                </div>
                <div className="col-md-6 intros text-end">
                    <div className="video-box position-relative">
                        <img src={video_illustration} alt="video illustration" className='img-fluid'/>
                        <FontAwesomeIcon icon={faCirclePlay} className='icon position-absolute top-50 start-50 translate-middle'/>
                        <div className='border-animation position-absolute top-50 start-50 translate-middle' onClick={HandleVideo}></div>
                    </div>
                </div>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fillOpacity="1" d="M0,128L48,122.7C96,117,192,107,288,122.7C384,139,480,181,576,176C672,171,768,117,864,122.7C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        {
            closeVideo?
            '':
            <VideoOverlay src='https://www.youtube.com/embed/_22ojRDfu30' HandleVideo={HandleVideo}/>
        }
        
    </section>
  )
}

export default IntroSection