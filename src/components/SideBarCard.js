import React, { Component } from 'react';

class SideBarCard extends Component {
  render() {
    const {user} = this.props
    const restricted = ['name', 'metrics']
    const fields = Object.keys(this.props.user).filter(field => !restricted.includes(field))
    return (
     <div className="card">
        {
          fields && fields.map(field => 
            <div key={field} className="card__row">
              <div className={`card__row-key ${field}`}>{field}:</div>
              <div className="card__row-value">{Number(user[field]).toLocaleString('de-DE', {style:'currency', currency: 'EUR'})}</div>
            </div>
          )
        }
    </div>
    )
  }
};

export default SideBarCard;
