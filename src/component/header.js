import React, { Component } from 'react';

// Put this code for linkup 
import {Link} from 'react-router-dom';

// Sidebar import
import Sidebar from "./sidebar";

// Img Constants list
import { MAIN_LOGO_IMG } from "../constants/imgConsts";
import { USER_IMG } from "../constants/imgConsts";

// Text Constants list
import { COMMON_CONSTS } from "../constants/screenConsts";
import { HEADER_CONSTS } from "../constants/screenConsts";


 class Header extends Component {
  render() {
    return (
      
    <div id="wrapper">

      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="brand">
           <Link to='/'>
              <img src={ MAIN_LOGO_IMG } alt="Logo" className="img-responsive logo" />
           </Link>
        </div>
        <div className="container-fluid">
          {/* <div className="navbar-btn">
            <button type="button" className="btn-toggle-fullwidth">
              <i className="lnr lnr-arrow-left-circle"></i>
            </button>
          </div> */}
          <form className="navbar-form navbar-left" method="post">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search ..." />
              <span className="input-group-btn">
                <button type="button" className="btn btn-primary">Go</button>
              </span>
            </div>
          </form>
          <div id="navbar-menu">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                 <Link to='/' className="dropdown-toggle icon-menu" data-toggle="dropdown"> 
                   <i className="lnr lnr-alarm"></i>
                  <span className="badge bg-blue">5</span></Link> 
                <ul className="dropdown-menu">
                  <li>
                     <Link to='/' >
                      <span className="dot bg-warning"></span>{HEADER_CONSTS.NOTIFICATION_SYSTEM_SPACE} </Link> 
                  </li>
                  <li>
                     <Link to='/' >
                      <span className="dot bg-danger"></span>{HEADER_CONSTS.NOTIFICATION_YOU_HAVE_9_TASK} </Link> 
                  </li>
                  <li>
                     <Link to='/' >{HEADER_CONSTS.NOTIFICATION_SEE_ALL_NOTIFI} </Link> 
                  </li>
                </ul>
              </li>
             
              <li className="dropdown">
                 <Link to='/' className="dropdown-toggle usermobi" data-toggle="dropdown"> 
                   <img src={ USER_IMG } className="img-circle" alt="user" />
                   <span >Admin</span>
                   <i className="icon-submenu lnr lnr-chevron-down "></i>
                 </Link> 
                <ul className="dropdown-menu">
                  <li>
                     <Link to='/profile' >
                       <i className="lnr lnr-user"></i>
                       <span>{COMMON_CONSTS.TEXT_MY_PROFILE}</span>
                     </Link> 
                  </li>
                 
                  <li>
                     <Link to='/' >
                       <i className="lnr lnr-cog"></i>
                       <span>{COMMON_CONSTS.TEXT_SETTING}</span>
                     </Link> 
                  </li>
                  <li>
                     <Link to='/login' >
                       <i className="lnr lnr-exit"></i>
                       <span>{COMMON_CONSTS.TEXT_LOGOUT}</span>
                     </Link> 
                  </li>
                </ul>
              </li>
  
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidbar Import */}
          <Sidebar />
       {/* Sidbar Import */}
    
    </div>
        
    );
  }
}

export default Header;
