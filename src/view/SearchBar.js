import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { doSearch } from "../model/actions";

const placeHolder = 'Search Tables';

const Bar = styled.form`
  padding: 0.6rem 2rem;
  margin-bottom: 0.6rem;
  order: 0;
  flex: 0 1 auto;
  align-self: auto;
  height: 10vh;
`;
const Input = styled.input`
  width: 50rem;
  max-width: 65vw;
  line-height: 1.5rem;
  padding: 0.5rem;
  border: solid 1px lightgray;
  border-radius: 3px;
`;

const SearchBar = ({ onChange }) => {
    let input;

    return (
    <Bar>
        <Input type='text'
               placeholder={placeHolder}
               ref={node => (input = node)}
               onChange={() => onChange(input.value)}/>
    </Bar>
    )}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (text) => dispatch(doSearch(text))
    }
};

export default connect(
    undefined,
    mapDispatchToProps
)(SearchBar);