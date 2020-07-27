import React, { Component, useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navigation from './navigation';
import SocialIcons from './social-icons';
import './cover.css';

import textFill from '../images/animated-text-fill.png';

const Cover = ({ coverImg }) => {
  const [descriptors, setDescriptors] = useState([
    'Web Developer',
    'Designer',
    'Project Manager'
  ]);
  const [activeDescriptor, setActiveDescriptor] = useState(descriptors[0]);

  function updateDescriptor () {
    setTimeout(() => {
      let nextIdx = descriptors.findIndex((descriptor) => descriptor === activeDescriptor) + 1;
      const nextDescriptor = (nextIdx < descriptors.length) ? descriptors[nextIdx] : descriptors[0];

      setActiveDescriptor(nextDescriptor);
    }, 6000);
  }

  useEffect(() => {
    updateDescriptor();
  }, [activeDescriptor]);

  return (
    <div
      id="#top"
      className="cover"
      style={{
        backgroundColor: "black"
      }}
    >
      <Navigation />
      <Img
        fluid={coverImg}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: "0.2",
          filter: "blur(0.5px)"
        }} />
      <div className="cover-text">
        <div className="title">
          Mario Portillo
        </div>
        <div className="subtitle">
          { activeDescriptor }
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Cover;
