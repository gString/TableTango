import React from 'react';
import styled from 'styled-components';

import Filters from "./Filters";
import DataTable from "./DataTable";

const View = styled.section`
  background-color: white;
  padding: 1vh 2rem;
  order: 0;
  flex: 1 1 auto;
  align-self: auto;
  height: 41vh;
  border: 1px solid yellowgreen;
  overflow: hidden;
  
  :nth-child(2) {
    margin-bottom: 3vh;
  }
`;

const Scroller = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

const TableView = ({tableID}) => <View>
    <Filters tableID={tableID} />
    <Scroller>
    <DataTable tableID={tableID} />
    </Scroller>
</View>

export default TableView;