import React, { Component } from 'react';
import {menuLinks, bill} from '../helpers/links'
class SideBarMenu extends Component {
  render() {
    let menuContainer = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxSizing: "border-box",
        backgroundColor: "#777776",
        color: "#FFFFFF",
        flex: "3",
        width: "100%",
        padding: "1em",
        minWidth: "240px"
    }

    let menuItem = {
      display: "flex",
      flex: "1",
      alignItems: "center",
      justifyContent: "space-between",
      margin: "0.5em 0"
    }

    let styledBill = {
      backgroundColor: "#414140"
    }
    let menuParagraph = {
      margin: "0"
    }
    return (
      <div style={menuContainer} className="sidebarmenu">
      <div style={menuItem}> 
          <i>icon</i>
          <p style={menuParagraph}>{bill}</p>
          <i>></i>
        </div>
        {menuLinks.map(item => 
        <div key={item} style={menuItem}> 
          <i>icon</i>
          <p style={menuParagraph}>{item}</p>
          <i>></i>
        </div>  )}
      </div>
    )
  }
};

export default SideBarMenu;
