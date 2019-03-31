import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component<{libraries: []}> {
  static renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    const { libraries } = this.props;
    return (
      <FlatList
        data={libraries}
        renderItem={LibraryList.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
