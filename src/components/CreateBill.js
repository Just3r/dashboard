import React, { Component } from 'react';

class CreateBill extends Component {
  render() {
    let styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: "1",
        width: "100%"
    }
    return (
     <h2 style={styles}> CreateBill should appear here </h2>
    )
  }
};

export default CreateBill;
