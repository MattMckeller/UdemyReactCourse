/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import RouterComponent from './router';

type Props = {};
class App extends Component<Props> {
  componentWillMount(): void {
    const config = {
      apiKey: 'AIzaSyB8Y98zDwuBHuE00CfshV_nolKQW3z36gw',
      authDomain: 'manager-d9c18.firebaseapp.com',
      databaseURL: 'https://manager-d9c18.firebaseio.com',
      projectId: 'manager-d9c18',
      storageBucket: 'manager-d9c18.appspot.com',
      messagingSenderId: '741330250877',
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
