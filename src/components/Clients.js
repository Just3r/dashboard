import React, { Component } from 'react';

class Clients extends Component {
  render() {
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        width: "100%"
    }
    return (
     <h2 style={styles}> Clients should appear here </h2>
    )
  }
};

export default Clients;
