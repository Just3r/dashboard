import React, { Component } from 'react';
import SideBarMenu from './SideBarMenu';
import SideBarCard from './SideBarCard';
import SideBarProfile from './SideBarProfile';
class SideBar extends Component {
  render() {
    const {user} = this.props
    return (
     <div className="sidebar">
      <SideBarProfile  {...user}/>
      <SideBarMenu{...this.props}/>
      <SideBarCard user={user}/>
     </div>
    )
  }
};

export default SideBar;
