import { memo } from 'react';
import { List } from '@mui/material';
import PropTypes from 'prop-types';

// Components
import Client from './Client';

const propTypes = {
    clients: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired,
            quote: PropTypes.string,
            nationality: PropTypes.string,
        }).isRequired
    ).isRequired,
};

function ClientsList({ clients }) {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {clients.map((client, index) => {
                return <Client key={index} client={client} />;
            })}
        </List>
    );
}

ClientsList.propTypes = propTypes;

export default memo(ClientsList);
