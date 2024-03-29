import React, { Component } from "react";

// Img Constants list
import { PROFILE_IMG } from "../../../constants/imgConsts";

class Profile extends Component {
  render() {
    return (
      <div id="wrapper">
        <div className="main">
          <div className="main-content">
            <div className="container-fluid">
              <div className="panel panel-profile">
                <div className="clearfix">
                  <div className="profile-left">
                    <div className="profile-header">
                      <div className="overlay" />
                      <div className="profile-main">
                        <img
                          src={PROFILE_IMG}
                          className="img-circle"
                          alt="USER"
                        />
                        <h3 className="name">Admin Gold</h3>
                        <span className="online-status status-available">
                          Available
                        </span>
                      </div>
                      <div className="profile-stat">
                        <div className="row">
                          <div className="col-md-4 stat-item">
                            45 <span>Projects</span>
                          </div>
                          <div className="col-md-4 stat-item">
                            15 <span>Awards</span>
                          </div>
                          <div className="col-md-4 stat-item">
                            2174 <span>Points</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="profile-detail">
                      <div className="profile-info">
                        <h4 className="heading mb10">Basic Info</h4>

                        <div className="two_column mb10">
                          <div className="info_label">Birthdate</div>
                          <div className="info_value">28/02/1991</div>
                        </div>

                        <div className="two_column mb10">
                          <div className="info_label">Mobile</div>
                          <div className="info_value">(124) 823409234</div>
                        </div>

                        <div className="two_column mb10">
                          <div className="info_label">Email</div>
                          <div className="info_value">samuel@mydomain.co</div>
                        </div>

                        <div className="two_column mb10">
                          <div className="info_label">Website</div>
                          <div className="info_value">www.testweb.com</div>
                        </div>

                        <div className="profile-info no_pad">
                          <h4 className="heading">About</h4>
                          <p>
                            Interactively fashion excellent information after
                            distinctive outsourcing. Interactively fashion
                            excellent information after distinctive outsourcing.
                          </p>
                        </div>

                        {/* Edit Field */}

                        <div className="two_column mb10">
                          <div className="info_label">Birthdate</div>
                          <div className="info_value">
                            {" "}
                            <input
                              type="text"
                              class="form-control cust_textbox"
                              value="28/02/1991"
                            />
                          </div>
                        </div>

                        <div className="two_column mb10">
                          <div className="info_label">Mobile</div>
                          <div className="info_value">
                            {" "}
                            <input
                              type="text"
                              class="form-control cust_textbox"
                              value="(124) 823409234"
                            />
                          </div>
                        </div>

                        <div className="two_column mb10">
                          <div className="info_label">Email</div>
                          <div className="info_value">
                            {" "}
                            <input
                              type="text"
                              class="form-control cust_textbox"
                              value="samuel@mydomain.com"
                            />
                          </div>
                        </div>

                        <div className="two_column mb10">
                          <div className="info_label">Website</div>
                          <div className="info_value">
                            {" "}
                            <input
                              type="text"
                              class="form-control cust_textbox"
                              value="www.testweb.com"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="profile-info">
                        <h4 className="heading">About</h4>

                        <input
                          type="text"
                          className="form-control form_control"
                          value="Interactively fashion excellent information after
							distinctive outsourcing. Interactively fashion
							excellent information after distinctive outsourcing."
                        />
                      </div>

                      <div className="text-center">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-primary"
                        >
                          Edit Detail
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="profile-right">
                    <h4 className="heading">Admin's Awards</h4>

                    <div className="awards">
                      <div className="row">
                        <div className="col-md-3 col-sm-6">
                          <div className="award-item">
                            <div className="hexagon">
                              <span className="lnr lnr-sun award-icon" />
                            </div>
                            <span>Most Bright Idea</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="award-item">
                            <div className="hexagon">
                              <span className="lnr lnr-clock award-icon" />
                            </div>
                            <span>Most On-Time</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="award-item">
                            <div className="hexagon">
                              <span className="lnr lnr-magic-wand award-icon" />
                            </div>
                            <span>Problem Solver</span>
                          </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                          <div className="award-item">
                            <div className="hexagon">
                              <span className="lnr lnr-heart award-icon" />
                            </div>
                            <span>Most Loved</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <a
                          href="javascript:void(0);"
                          className="btn btn-default"
                        >
                          See all awards
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
