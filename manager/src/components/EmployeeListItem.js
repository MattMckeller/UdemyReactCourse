// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardSection from "./common/CardSection";
import {Text, TouchableWithoutFeedback} from "react-native";
import {Actions} from "react-native-router-flux";

type Props = {
  employee: any,
}
class EmployeeListItem extends Component<Props> {
  constructor() {
    super();
    this.onRowPress = this.onRowPress.bind(this);
  }

  onRowPress() {
    const { employee } = this.props;
    Actions.employeeCreate({ employee });
  }

  render() {
    const { name } = this.props;
    const { titleStyle } = styles;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{name}</Text>
          </CardSection>
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

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, {
})(EmployeeListItem);
