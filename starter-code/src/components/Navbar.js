import React, { Component } from 'react'

class Navbar extends Component {
     render() {
          return (
               <nav className="navbar navbar-dark bg-primary mb-3">
                    <div className="container">
                         <a className="navbar-brand" href="/">Wiki Countries</a>
                    </div>
               </nav>
          )
     }
}

export default Navbar
