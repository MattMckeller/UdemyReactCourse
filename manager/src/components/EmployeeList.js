// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { ListView, Text, View } from 'react-native';
import { employeesFetch } from '../actions';
import EmployeeListItem from './EmployeeListItem';

type Props = {
  employees: any,
  employeesFetchAction: any,
}
class EmployeeList extends Component<Props> {
  datasource: any;

  constructor() {
    super();
    this.createDataSource(this.props);
  }

  componentWillMount(): void {
    const { employeesFetchAction } = this.props;
    employeesFetchAction();
  }

  componentWillReceiveProps(nextProps: Readonly<Props>): void {
    this.createDataSource(nextProps);
  }

  createDataSource(props: Props) {
    const { employees } = this.props;

    // Note - listview is deprecated
    const ds = ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.datasource = ds.cloneWithRows(employees);
  }

  renderRow(employee) {
    return (
      <EmployeeListItem employee={employee} />
    );
  }


  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.datasource}
        renderRow={this.renderRow}
      />
    );
  }
}

const styles = {};

const mapStateToProps = (state) => {
  const { employees } = state;

  return {
    employees: _.map(employees, (employee, uid) => ({ ...employee, uid })),
  };
};

export default connect(mapStateToProps, {
  employeesFetchAction: employeesFetch,
})(EmployeeList);
