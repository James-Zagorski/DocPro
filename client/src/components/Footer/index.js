import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="main-footer clearfix">

      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-dark mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        <h4>

          <a href="https://www.linkedin.com/home">linkdin</a>


          <img className="footer-icon" src="/favicon.jpeg" alt="Valor Icon" />

          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >

          </span>{' '}

        </h4>
      </div>
    </footer>
  );
};

export default Footer;
