import { createSelector } from 'reselect';

const getViewFilters = (state, tableID) => state[tableID].filters;
const filterObjMaker = (filter, isActive) => {
    const name = filter.toLowerCase();
    return {
        name,
        displayName: name.replace(/_/g, ' '),
        isActive
    }
};
export const viewFiltersSelector = createSelector(
    getViewFilters,
    viewFilters => {
        let filtersObj = {};
        for (const filter in viewFilters) {
            filtersObj[filter] = filterObjMaker(filter, viewFilters[filter]);
        }
        return filtersObj;
    }
);

const getSearch = state => state.search;
export const searchTerm = createSelector(
    getSearch,
    search => search
);

const filterSearch = ( obj, text ) => {
    for ( const key in obj ) {
        if ( obj[key] && obj[key].toString().indexOf(text) !== -1 ) {
            return true
        }
    }
    return false;
}


const getTableData = (state, tableID) => state[tableID].data.items;
export const filteredDataSelector = createSelector(
    [getTableData, getSearch],
    (tableData, searchTerm) => {
        if (searchTerm.length > 0 && tableData.length > 0) {
            return tableData.filter( line => filterSearch(line, searchTerm) );
        }
        return tableData;
    }
);