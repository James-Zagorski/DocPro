import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">

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
          **James, if you can link to linkedin, and add logo in footer that would be great**



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