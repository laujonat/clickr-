import React from 'react';
import { Link } from 'react-router-dom';

class Welcome extends React.Component {

  render() {
    return (
      <div className="welcome-text">
        <h1 id="welcome-h1">A Flickr remake.</h1>
        <h3 id="welcome-h3">
          Where really beautifully cheesy photos exist. Join us. 
        </h3>
        <div className="welcome-btn"><Link to="/signup">Sign up</Link></div>

      </div>
    );
  }
}

export default Welcome;
