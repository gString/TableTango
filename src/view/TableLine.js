import React from 'react';
import { connect } from 'react-redux';

import { Cell, Row } from "./DataTable.style";
import { viewFiltersSelector } from "../model/selectors";
import { makeID, toggleFilter } from "../model/actions";

const TableLine = ({ entry, filters }) =>
    <Row>
        { Object.keys(filters).map( item => {
            const field = filters[item].name;
            return <Cell key={ makeID() }
                         visible={filters[item].isActive}>
                        {entry[field]}
                    </Cell>
        })}
    </Row>

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
)(TableLine);
