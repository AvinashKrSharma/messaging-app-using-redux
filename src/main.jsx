import React from 'react';
import reactDOM from 'react-dom'
import { App } from './App';
import {store} from '../src/getStore';


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
