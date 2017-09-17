import React, { Component } from 'react';
import {Link} from 'react-router'
class Plug extends Component {
  render() {
    return (
     <div className="plug-container">
      <Link to="/dashboard"> Go to dashboard </Link>
     </div>
    )
  }
};

export default Plug;
