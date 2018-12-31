import styled from "styled-components";

export const Table = styled.table`
  margin-top: 0.5rem;
  border-collapse: collapse;
  font-size: 0.8rem;
  width: 100%;
`;

export const Row = styled.tr`
  :nth-child(even) {
    background-color: #eee;
    border-left: 1px solid lightgray;
    border-right: 1px solid lightgray;
  }
`;

export const HeaderCell = styled.th`
  text-align: left;
  padding: 0.6rem 0.3rem;
  color: #717171;
  display: ${props => props.visible ? 'table-cell' : 'none' };
  text-transform: capitalize;
  width: 33%;
`;

export const Cell = styled.td`
  border-bottom: 1px solid lightgray;
  padding: 0.6rem 0.3rem;
  display: ${props => props.visible ? 'table-cell' : 'none' };
  width: 33%;
`;