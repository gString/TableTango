import React from 'react';

import { makeID } from "../model/actions";
import { Control, Bar, LabelText } from './Filters.style';

const Filter = ({ text, isActive, filterConst, handleClick }) =>
<Control>
    <input type='checkbox'
           checked={isActive}
           onChange={() => handleClick(filterConst)}/>
    <LabelText>{text}</LabelText>
</Control>

const FiltersView = ({filters, handleClick}) => {
    return (<Bar>
        { Object.keys(filters).map( item => (<Filter key={ makeID() }
                        text={filters[item].displayName}
                        filterConst={item}
                        isActive={filters[item].isActive}
                        handleClick={handleClick}/>))}
    </Bar>)}

export default FiltersView;