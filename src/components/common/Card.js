import React from 'react';

import './Card.css';

const Card = ({ title }) => (
  <section className="card">
    <div className="section-content">
      { title }
    </div>
  </section>
);

export default Card;
