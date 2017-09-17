import React, { Component } from 'react';
import SideBarMenu from './SideBarMenu';
import SideBarCard from './SideBarCard';
class SideBar extends Component {
  render() {
    const {user} = this.props
    return (
     <div className="sidebar">
      <SideBarMenu{...this.props}/>
      <SideBarCard user={user}/>
     </div>
    )
  }
};

export default SideBar;
