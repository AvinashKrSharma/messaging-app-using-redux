import { createStore, applyMiddleware, compose } from 'redux';
import {createSocketMiddleware} from './middlewares/socket';
import {RECEIVE_MESSAGE} from './actions';
import {fromJS} from 'immutable';
import {users} from '../server/db';
import {getDefaultState} from '../server/getDefaultState';
import {initializeDB} from '../server/db/initializeDB';
import {createLogger} from 'redux-logger';
import {reducer} from './reducers';

const io = window.io;
const socketConfigOut = {
  UPDATE_STATUS: (data) => ({
    type: `UPDATE_USER_STATUS`,
    status: data
  })
}
const socketMiddleware = createSocketMiddleware(io)(socketConfigOut);
initializeDB();
const currentUser = users[0];
const defaultState = fromJS(getDefaultState(currentUser));
const logger = createLogger({
    stateTransformer: state => state.toJS()
});
const enhancer = compose(
  applyMiddleware(
    socketMiddleware,
    logger
  )
)
const store = createStore(reducer, defaultState, enhancer);

const socketConfigIn = {
  NEW_MESSAGE: (data) => {
    return {
      type: RECEIVE_MESSAGE,
      message: data
    }
  }
}

const socket = io();
for (const key in socketConfigIn){
  socket.on(key, data => {
    store.dispatch(socketConfigIn[key](data));
  })
}

export const getStore = () => {
    return store;
};
