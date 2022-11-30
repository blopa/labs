import { useCallback } from 'react';
import { debounce } from 'lodash';
import { TextField } from '@mui/material';

function DebounceInput({ onSearch }) {
    const handleChange = useCallback(
        debounce(onSearch, 300),
        [onSearch],
    );

    return (
        <TextField id="outlined-basic" label="Filter" variant="outlined" onChange={handleChange} />
    );
}

export default DebounceInput;
