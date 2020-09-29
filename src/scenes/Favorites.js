import React, { Component } from 'react';

import Loader from '../components/Loader';
import TrackCard from '../components/TrackCard';
import { getFavoriteList } from '../services/getFavoriteList';

class Favorites extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const data = await getFavoriteList();
    this.setState({ items: data });
  }
  render() {
    if (!this.state.items.length) {
      return <Loader />;
    }
    return (
      <ul>
        {this.state.items.map((item) => {
          return <TrackCard key={`favorites-${item.name}`} content={item} />;
        })}
      </ul>
    );
  }
}

export default Favorites;
