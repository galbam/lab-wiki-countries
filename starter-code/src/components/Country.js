import React, { Component } from 'react';
import countriesM from '../countries.json';
import CountryList from './CountryList.js';

class Country extends Component {
     state = {
          countries: countriesM
     };

     render() {

          let elements = this.state.countries.map(co => {
               return (<CountryList key={co.cca3} country={co} />);
          });

          return (
               <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
                    <div className="list-group">
                         {elements}
                    </div>
               </div>
          )
     }
}

export default Country;
