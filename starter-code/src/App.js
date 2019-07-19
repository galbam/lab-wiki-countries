import React from 'react';
import './App.css';

import Country from './components/Country';
import CountryDetail from './components/CountryDetail';

import { Route} from "react-router-dom";
// import { Route, Switch } from "react-router-dom";

import Navbar from './components/Navbar';

function App(){

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
          {/* <Switch> */}
          <Route path="/" component={Country} />
          <Route exact path="/:cca3" component={CountryDetail} />
          {/* </Switch> */}
        </div>
        </div>
      </div>
    );
  
}

export default App;
