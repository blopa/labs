import { useCallback, memo } from 'react';
import { debounce } from 'lodash';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const propTypes = {
    onSearch: PropTypes.func.isRequired,
};

function DebounceInput({ onSearch }) {
    const handleChange = useCallback(debounce(onSearch, 300), [onSearch]);

    return (
        <TextField
            id="outlined-basic"
            label="Filter"
            variant="outlined"
            onChange={handleChange}
        />
    );
}

DebounceInput.propTypes = propTypes;

export default memo(DebounceInput);
