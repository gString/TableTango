import { combineReducers } from 'redux';
import {
    REQUEST_BLOB,
    SEARCH,
    TOGGLE_FILTER,
    filters,
    load,
    doSearch,
    toggleFilter } from './actions';

export const filter = ( state = true, action ) => {
    switch (action.type) {
        case TOGGLE_FILTER:
            return !state;
        default:
            return state;
    }
};
const createSingleFilterReducer = (reducer, name) => {
    return (state, action) => {
        const isInitializationCall = state === undefined;
        const shouldRunReducer = action.filter === name || isInitializationCall;
        return shouldRunReducer ? reducer(state, action) : state;
    }
};
export const createFiltersCombineReducer = (reducer, filterObj) => {
    let combinedObj;
    const combiner = (filterObj) => {
        let filters = {};
        for (const name in filterObj) {
            filters[name] = createSingleFilterReducer(reducer, name);
        }
        return filters;
    };
    if (combinedObj === undefined) {
        combinedObj = combiner( filterObj );
    }
    return combineReducers(combinedObj);
};