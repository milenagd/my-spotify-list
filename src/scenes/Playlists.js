import React, { Component } from 'react';

import Loader from '../components/Loader';
import TrackCard from '../components/TrackCard';
import { getPlaylists } from '../services/getPlaylists';

class Playlists extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const data = await getPlaylists();
    this.setState({ items: data });
  }
  render() {
    if (!this.state.items.length) {
      return <Loader />;
    }
    return (
      <ul>
        {this.state.items.map((item) => {
          return (
            <TrackCard key={`playlist-${item.name}`} content={item}></TrackCard>
          );
        })}
      </ul>
    );
  }
}

export default Playlists;
