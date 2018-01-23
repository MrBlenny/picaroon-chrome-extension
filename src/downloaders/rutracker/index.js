import React, { Component } from 'react';
import search from './search';

class EntrypointComponent extends Component {
  render() {
    return (
      <div onClick={() => search()} className="track_rating_btn" style={{float:'left'}}>
        Picaroon: RuTracker
      </div>
    )
  }
}

export default {
  id: 'rutracker',
  Component: EntrypointComponent,
}