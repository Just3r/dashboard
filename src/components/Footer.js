import React, { Component } from 'react';
import { Link } from 'react-router';
import navLinks,  {socialLinks, legalInfo} from '../helpers/index';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';
class Footer extends Component {
  render() {
    const socialIcons ={
      facebook,
      twitter,
      linkedin
    };
    const headers = Object.keys(navLinks);
    return (
     <footer  className="footer">
        <nav className="footer__links">
          {headers.map((link,index) => 
            <div className="footer__links-item" key={link}>
              <h3 className="items-header">{link}</h3>
                {navLinks[link].map(item => <Link to="/dashboard" key={item} className="item"> {item} </Link>)}
              {index === 2 
                ? <div className="social-icons">
                  {socialLinks.map(iconName => <Link key={iconName}  className="item" to="/dashboard"> <img className="icon" src={socialIcons[iconName]} alt={iconName}/></Link>)}
                </div>
                : ''}
          </div>)}
        </nav>
        <div   className="footer__legal">
              {legalInfo.map(item => 
                <div key={item}  className="footer__legal-item">
                  <p className="item-text">{item}</p>
                </div>)
              }
        </div>
     </footer>
    )
  }
};

export default Footer;
