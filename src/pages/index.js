import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGhost } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './index.css';

library.add(faGithub);
library.add(faLinkedin);
library.add(faTwitter);

const IndexPage = () => (
  <Layout />
);

{/* <h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<Link to="/page-2/">Go to page 2</Link> */}

export default IndexPage
