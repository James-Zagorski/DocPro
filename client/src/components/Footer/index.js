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
          <img className="footer-icon" src="/favicon.jpeg" alt="Valor Icon" />
        </h4>

        <div className="footer-container">
          <div className="row">
            {/* Column1*/}
            <div className="col">
              <h4 className="information">information</h4>
              <ul className="list-unstyled">
                <li><a className="linkedin" href="https://www.linkedin.com/company/81539399/admin/">linkdin</a>
                </li>
                <li>GitHub</li>
                <li>contact</li>
                <li>Phoenix, Arizona</li>
              </ul>
            </div>

            {/* Column2*/}
            <div className="col">
              <h4 className="information">information</h4>
              <ul className="list-unstyled">
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
              </ul>
            </div>

            {/* Column3*/}
            <div className="col">
              <h4 className="information">information</h4>
              <ul className="list-unstyled">
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
                <li>placeholder</li>
              </ul>
            </div>
          </div>
        </div>


        <span
          className="emoji"
          role="img"
          aria-label="heart"
          aria-hidden="false"
        >

        </span>{' '}


      </div>
    </footer>
  );
};

export default Footer;
