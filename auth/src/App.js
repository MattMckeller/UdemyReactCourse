import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginComponent from './components/LoginComponent';
import Button from './components/common/Button';
import Spinner from './components/common/Spinner';

class App extends Component {
  state = { loggedIn: false };

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyCtwnTWS_5PatzRo2iIQQ9cj3R6XC1PY_s',
      authDomain: 'udemyauth-f7a0b.firebaseapp.com',
      databaseURL: 'https://udemyauth-f7a0b.firebaseio.com',
      projectId: 'udemyauth-f7a0b',
      storageBucket: 'udemyauth-f7a0b.appspot.com',
      messagingSenderId: '359264264095',
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    const { loggedIn } = this.state;

    switch (loggedIn) {
      case null:
        return <Spinner />;
      case false:
        return (
          <View>
            <Header headerText="Authentication" />
            <LoginComponent />
          </View>
        );
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
              Log Out
          </Button>
        );
      default:
        return null;
    }
  }
}

export default App;
