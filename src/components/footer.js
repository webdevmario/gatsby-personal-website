import React from 'react';
import Img from 'gatsby-image';

const Footer = () => (
  <div
    style={{
      background: 'white',
      padding: '30px',
      textTransform: 'uppercase',
      color: 'rgba(0, 0, 0, 0.6)',
      letterSpacing: '3px',
      textAlign: 'right'
    }}
  >
    <div style={{ fontSize: '0.8rem', fontWeight: '600' }}>
      Mario Portillo
    </div>
    <div style={{ fontSize: '0.6rem' }}>
      &copy; 2020
    </div>

    {/* <div style={{ fontSize: '0.5rem' }}>
      <small>Site created using <span style={{ fontWeight: '600' }}>GatsbyJS</span>.</small>
    </div> */}

  </div>
);

export default Footer;
