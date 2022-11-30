import { memo } from 'react';
import { List } from '@mui/material';

// Components
import Client from './Client';

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

export default memo(ClientsList);
