import React, { useState, useEffect } from "react";

const Video = ({ video }) => {
  const [isVideoShowing, updateIsVideoShowing] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    updateIsVideoShowing(true);
  }

  const generateYouTubeSrcSet = (webp = false) => {
    const ext = webp ? 'webp' : 'jpg';
    const baseUrl = `https://img.youtube.com/${webp ? 'vi_webp' : 'vi'}/${video.videoId}`;
    return `${baseUrl}/mqdefault.${ext} 320w, ${baseUrl}/maxresdefault.${ext} 1280w`;
  }

  const youtubeThumbnails = {
    srcSetWebp: generateYouTubeSrcSet(true),
    srcSetJpg: generateYouTubeSrcSet(),
    sizes: '100vw'
  };

  const isYouTubeVideo = video.videoType === 'youTube';

  useEffect(() => {
    if (!isYouTubeVideo) {
      if (!window.ssFrmHeightAdjustFunc) {
        window.ssFrmHeightAdjustFunc = e => {
          if (e.data.height) for (var t, n = document.getElementsByClassName("shopcastIframe"), s = 0; s < n.length; s++) if (((t = n[s]).contentWindow || t.contentDocument.defaultView) === e.source) {
            t.style.height = e.data.height + "px";
            break
          }
        };
      }
      window.addEventListener("message", window.ssFrmHeightAdjustFunc);
    }

    return () => window.removeEventListener("message", window.ssFrmHeightAdjustFunc);
  }, [isYouTubeVideo]);


  return (
    <div className={`[ video ${video.videoType === 'shopShareTv' ? 'video--shopsharetv' : ''} ]`}>
      {
        isYouTubeVideo && !isVideoShowing &&
        <a className="[ video__link ]"
           href="/"
           aria-label="Show video"
           onClick={handleClick}>
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
        isYouTubeVideo && isVideoShowing &&
        <iframe className="[ video__iframe ]"
                title="YouTube video"
                src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0`}
                width='640'
                height='390'
                allow="accelerometer; autoplay; gyroscope; picture-in-picture"
                allowFullScreen/>
      }
      {
        !isYouTubeVideo &&
        <iframe
          className="shopcastIframe video__iframe"
          title="ShopShareTV video"
          src={`https://shopshare.tv/watch/${video.videoId}`}
          style={{ background: 'transparent', width: '100%', maxWidth: '1280px', border: '0' }}/>
      }
    </div>
  )
};

export default Video;