// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {CardSection, Input} from "./common";
import {employeeUpdate} from "../actions";
import {Picker, Text, View} from "react-native";

type Props = {
  name: any, phone: any, shift: any, employeeUpdateAction: any,
}
class EmployeeForm extends Component<Props> {
  constructor() {
    super();
  }

  render() {
    const { pickerTextStyle } = styles;

    const {
      name, phone, shift, employeeUpdateAction,
    } = this.props;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={name}
            onChangeText={text => employeeUpdateAction({ name: text })}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={phone}
            onChangeText={text => employeeUpdate({ name: text })}
          />
        </CardSection>
        <Text style={pickerTextStyle}>Shift</Text>
        <Picker
          style={{ flex: 1 }}
          selectedValue={shift}
          onValueChange={value => employeeUpdate({ prop: 'Shift', value })}
        >
          <Picker.Item label="Monday" value="Monday" />
          <Picker.Item label="Tuesday" value="Tuesday" />
          <Picker.Item label="Wednesday" value="Wednesday" />
          <Picker.Item label="Thursday" value="Thursday" />
          <Picker.Item label="Friday" value="Friday" />
          <Picker.Item label="Saturday" value="Saturday" />
          <Picker.Item label="Sunday" value="Sunday" />
        </Picker>
        <CardSection />
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name, phone, shift,
  };
};

export default connect(mapStateToProps, {
  employeeUpdateAction: employeeUpdate,
})(EmployeeForm);
