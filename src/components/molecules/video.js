import React, { Component } from "react";

class Video extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { video } = this.props;
    const ext = webp ? 'webp' : 'jpg';
    const baseUrl = `https://img.youtube.com/${webp ? 'vi_webp' : 'vi'}/${video.videoId}`;
    return `${baseUrl}/mqdefault.${ext} 320w, ${baseUrl}/maxresdefault.${ext} 1280w`;
  }

  render() {
    const youtubeThumbnails = {
      srcSetWebp: this.generateYouTubeSrcSet(true),
      srcSetJpg: this.generateYouTubeSrcSet(),
      sizes: '100vw'
    };

    const renderVideo = () => {
      const { video } = this.props;
      if (video.videoType === 'youTube') {
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
                <span className="[ video__play-button ]"/>
              </a>
            }
            {
              this.state.isVideoShowing &&
              <iframe className="[ video__iframe ]"
                      title="YouTube video"
                      src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0`}
                      width='640'
                      height='390'
                      allow="accelerometer; autoplay; gyroscope; picture-in-picture"
                      allowFullScreen/>
            }
          </div>
        )
      } else if (video.videoType === 'shopShareTv') {
        return (
          <div className="[ video video--shopsharetv ]">
            <iframe
              className="shopcastIframe video__iframe"
              title="ShopShareTV video"
              src={`https://shopshare.tv/watch/${video.videoId}`}
              style={{ background: 'transparent', width: '100%', maxWidth: '1280px', border: '0' }}
            />
            <script>
              {
                window.ssFrmHeightAdjustFunc || (window.ssFrmHeightAdjustFunc = function (e) {
                  if (e.data.height) for (var t, n = document.getElementsByClassName("shopcastIframe"), s = 0; s < n.length; s++) if (((t = n[s]).contentWindow || t.contentDocument.defaultView) === e.source) {
                    t.style.height = e.data.height + "px";
                    break
                  }
                }, window.addEventListener("message", window.ssFrmHeightAdjustFunc))
              }
            </script>

          </div>
        )
      }
    }

    return (
      <>
        {renderVideo()}
      </>
    )
  }

}

export default Video;