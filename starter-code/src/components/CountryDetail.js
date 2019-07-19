import React from 'react';
import Borders from './Borders';
import countriesM from '../countries.json';

const CountryDetail = props => {

     let cca3 = props.match.params.cca3;
     let element = countriesM.find(co => {
          return co.cca3 === cca3;
     });

     return (
          <div className="col-7">
               <h1>{element.name.common}</h1>
               <table className="table">
                    <thead></thead>
                    <tbody>
                         <tr>
                              <td style={{ width: "30%" }}>Capital</td>
                              <td>{element.capital[0]}</td>
                         </tr>
                         <tr>
                              <td>Area</td>
                              <td>{element.area} km<sup>2</sup>
                              </td>
                         </tr>
                         <tr>
                              <td>Borders</td>
                              <td>
                                   <Borders allCountries={countriesM} element={element} />
                              </td>
                         </tr>
                    </tbody>
               </table>
          </div>
     );
}

export default CountryDetail;
