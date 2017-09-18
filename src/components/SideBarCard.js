import React, { Component } from 'react';

class SideBarCard extends Component {
  render() {
    const {user} = this.props
    const restricted = ['name', 'metrics']
    const fields = Object.keys(this.props.user).filter(field => !restricted.includes(field))
    const localCurrency = (input) => {
     return  input.toLocaleString('de-DE', {style:'currency', currency: 'EUR'})
    }
    return (
     <div className="card">
        {
          fields && fields.map(field => 
            <div key={field} className="card__row">
              <div className={`card__row-key ${field}`}>{field}:</div>
              <div className={`card__row-value ${field}`}>{localCurrency(user[field])}</div>
            </div>
          )
        }
    </div>
    )
  }
};

export default SideBarCard;
