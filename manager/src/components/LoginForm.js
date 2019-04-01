// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import {
  Card, Input, Button, CardSection,
} from './common';
import { emailChanged, loginUser, passwordChanged } from '../actions';
import Spinner from './common/Spinner';

type Props = {
  emailChangedAction: any,
  passwordChangedAction: any,
  loginUserAction: any,
  email: string,
  password: string,
  error: string,
  loading: boolean,
}
class LoginForm extends Component<Props> {
  constructor() {
    super();
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(text) {
    const { emailChangedAction } = this.props;
    emailChangedAction(text);
  }

  onPasswordChange(text) {
    const { passwordChangedAction } = this.props;
    passwordChangedAction(text);
  }

  onButtonPress() {
    const { loginUserAction, email, password } = this.props;
    loginUserAction({ email, password });
  }

  renderError() {
    const { error } = this.props;
    const { errorTextStyle } = styles;
    if (error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={errorTextStyle}>
            {error}
          </Text>
        </View>
      );
    }
  }

  renderButton() {
    const { loading } = this.props;
    if (loading === true) {
      return <Spinner />;
    }
    return (
      <Button onPress={this.onButtonPress}>
          Login
      </Button>
    );
  }

  render() {
    const { email, password } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange}
            value={email}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={password}
          />
        </CardSection>
        {this.renderError()}
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading,
  };
};

export default connect(mapStateToProps, {
  emailChangedAction: emailChanged,
  passwordChangedAction: passwordChanged,
  loginUserAction: loginUser,
})(LoginForm);
