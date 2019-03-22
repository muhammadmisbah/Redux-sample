import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './reducers';
import { createLogger } from "redux-logger"

const Store = createStore(RootReducer,
    {},
    applyMiddleware(
        createLogger(),
        thunk
    )
);

export default Store;