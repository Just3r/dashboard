import React, { Component } from 'react';
import { Link } from 'react-router';
import {menuLinks, billCreation} from '../helpers/index';
import arrow from '../assets/icons/arrow.svg';
import plusIcon from '../assets/icons/plus.svg';
import dashboard from '../assets/icons/dashboard.svg';
import produkte from '../assets/icons/produkte.svg';
import kunden from '../assets/icons/kunden.svg';
import rechnungen from '../assets/icons/rechnungen.svg';
class SideBarMenu extends Component {
  render() {
    const iconsObject = {
      dashboard,
      produkte,
      kunden,
      rechnungen
    }
    const {location} = this.props
    return (
      <nav className="nav">
        <Link className="nav__item-action" to="/dashboard"> 
            <img className="icon" src={plusIcon} alt={plusIcon}/>
            <span>{billCreation}</span>
            <img className="icon" src={arrow} alt={arrow}/>
          </Link>
        {
          menuLinks.map(item => 
            <Link to="/dashboard" key={item} className={`nav__item ${location && location.pathname.slice(1) === item ? 'active': ''}`}> 
              <img className="icon" src={iconsObject[item]} alt="link-icon"/>
              <span>{item}</span>
              <img className="icon" src={arrow} alt={arrow}/>
            </Link>  
        )}
      </nav>
    )
  }
};

export default SideBarMenu;
