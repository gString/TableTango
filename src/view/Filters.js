import React from 'react';
import { connect } from 'react-redux';

import { viewFiltersSelector } from "../model/selectors";
import { toggleFilter } from "../model/actions";
import FiltersView from "./Filters.view";

const mapStateToProps = (state, ownProps) => {
    return {
        filters: viewFiltersSelector(state, ownProps.tableID)
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
)(FiltersView);