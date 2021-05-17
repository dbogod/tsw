import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.videoUrl.includes('watch?v=') && this.props.videoUrl.split('watch?v=')[1],
      isVideoShowing: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({
      isVideoShowing: true
    });
  }

  generateYouTubeSrcSet = (webp = false) => {
    const ext = webp ? 'webp' : 'jpg';
    const baseUrl = `https://img.youtube.com/${webp ? 'vi_webp' : 'vi'}/${this.state.videoId}`;
    return `${baseUrl}/mqdefault.${ext} 320w, ${baseUrl}/maxresdefault.${ext} 1280w`;
  }

  render() {
    const youtubeThumbnails = {
      srcSetWebp: this.generateYouTubeSrcSet(true),
      srcSetJpg: this.generateYouTubeSrcSet(),
      sizes: '100vw'
    };

    return (
      <div className="[ video ]">
        {
          !this.state.isVideoShowing &&
          <a className="[ video__link ]"
             href="/"
             aria-label="Show video"
             onClick={this.handleClick}>
            <picture>
              <source type="image/webp"
                      srcSet={youtubeThumbnails.srcSetWebp}
                      sizes={youtubeThumbnails.sizes}/>
              <source srcSet={youtubeThumbnails.srcSetJpg}
                      sizes={youtubeThumbnails.sizes}/>
              <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                   alt="Video placeholder"/>
            </picture>
            <span className="[ video__play-button ]" />
          </a>
        }
        {
          this.state.isVideoShowing &&
          <iframe className="[ video__iframe ]"
                  title="YouTube video"
                  src={`https://www.youtube-nocookie.com/embed/${this.state.videoId}?rel=0`}
                  width='640'
                  height='390'
                  allow="accelerometer; autoplay; gyroscope; picture-in-picture"
                  allowFullScreen/>
        }
      </div>
    )
  }

}

export default Video;