import React, { Component } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Navigation from './navigation';
import SocialIcons from './social-icons';
import './cover.css';

import textFill from '../images/animated-text-fill.png';

const Cover = ({ coverImg }) => {
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
          Web Developer
        </div>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Cover;
