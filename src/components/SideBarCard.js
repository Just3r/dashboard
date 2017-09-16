import React, { Component } from 'react';

class SideBarCard extends Component {
  render() {
    let styledCard = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "stretch",
        boxSizing: "border-box",
        flex: "1",
        width: "100%",
        backgroundColor: "#44B6A7",
        color: "#FFF",
        padding: "1em",
        minWidth: "240px"
    }
    let cardRowGeneral = {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center"
    }

    let cardRowDetailed = {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }

    let cardHeader = {
      display: "flex",
      flex: "1",
      alignItems: "center",
      margin: "0.5em 0"
    } 
    return (
     <div style ={styledCard} className="sidebar__card">
        <div style={cardRowGeneral} className="sidebar__card-row"><h4 style={cardHeader}>SALDO</h4></div>
        <div style={cardRowGeneral} className="sidebar__card-row"><h3 style={cardHeader}> <span>$</span>{this.props.saldo}</h3></div>
        <div style={cardRowDetailed} className="sidebar__card-row"><div style={cardHeader} className="key">GESENDET:</div><div className="value"><span>$</span>{this.props.gesendet}</div></div>
        <div style={cardRowDetailed} className="sidebar__card-row"><div style={cardHeader} className="key">ÜBERFÄLLIG</div><div className="value"><span>$</span>{this.props.uberfallig}</div></div>
    </div>
    )
  }
};

export default SideBarCard;
