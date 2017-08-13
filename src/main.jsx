import React from 'react';
import reactDOM from 'react-dom'
import { createStore } from 'redux';
import { App } from './App';

const reducer = (state) => { return state };
export const store = createStore(reducer);

const Main = () => { return <App/> };

const render = (store) => {
    reactDOM.render(
        <div>
            <Main state={store.getState()}/>
        </div>,
        document.getElementById('AppContainer')
    );
};

render(store);
