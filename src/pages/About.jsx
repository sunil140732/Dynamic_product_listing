import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <div className="container text-center py-5">
        <h1 className="display-4 mb-4">Welcome to Our Store!</h1>
        <p className="lead mb-5">
          We believe that shopping should be an experience filled with joy and excitement. 
          Our mission is to bring you the latest trends and must-have items at irresistible prices, all while providing exceptional customer service.
        </p>
        <h2 className="mb-4">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-4 text-white bg-primary">
              <div className="card-body">
                <h5 className="card-title">Quality Products</h5>
                <p className="card-text">We carefully curate our selection to ensure you receive only the best quality items.</p>
              </div>
              <div className="card-footer bg-primary">
                <strong>Your satisfaction is our priority!</strong>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 text-white bg-success">
              <div className="card-body">
                <h5 className="card-title">Affordable Prices</h5>
                <p className="card-text">Our competitive pricing means you can shop without breaking the bank.</p>
              </div>
              <div className="card-footer bg-success">
                <strong>Great deals await!</strong>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 text-white bg-info">
              <div className="card-body">
                <h5 className="card-title">Exceptional Service</h5>
                <p className="card-text">Our dedicated team is here to assist you every step of the way.</p>
              </div>
              <div className="card-footer bg-info">
                <strong>We're here for you!</strong>
              </div>
            </div>
          </div>
        </div>
        <a href="/products" className="btn btn-primary btn-lg mt-4">Start Shopping Now</a>
      </div>
    </div>
  );
}

export default About;