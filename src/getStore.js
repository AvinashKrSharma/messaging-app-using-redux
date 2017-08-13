import { createStore } from 'redux';
import {users} from '../server/db';
import {getDefaultState} from '../server/getDefaultState';
import {initializeDB} from '../server/db/initializeDB';

initializeDB();
const currentUser = users[0];
const defaultState = getDefaultState(currentUser);

const reducer = (state) => { return state };
export const store = createStore(reducers, defaultState);

export const getStore = () => {
    return store;
}
