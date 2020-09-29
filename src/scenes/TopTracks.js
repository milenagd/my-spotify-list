import React, { Component } from 'react';
import styled from 'styled-components';

import Loader from '../components/Loader';
import TrackCard from '../components/TrackCard';
import { getTopTracks } from '../services/getTopTracks';

const TrackNumber = styled.span`
  display: inline-block;
  width: 5rem;
  font-size: 38px;
`;

const TrackItem = styled.li`
  display: flex;
  align-items: center;
`;

class TopTracks extends Component {
  state = {
    items: [],
  };

  async componentDidMount() {
    const data = await getTopTracks();
    this.setState({ items: data });
  }
  render() {
    if (!this.state.items.length) {
      return <Loader />;
    }
    return (
      <ul>
        {this.state.items.map((item, index) => {
          return (
            <TrackItem key={`top-track-${item.name}`}>
              <TrackNumber>{index + 1}</TrackNumber>
              <TrackCard content={item} />
            </TrackItem>
          );
        })}
      </ul>
    );
  }
}

export default TopTracks;
