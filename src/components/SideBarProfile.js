import React, { Component } from 'react';
import { Link } from 'react-router';
import arrow from '../assets/icons/arrow.svg';
import profile from '../assets/icons/profile.svg';
class SideBarProfile extends Component {
  render() {
    return (
      <div className="profile">
        <div className="profile__person">
            <img className="profile__person-image" src={profile} alt="profile"/>
        </div>
        <Link to="/dashboard" className="profile__info">
            <span className="profile__info-name">{this.props.name}</span>
            <img className="icon" src={arrow} alt="arrow"/>
        </Link>
      </div>
    )
  }
};

export default SideBarProfile;

