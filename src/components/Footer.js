import React, { Component } from 'react';
import { Link } from 'react-router';
import links,  {social, legalInfo} from '../helpers/links';
import facebook from '../assets/icons/facebook.svg';
import twitter from '../assets/icons/twitter.svg';
import linkedin from '../assets/icons/linkedin.svg';
class Footer extends Component {
  render() {
    const socialIcons ={
      facebook,
      twitter,
      linkedin
    }
    const headers = Object.keys(links)
    return (
     <footer  className="footer">
        <div className="footer__links">
          {headers.map((link,index) => 
            <div className="footer__links-item" key={link}>
              <h3 className="items-header">{link}</h3>
              <ul className="items-list">
                {links[link].map(item => <li key={item} className="item"> <Link  to="/dashboard">{item}</Link> </li>)}
              </ul>
              {index === 2 
                ? <div className="social-icons">
                  <Link to="/dashboard"> {social.map(iconName => <img key={iconName} className="icon" src={socialIcons[iconName]} alt={iconName}/>)} </Link>
                </div>
                : ''}
          </div>)}
        </div>
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
