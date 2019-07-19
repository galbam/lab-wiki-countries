import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Borders extends Component {
     render() {

          const country = this.props.element;
          const allCountries = this.props.allCountries;

          return (

               country.borders.map(cca3 => {
                    return (
                         <li key={cca3}>
                              <Link to={"/" + cca3}>
                                   {
                                        allCountries.find(country => country.cca3 === cca3).name.common
                                   }
                              </Link>
                         </li>
                    )
               })
          )
     }
}

export default Borders;