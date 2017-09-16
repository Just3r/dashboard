import React, { Component } from 'react';
import links,  {social, legalInfo} from '../helpers/links';

class Footer extends Component {
  render() {
    const headers = Object.keys(links)
    let footer = {
      display: "flex",
      flex: 1,
      width: "100%",
      padding: "2em",
      backgroundColor: "#545554",
      color: "#FFFFFF",
      boxSizing: "border-box"
    }
    let footerLinks = {
      display: "flex",
      flex: 1
    }

    let footerLegal = {
      display: "flex",
      flexDirection: "column",
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "flex-end",
      paddingBottom: "1em"
    }

    let linksItem = {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignSelf: "flex-start"
    }

    let linksItemList = {
      listStyle: "none",
      padding: 0,
      margin: 0
    }

    let linksItemHeader = {
      margin: 0,
      textTransform: "uppercase"
    }
    let linksReference = {
      textDecoration: "none",
      color: "#FFFFFF"
    }
    let paragraph = {
      margin: 0
    }

    return (
     <div style={footer} className="footer">
        <div style={footerLinks} className="footer__links">
          {headers.map((link,index) => <div style={linksItem} key={link}>
            <h2 style={linksItemHeader}>{link}</h2>
            <ul style={linksItemList}>
              {links[link].map(item => <li key={item}> <a style ={linksReference} href="">{item}</a> </li>)}
            </ul>
            {index === 2 
              ? <div>
                {social.map(item => <i key={item}>{item}</i> )}
              </div>
              : ''}
          </div>)}
        </div>
        <a href=""></a>
        <div style={footerLegal}  className="footer__legal">
              {legalInfo.map(item => 
                <div key={item}  className="footer__legal-item">
                  <p style={paragraph}>{item}</p>
                </div>)
              }
        </div>
     </div>
    )
  }
};

export default Footer;
