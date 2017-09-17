import React, { Component } from 'react';
import {Link} from 'react-router'
class Plug extends Component {
  render() {
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        width: "100%"
    }
    return (
     <div style={styles}>
      <Link to="/dashboard"> Go to dashboard </Link>
     </div>
    )
  }
};

export default Plug;
