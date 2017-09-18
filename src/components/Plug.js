import React, { Component } from 'react';
import {Link} from 'react-router'
class Plug extends Component {
  render() {
    return (
      <Link className="plug-container" to="/dashboard"> Go to dashboard </Link>
    )
  }
};

export default Plug;
