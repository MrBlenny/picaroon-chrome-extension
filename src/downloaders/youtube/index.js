import React, { Component } from 'react'
import { compact, replace } from 'lodash'

const popupCenter = (url, title, w, h) => {
  // Fixes dual-screen position                         Most browsers      Firefox
  var dualScreenLeft = window.screenLeft != undefined ? window.screenLeft : screen.left;
  var dualScreenTop = window.screenTop != undefined ? window.screenTop : screen.top;

  var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
  var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

  var left = ((width / 2) - (w / 2)) + dualScreenLeft;
  var top = ((height / 2) - (h / 2)) + dualScreenTop;
  var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

  // Puts focus on the newWindow
  if (window.focus) {
      newWindow.focus();
  }
}

class EntrypointComponent extends Component {
  render() {
    const { meta } = this.props
    const metaArray = [meta.album, meta.artist, 'album']
    const metaString = compact(metaArray).join(' - ')
    const metaStringWithPluses = replace(metaString, / /g, "+");
    const href= `https://www.youtube.com/results?search_query=${metaStringWithPluses}`
    const style = { float:'left', color: 'inherit', textDecoration: 'none' }

    const onClick = () => popupCenter(href, metaString, 600, 800);

    return (
      <div
        onClick={onClick}
        key="youtube" 
        className="track_rating_btn"
        style={style}
      >
        Picaroon: Youtube
      </div>
    )
  }
}

export default {
  id: 'youtube',
  Component: EntrypointComponent,
}