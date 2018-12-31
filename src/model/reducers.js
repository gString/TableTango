import { combineReducers } from 'redux';
import { createFiltersCombineReducer, filter } from './reducers.filters';
import {
    REQUEST_BLOB,
    RECEIVE_BLOB,
    SEARCH,
    TOGGLE_FILTER,
    filters,
    load,
    doSearch,
    toggleFilter } from './actions';


const createTableReducer = (reducer, reducerPredicate) => {
    return (state, action) => {
        const isInitializationCall = state === undefined;
        const shouldRunReducer = reducerPredicate(action) || isInitializationCall;
        return shouldRunReducer ? reducer(state, action) : state;
    }
};

const createPredicate = ( id ) => action => action.tableID === id;

const data = (state = {
    isLoading: true,
    failed: false,
    items: []
}, action) => {
    switch (action.type) {
        case REQUEST_BLOB:
            return Object.assign({}, state, {
                isLoading: true,
                failed: false
            });
        case RECEIVE_BLOB:
            return Object.assign({}, state, {
                isLoading: false,
                failed: false,
                items: action.items
            });
        default: return state;
    }
}

const tableView = combineReducers({
    filters: createFiltersCombineReducer(filter, filters),
    data
});

const search = ( state = '', action) => {
    switch (action.type) {
        case SEARCH:
            return action.text;
        default: return state;
    }
};

export default combineReducers({
    tableA: createTableReducer(tableView, createPredicate('tableA') ),
    tableB: createTableReducer(tableView, createPredicate('tableB') ),
    search
});



