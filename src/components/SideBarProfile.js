import React, { Component } from 'react';

class SideBarProfile extends Component {
  render() {
    let sidebar = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#2F2F2E",
        color: "#FFFFFF",
        boxSizing: "border-box",
        padding: "1em",
        minWidth: "240px"
    }

    let logo = {
      display: "block",
      width: "75px",
      height: "75px"
    }
    let info = {
      display: "flex",
      flex: "1",
      width: "100%",
      justifyContent: "center",
      alignItems: "center"
    }
    let userName = {
      display: "flex",
      flex: "1",
      justifyContent: "center",
      alignItems: "center"
    }

    let header = {
      margin: "0 0 0 10px"
    }

    let icon = {

    }
    return (
     <div style={sidebar} className="sidebar">
        <div className="sidebar__logo">
            <img style={logo} className="sidebar__logo-image" src="../assets/profile.svg" alt="user_profile"/>
        </div>
        <div style={info} className="sidebar__info">
            <div style={userName}><h4 style={header} >{this.props.name}</h4></div>
            <div><i>></i></div>
        </div>
    </div>
    )
  }
};

export default SideBarProfile;

