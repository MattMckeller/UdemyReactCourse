// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import * as _ from 'lodash';
import {
  Card, CardSection, Input, Button, Confirm,
} from './common';
import EmployeeForm from './EmployeeCreate';
import {employeeDelete, employeeSave, employeeUpdate} from '../actions';

type Props = {
  name: any, phone: any, shift: any, employee: any,
  employeeUpdateAction: any, employeeSaveAction: any, employeeDeleteAction: any,
}
class EmployeeEdit extends Component<Props> {
  state = { showModal: false };

  constructor() {
    super();
    this.onButtonPress = this.onButtonPress.bind(this);
    this.onTextPress = this.onTextPress.bind(this);
    this.onAccept = this.onAccept.bind(this);
    this.onDecline = this.onDecline.bind(this);
  }

  componentWillMount(): void {
    const { employee, employeeUpdateAction } = this.props;
    _.each(employee, (value, prop) => {
      employeeUpdateAction({ prop, value });
    });
  }

  onButtonPress() {
    const {
      name, phone, shift, employeeSaveAction, employee,
    } = this.props;
    const { uid } = employee;

    employeeSaveAction({
      name, phone, shift: shift || 'Monday', uid,
    });
  }

  onTextPress() {
    const {
      phone, shift,
    } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { employeeDeleteAction, employee } = this.props;
    const { uid } = employee;
    this.setState({ showModal: false });
    employeeDeleteAction({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress()}>Save Changes</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onTextPress()}>Text Schedule</Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.setState({ showModal: !showModal })}>Fire Employee</Button>
        </CardSection>
        <Confirm
          visible={showModal}
          onAccept={this.onAccept}
          onDecline={this.onDecline}
        >Are you sure you want to delete this?</Confirm>
      </Card>
    );
  }
}

const styles = {};

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
  employeeSaveAction: employeeSave,
  employeeDeleteAction: employeeDelete,
})(EmployeeEdit);
