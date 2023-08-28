import React from "react";
import './Market.css'

const Market = () => {
  return (
    <div>
      <div className="heading">
        <h2>
          Internet Marketing
        </h2>
        <div className="description">
          <p>
            Get a winning strategy for promoting your business online, including SEO, advertising
            and branding
          </p>
        </div>
      </div>
      <div className="info">
        <div className="items">
          <h2 className="count">01</h2>
          <h2>Find</h2>
          <p className="description">
            We will find clients in your area looking for your business services through our
            targeted marketing systems.
          </p>
        </div>
        <div className="items">
          <h2 className="count">02</h2>
          <h2>Connect</h2>
          <p className="description">
            We will connect them real time to your business through multiple means.
          </p>
        </div>
        <div className="items">
          <h2 className="count">03</h2>
          <h2>Grow</h2>
          <p className="description">
            We will grow your business by supporting your ever expanding customer base and helping
            you manage your business growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Market;