import React, { Component } from "react";

// Put this code for linkup
import { Link } from "react-router-dom";

// Constants list
import { COMMON_CONSTS } from "../constants/screenConsts";

class Sidebar extends Component {
  render() {
    return (
      <div id="sidebar-nav">
        <div className="sidebar sidebar-scroll">
          <div className="navbar-btn nav-aerrow">
            <button type="button" className="btn-toggle-fullwidth">
              <i className="lnr lnr-arrow-left-circle" />
            </button>
          </div>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/dashbord" className="active">
                  <i className="lnr lnr-home" />
                  <span>{COMMON_CONSTS.TEXT_DASHBORD}</span>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <i className="lnr lnr-user" />
                  <span>{COMMON_CONSTS.TEXT_MY_PROFILE}</span>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="lnr lnr-alarm" />
                  <span>{COMMON_CONSTS.TEXT_FORM_CONTROLS}</span>
                </Link>
              </li>
              <li>
                <Link
                  to="#subPages"
                  data-toggle="collapse"
                  className="collapsed"
                >
                  <i className="lnr lnr-file-empty" />
                  <span>{COMMON_CONSTS.TEXT_DEMO_COLLSPAN}</span>
                  <i className="icon-submenu lnr lnr-chevron-left" />
                </Link>
                <div id="subPages" className="collapse">
                  <ul className="nav">
                    <li>
                      <Link to="/profile">{COMMON_CONSTS.TEXT_MY_PROFILE}</Link>
                    </li>
                    <li>
                      <Link to="/dashbord">{COMMON_CONSTS.TEXT_GALLERY}</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/dashbord">
                  <i className="lnr lnr-dice" />
                  <span>{COMMON_CONSTS.TEXT_GALLERY}</span>
                </Link>
              </li>
              <li>
                <Link to="/dashbord">
                  <i className="lnr lnr-picture" />
                  <span>{COMMON_CONSTS.TEXT_SLIDER}</span>
                </Link>
              </li>

              <li>
                <Link to="/login">
                  <i className="lnr lnr-lock" />
                  <span>{COMMON_CONSTS.TEXT_LOGOUT}</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
