// @flow
import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import {
  Card, CardSection, Input, Button,
} from './common';
import { employeeCreate, employeeUpdate } from "../actions";
import EmployeeForm from "./EmployeeForm";

type Props = {
  name: any, phone: any, shift: any, employeeCreateAction: any
}
class EmployeeCreate extends Component<Props> {
  constructor() {
    super();
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const {
      name, phone, shift, employeeCreateAction,
    } = this.props;

    employeeCreateAction({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress()}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift,
  };
};

export default connect(mapStateToProps, {
  employeeUpdateAction: employeeUpdate,
  employeeCreateAction: employeeCreate,
})(EmployeeCreate);
