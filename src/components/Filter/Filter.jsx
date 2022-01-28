import React from 'react'
import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = ({onChange}) => {
    return (
        <>
            <FilterLabel htmlFor="filter">Find contacts by name:</FilterLabel>
            <FilterInput type="text"
                name='filter'
                id='filter'
                onChange={onChange} />
        </>
    )
}
Filter.propTypes = {
    onChange: PropTypes.func.isRequired,
}

export default Filter;