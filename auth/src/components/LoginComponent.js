import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import {
  Button, Card, CardSection, Input, Spinner,
} from './common';

class LoginComponent extends Component {
  state = { email: '', password: '', error: '', loading: false };

  constructor() {
    super();
    // Allows for us not to have to use bind in the jsx which would create a new function
    // every time render is called
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed.', loading: false });
  }

  onLoginSuccess() {
    this.setState({ loading: false, email: '', password: '' });

  }

  renderButton() {
    const { loading } = this.state;
    if (loading) {
      return <Spinner size="small" />;
    }

    return (
      <Button onPress={this.onButtonPress}>Log in</Button>
    );
  }

  render() {
    const { email, password, error } = this.state;
    const { errorTextStyle } = styles;
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="user@gmail.com"
            value={email}
            onChangeText={changedText => this.setState({ email: changedText })}
            style={{ height: 20, width: 100 }}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry // Defaults to true
            label="Password"
            placeholder="password"
            value={password}
            onChangeText={changedText => this.setState({ password: changedText })}
          />
        </CardSection>

        <Text style={errorTextStyle}>
          {error}
        </Text>

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

export default LoginComponent;
