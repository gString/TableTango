import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from "redux-thunk";

import TablesTangoApp from "./view/TablesTangoApp";
import rootReducer from './model/reducers';

const store = createStore(rootReducer,{}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <TablesTangoApp />
    </Provider>,
    document.getElementById('root'));