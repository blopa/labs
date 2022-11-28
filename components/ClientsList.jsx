import { memo } from 'react';
import { List, Typography } from '@mui/material';

// Components
import Client from "./Client";

function ClientsList({ clients }) {
    return (
        <>
            <Typography variant="h2">Clients</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {clients.map((client, index) => {
                    return (
                        <Client key={index} client={client} />
                    );
                })}
            </List>
        </>
    );
}

export default memo(ClientsList);
