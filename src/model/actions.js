export const REQUEST_BLOB = 'REQUEST_BLOB';
export const RECEIVE_BLOB = 'RECEIVE_BLOB';
export const FAILED_BLOB = 'FAILED_BLOB';
export const SEARCH = 'SEARCH';
export const TOGGLE_FILTER = 'TOGGLE_FILTER';


export const makeID = () => {
    const randomN = (n) => Math.random().toString(36).substr(2,n);
    return randomN(5) + "_" + randomN(5);
};


export const filters = {
    IP_ADDRESS: 'IP_ADDRESS',
    FIRST_NAME: 'FIRST_NAME',
    EMAIL: 'EMAIL'
};


export const load = () => ({ type: REQUEST_BLOB });

export const doSearch = text => ({
    type: SEARCH,
    text
});

export const toggleFilter = (filter, tableID) => ({
    type: TOGGLE_FILTER,
    filter,
    tableID
});

export const getData = (tableID) => ({
    type: REQUEST_BLOB,
    tableID
});

export const loadDataError = (tableID) => ({
    type: FAILED_BLOB,
    tableID
});

export const fetchDataSuccess = (tableID, items) => ({
    type: RECEIVE_BLOB,
    items,
    tableID
});

const thinData = ( raw, fields ) => {
    return raw.map( entry => {
        let thinned = {};
        Object.values(fields).forEach(
            field => {
                const key = field.toLowerCase();
                thinned[key] = entry[key];
            }
        )
        thinned.id = entry.id;
        return thinned;
    })
}

export const getBlub = (tableID) => async dispatch => {
    console.log('getBlub', tableID);

    try {
        dispatch(getData(tableID));
        const url = 'https://jsonblob.com/api/jsonBlob/cf5497cd-fc54-11e8-a36c-dfedecf31ebc';
        const response = await fetch(url);
        const responseBody = await response.json();
        const thinned = thinData(responseBody, filters);
        console.log(thinned);
        dispatch(fetchDataSuccess(tableID, thinned));
    } catch(err) {
        console.error(err);
        dispatch(loadDataError(tableID));
    }
}