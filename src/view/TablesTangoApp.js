import React from 'react';
import { connect } from 'react-redux';

import SearchBar from "./SearchBar";
import TableView from "./TableView";
import { getBlub } from "../model/actions";
import { GlobalStyle, Flexer } from './TableTangoApp.style';


class TablesTangoApp extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getBlub('tableA'));
        dispatch(getBlub('tableB'));
    }

    render() {
        return <React.Fragment>
            <Flexer>
                <SearchBar/>
                <TableView tableID='tableA' />
                <TableView tableID='tableB' />
            </Flexer>
            <GlobalStyle/>
        </React.Fragment>;
    }
}
export default connect()(TablesTangoApp);