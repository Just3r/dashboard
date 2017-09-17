import React, { Component } from 'react';
import arrow from '../assets/icons/arrow.svg';
import profile from '../assets/icons/profile.svg';
class SideBarProfile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__person">
            <img className="profile__person-image" src={profile} alt="profile"/>
        </div>
        <div className="profile__info">
            <div className="profile__info-name"><h4 >{this.props.name}</h4></div>
            <img className="icon" src={arrow} alt="arrow"/>
        </div>
      </div>
    )
  }
};

export default SideBarProfile;

