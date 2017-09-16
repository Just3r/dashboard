import React, { Component } from 'react';

class Bills extends Component {
  render() {
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        width: "100%"
    }
    return (
     <h2 style={styles}> Bills should appear here </h2>
    )
  }
};

export default Bills;
