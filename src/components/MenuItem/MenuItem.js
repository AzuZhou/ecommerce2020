import React from 'react';

const MenuItem = ({ title, image }) => (
  <div className="menu-item">
    <div className="background-image" style={{ backgroundImage: `url(${image})` }} />
    <div className="content">
      <h1 className="title">{title}</h1>
      <p className="subtitle">SHOP NOW</p>
    </div>
  </div>
);

export default MenuItem;
