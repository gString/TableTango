import React from 'react';
import { connect } from 'react-redux';

import { filteredDataSelector, viewFiltersSelector } from "../model/selectors";
import { toggleFilter } from "../model/actions";
import DataTableView from "./DataTable.view";

const mapStateToProps = (state, ownProps) => {
    return {
        filters: viewFiltersSelector(state, ownProps.tableID),
        filteredData: filteredDataSelector(state, ownProps.tableID),
    }
};
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleClick: (filterConst) => dispatch(toggleFilter(filterConst, ownProps.tableID))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataTableView);