import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as homeReducer } from '../containers/Home/store';

const reducer = combineReducers({
    home: homeReducer
});

const getStote = () =>{
    return createStore(reducer,applyMiddleware(thunk));
};


export default getStote;    