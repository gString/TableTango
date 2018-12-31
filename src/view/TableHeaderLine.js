import React from "react";
import { connect } from 'react-redux';

import { HeaderCell } from "./DataTable.style";
import { viewFiltersSelector } from "../model/selectors";
import { makeID, toggleFilter } from "../model/actions";

const TableHeaderLine = ({ filters }) =>
    <thead>
        <tr>
            { Object.keys(filters).map( item =>
                <HeaderCell key={ makeID() }
                            visible={filters[item].isActive}>
                    {filters[item].displayName}
                </HeaderCell>) }
        </tr>
    </thead>

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
)(TableHeaderLine);