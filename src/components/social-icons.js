import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './social-icons.css';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <div>
        <a href=""><FontAwesomeIcon icon={['fab', 'github']} size="2x" /></a>
      </div>
      <div>
        <a href=""><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a>
      </div>
      <div>
        <a href=""><FontAwesomeIcon icon={['fab', 'twitter']} size="2x" /></a>
      </div>
    </div>
  );
}

export default SocialIcons;
