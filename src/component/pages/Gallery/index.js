import React, { Component } from 'react';

// gallery list
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
 
// Text Constants list
import { COMMON_CONSTS } from "../../../constants/screenConsts";
 

const photos = [
	{ src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599', width: 4, height: 3 },
	{ src: 'https://source.unsplash.com/Dm-qxdynoEc/800x799', width: 1, height: 1 },
	{ src: 'https://source.unsplash.com/qDkso9nvCg0/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/iecJiKe_RNg/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/epcsn8Ed8kY/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/NQSWvyVRIJk/800x599', width: 4, height: 3 },
	{ src: 'https://source.unsplash.com/zh7GEuORbUw/600x799', width: 3, height: 4 },
	{ src: 'https://source.unsplash.com/PpOHJezOalU/800x599', width: 4, height: 3 },
	{ src: 'https://source.unsplash.com/I1ASdgphUH4/800x599', width: 4, height: 3 }
  ];
  

class Profile extends Component {
	constructor() {
		super();
		this.state = { currentImage: 0 };
		this.closeLightbox = this.closeLightbox.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
	  }
	  openLightbox(event, obj) {
		this.setState({
		  currentImage: obj.index,
		  lightboxIsOpen: true,
		});
	  }
	  closeLightbox() {
		this.setState({
		  currentImage: 0,
		  lightboxIsOpen: false,
		});
	  }
	  gotoPrevious() {
		this.setState({
		  currentImage: this.state.currentImage - 1,
		});
	  }
	  gotoNext() {
		this.setState({
		  currentImage: this.state.currentImage + 1,
		});
	  }

  render() {
	
    return (

     
		<div id="wrapper">

		<div className="main">
		 <div className="main-content">
		   <div className="container-fluid">
			 <div className="panel panel-headline">
				<div className="panel-heading">
				  <h3 className="panel-title">{COMMON_CONSTS.TEXT_GALLERY}</h3>
				</div>
				<div className="panel-body">
				<div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
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