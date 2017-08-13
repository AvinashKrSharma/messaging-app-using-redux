import { createStore, applyMiddleware } from 'redux';
import {fromJS} from 'immutable';
import {users} from '../server/db';
import {getDefaultState} from '../server/getDefaultState';
import {initializeDB} from '../server/db/initializeDB';
import {createLogger} from 'redux-logger';
import {reducer} from './reducers';

initializeDB();
const currentUser = users[0];
const defaultState = fromJS(getDefaultState(currentUser));
export const store = createStore(reducer, defaultState, applyMiddleware(createLogger({
    stateTransformer: state => state.toJS()
})));

export const getStore = () => {
    return store;
};
