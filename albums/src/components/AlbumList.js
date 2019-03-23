// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios, { AxiosResponse } from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount(): void {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response: AxiosResponse) => {
      this.setState({ albums: response.data });
    });
  }

  renderAlbums() {
    const { albums } = this.state;
    return albums.map(album => <AlbumDetail key={album.title} album={album} />);
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
