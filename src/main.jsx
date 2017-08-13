import React from 'react';
import reactDOM from 'react-dom'
import { App } from './App';
import {getStore} from '../src/getStore';
import { OFFLINE, updateStatus } from './actions';

const store = getStore();

const Main = ({state}) => { 
    return <div>
        <h1>Welcome {state.get(`currentUser`).get(`name`)}</h1>
        <App />
    </div>;
};

const render = (store) => {
    reactDOM.render(
        <div>
            <Main state={store.getState()}/>
        </div>,
        document.getElementById('AppContainer')
    );
};

render(store);
const action = updateStatus(OFFLINE);
store.dispatch(action);
