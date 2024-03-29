import React, { Component } from 'react';

// Put this code for linkup
import {
  Link
 } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="clearfix"></div>
        <footer>
          <div className="container-fluid">
            <p className="copyright text-center">&copy; 2018
            <Link to='/' target="_blank">All Rights Reserved. </Link> </p>
          </div>
        </footer>
       </div>
  
    );
  }
}

export default Footer;
