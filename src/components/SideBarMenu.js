import React, { Component } from 'react';
import { Link } from 'react-router';
import {menuLinks, billAction} from '../helpers/links';
import arrow from '../assets/icons/arrow.svg';
import plusIcon from '../assets/icons/plus.svg';
import dashboard from '../assets/icons/dashboard.svg';
import produkte from '../assets/icons/produkte.svg';
import kunden from '../assets/icons/kunden.svg';
import rechnungen from '../assets/icons/rechnungen.svg';
console.log(menuLinks)
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
        <li className="nav__item-action"> 
            <img className="icon" src={plusIcon} alt={plusIcon}/>
            <Link to="/dashboard"> {billAction} </Link>
            <img className="icon" src={arrow} alt={arrow}/>
          </li>
        {
          menuLinks.map(item => 
            <li key={item} className={`nav__item ${location && location.pathname.slice(1) === item ? 'active': ''}`}> 
              <img className="icon" src={iconsObject[item]} alt="link-icon"/>
              <Link to="/dashboard"> {item} </Link>
              <img className="icon" src={arrow} alt={arrow}/>
            </li>  
        )}
      </nav>
    )
  }
};

export default SideBarMenu;
