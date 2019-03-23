/**
 * @format
 */

import React from 'react';
import { AppRegistry, ScrollView } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const component = () => (
  <ScrollView style={{ flex: 1 }}>
    <Header headerText="Albums" />
    <AlbumList />
  </ScrollView>
);

AppRegistry.registerComponent('albums', () => component);
