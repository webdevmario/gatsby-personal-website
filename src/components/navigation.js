import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__options">
          <div>
            <a href="#" title="Home">Home</a>
          </div>
          <div>
            <a href="#" title="About Me">About Me</a>
          </div>
          <div>
            <a href="#" title="Experience">Experience</a>
          </div>
          <div>
            <a href="#" title="Projects">Projects</a>
          </div>
          <div>
            <a href="#" title="Contact Me">Contact Me</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
