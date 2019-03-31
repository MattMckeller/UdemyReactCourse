// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

type Props = {
  children: any,
  onAccept: any,
  onDecline: any,
  visible: any,
}
class Confirm extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const {
      children, onAccept, onDecline, visible,
    } = this.props;
    const { containerStyle, textStyle, cardSectionStyle } = styles;
    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>{children}</Text>
          </CardSection>

          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>
        </View>
      </Modal>
    );
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
  },
};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, {
})(Confirm);
