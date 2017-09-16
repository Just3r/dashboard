import React, { Component } from 'react';
import SideBarProfile from './SideBarProfile';
import SideBarMenu from './SideBarMenu';
import SideBarCard from './SideBarCard';
class SideBar extends Component {
  componentWillMount(){
    
  }
  render() {
    const {user} = this.props
    let sideBarProfile = {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        display: "flex",
        flex: 1,
        maxWidth: "240px"
    }
    return (
     <div style={sideBarProfile}>
      <SideBarMenu/>
      <SideBarCard{...user}/>
     </div>
    )
  }
};

export default SideBar;
