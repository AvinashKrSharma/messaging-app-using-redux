import { createStore, applyMiddleware, compose } from 'redux';
import { initSagas } from './initSagas';
import createSagaMiddleware from 'redux-saga';
import { getPreloadedState } from './getPreloadedState'
import thunk from 'redux-thunk';
import { initializeDB } from './../server/db/initializeDB'
import { createSocketMiddleware} from './middlewares/socket';
import { RECEIVE_MESSAGE } from './actions'
import { createLogger } from 'redux-logger'
import { reducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();

const io = window.io;

const socketConfigOut = {
  UPDATE_STATUS:(data)=>({
    type:"UPDATE_USER_STATUS",
    status:data
  })
};

const socketConfigIn = {
  NEW_MESSAGE:(data)=>({
    type:RECEIVE_MESSAGE,
    message:data
  })
};

const socketMiddleware = createSocketMiddleware(io)(socketConfigOut);

initializeDB();

const logger = createLogger({
  stateTransformer:state=>state.toJS()
});

const enhancer = compose(
  applyMiddleware(
    sagaMiddleware,
    thunk,
    socketMiddleware,
    logger
  )
);

console.log("Preloaded state?",preloadedState);
const preloadedState = getPreloadedState();
const store = createStore(
  reducer,
  preloadedState,
  enhancer
);

const socket = io();
for (const key in socketConfigIn) {
  socket.on(key, (data)=>{
    store.dispatch(socketConfigIn[key](data));
  });
}

export const getStore = ()=>store;
initSagas(sagaMiddleware);
