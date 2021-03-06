import React from 'react';
import ReactDom from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../Routes';
import getStote from '../store'

const App = () => {
    return (
        <Provider store={getStote()}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
        
    )
}
ReactDom.hydrate(<App/>,document.getElementById('root'))