import {PLAYERX, VALUES} from '../constants/constants';
import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';

import React from 'react';
import GameScreen from '../components/GameScreen';

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = { values: VALUES, turn: PLAYERX, moves: 0 }
    this.store = createStore(GlobalState, this.initialState);
  }

  render() {
    return (
        <Provider store={ this.store }>
          <GameScreen/>
        </Provider>
    );
  }
}