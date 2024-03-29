import React, { Component } from 'react';

// Slider 
import Slider from "react-slick";
 
// Text Constants list
import { COMMON_CONSTS } from "../../../constants/screenConsts";
 
 

class Profile extends Component {
  render() {
		var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (

     
		<div id="wrapper">

		<div className="main">
		 <div className="main-content">
		   <div className="container-fluid">
			 <div className="panel panel-headline">
				<div className="panel-heading">
				  <h3 className="panel-title">{COMMON_CONSTS.TEXT_SLIDER}</h3>
				</div>
				<div className="panel-body">
				<Slider {...settings}>
          <div className="slider-img">
            <img src="https://source.unsplash.com/I1ASdgphUH4/800x599" alt="slider" />
          </div>
					<div className="slider-img">
            <img src="https://source.unsplash.com/PpOHJezOalU/800x599" alt="slider" />
          </div>
					<div className="slider-img">
            <img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt="slider" />
          </div>
					<div className="slider-img">
            <img src="https://source.unsplash.com/zh7GEuORbUw/600x799" alt="slider" />
          </div>
					<div className="slider-img">
            <img src="https://source.unsplash.com/PpOHJezOalU/800x599" alt="slider" />
          </div>
					<div className="slider-img">
            <img src="https://source.unsplash.com/I1ASdgphUH4/800x599" alt="slider" />
          </div>
        </Slider>
 
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