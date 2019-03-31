// @flow
import React, { Component } from 'react';
import {
  Text, TouchableWithoutFeedback, View, LayoutAnimation,
} from 'react-native';
import { connect } from 'react-redux';
import CardSection from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component<{library: any, selectLibrary: any, expanded: any}> {
  componentWillUpdate(): void {
    // Automatically applies whatever animations it can..?
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    const { description } = library;
    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{description}</Text>
        </CardSection>
      );
    }
    return null;
  }

  render() {
    const { library, selectLibrary } = this.props;
    const { id, title } = library;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
};

const mapStateToProps = (state, ownProps) => {
  const { library, selectedLibraryId } = ownProps;
  const { id } = library;
  return { expanded: (id === selectedLibraryId) };
};

export default connect(mapStateToProps, actions)(ListItem);
