import React, { Component } from 'react';
import { Link } from "react-router-dom";

class CountryDetail extends Component {

     render() {

          return (
               <Link className="list-group-item list-group-item-action"
                    to={`/${this.props.country.cca3}`}><span role="img">{this.props.country.flag}</span> {this.props.country.name.common}
               </Link>
          );
     }
}

export default CountryDetail;
