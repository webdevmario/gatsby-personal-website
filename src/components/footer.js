import React from 'react';
import Img from 'gatsby-image';

const Footer = () => (
  <div
    style={{
      background: 'rgba(0, 0, 0, 0.4)',
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
      Web Developer &bull; Designer &bull; Project Manager
    </div>
    <div style={{ fontSize: '0.5rem' }}>
      <small>Site created using <span style={{ fontWeight: '600' }}>GatsbyJS</span>.</small>
    </div>
  </div>
);

export default Footer;
