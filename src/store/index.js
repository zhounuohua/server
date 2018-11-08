import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
    home: homeReducer
});

export const getStote = () =>{
    return createStore(reducer,applyMiddleware(thunk));
};
export const getClientStote = () =>{
    const defaultState = window.context.state;
    return createStore(reducer,defaultState,applyMiddleware(thunk));
};    