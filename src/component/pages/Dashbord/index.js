import React, { Component } from 'react';
// Put this code for linkup 
import { Link } from 'react-router-dom';

// Img Constants list
import { USER_IMG } from "../../../constants/imgConsts";

// Text Constants list
import { COMMON_CONSTS } from "../../../constants/screenConsts";
 
class Dashbord extends Component {
  render() {
    return (

      <div id="wrapper">
       <div className="main">
        <div className="main-content">
          <div className="container-fluid">
            <div className="panel panel-headline">
               <div className="panel-heading">
                 <h3 className="panel-title">{COMMON_CONSTS.TEXT_DASHBORD}</h3>
               </div>
               <div className="panel-body">
                <div className="row">
                  <div className="col-md-3">
                    <div className="metric">
                      <span className="icon">
                        <i className="lnr lnr-download"></i>
                      </span>
                      <p>
                       <span className="number">1,252</span>
                       <span className="title">Download</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="metric">
                      <span className="icon">
                        <i className="lnr lnr-briefcase"></i>
                      </span>
                      <p>
                        <span className="number">203</span>
                        <span className="title">Sales</span>
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="metric">
                      <span className="icon">
                        <i className="lnr lnr-eye"></i>
                      </span>
                      <p>
                        <span className="number">2,678</span>
                        <span className="title">Visits</span>
                      </p>
                    </div>
                  </div>
   
                  <div className="col-md-3">
                    <div className="metric">
                      <span className="icon">
                        <i className="lnr lnr-chart-bars"></i>
                      </span>
                      <p>
                        <span className="number">35%</span>
                        <span className="title">Convert</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
             </div>
  
            <div className="row">

               <div className="col-md-6">
                <div className="panel">
                  <div className="panel-heading">
                    <h3 className="panel-title">Recent Purchases</h3>
                    <div className="right">										 
                      <button type="button" className="btn-remove">
                        <i className="lnr lnr-cross"></i>
                      </button>
                    </div>
                  </div>
                  <div className="panel-body no_pad table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Order No.</th>
                          <th>Name</th>
                          <th>Amount</th>
                          <th>Date &amp; Time</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                             <Link to='/' >763648</Link>
                          </td>
                          <td>Steve</td>
                          <td>$122</td>
                          <td>Oct 21, 2016</td>
                          <td>
                            <span className="label label-success">COMPLETED</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                             <Link to='/' >763649</Link>
                          </td>
                          <td>Amber</td>
                          <td>$62</td>
                          <td>Oct 21, 2016</td>
                          <td>
                            <span className="label label-warning">PENDING</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to='/' >763650</Link>
                          </td>
                          <td>Michael</td>
                          <td>$34</td>
                          <td>Oct 18, 2016</td>
                          <td>
                            <span className="label label-danger">FAILED</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to='/' >763651</Link>
                          </td>
                          <td>Roger</td>
                          <td>$186</td>
                          <td>Oct 17, 2016</td>
                          <td>
                            <span className="label label-success">SUCCESS</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link to='/' >763652</Link>
                          </td>
                          <td>Smith</td>
                          <td>$362</td>
                          <td>Oct 16, 2016</td>
                          <td>
                            <span className="label label-success">SUCCESS</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="panel-footer">
                    <div className="row">
                      <div className="col-md-6">
                        <span className="panel-note">
                          <i className="lnr lnr-clock"></i> Last 24 hours</span>
                      </div>
                       <div className="col-md-6 text-right">
                          <Link to='/' className="btn btn-primary">View All Purchases</Link>
                       </div>
                    </div>
                  </div>
                </div>
               </div>


               <div className="col-md-6">
                <div className="panel panel-scrolling">
                  <div className="panel-heading">
                    <h3 className="panel-title">Recent User Activity</h3>
                    <div className="right">										 
                      <button type="button" className="btn-remove">
                        <i className="lnr lnr-cross"></i>
                      </button>
                    </div>
                  </div>
                  <div className="panel-body">
                    <ul className="list-unstyled activity-list">
                      <li>
                        <img src={ USER_IMG } alt="user" className="img-circle pull-left usericon" />
                        <p>
                          <Link to='/' >Michael</Link> has achieved 80% of his completed tasks
                          <span className="timestamp">20 minutes ago</span>
                        </p>
                      </li>
                      <li>
                        <img src={ USER_IMG } alt="user" className="img-circle pull-left usericon" />
                        <p>
                          <Link to='/' >Daniel</Link> has been added as a team member to project
                          <Link to='/' >System Update</Link>
                          <span className="timestamp">Yesterday</span>
                        </p>
                      </li>
                      <li>
                        <img src={ USER_IMG } alt="user" className="img-circle pull-left usericon" />
                        <p>
                          <Link to='/' >Jason</Link> started a discussion about
                          <Link to='/' >Weekly Meeting</Link>
                          <span className="timestamp">3 days ago</span>
                        </p>
                      </li>
                    </ul>
                    <button type="button" className="btn btn-primary mb10 center-block"> Load More </button>
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

export default Dashbord;