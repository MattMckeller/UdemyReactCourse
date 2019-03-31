// @flow
import React from 'react';
import { Text, View } from 'react-native';

const Header = (props: {headerText: string}) => {
  const { textStyles, viewStyles } = styles;
  const { headerText } = props;

  return (
    <View style={viewStyles}>
      <Text style={textStyles}>{headerText}</Text>
    </View>
  );
};

const styles = {
  textStyles: {
    fontSize: 20,
  },
  viewStyles: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative',
  },
};

export default Header;
