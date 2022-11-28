import {memo, useCallback, useMemo, useState} from 'react';
import Image from 'next/image';
import { Box, Avatar, ListItemAvatar, ListItemText, ListItemButton } from "@mui/material";
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Components
// const ClientDetails = dynamic(() => import('./ClientDetails'))
const ClientDetailsModal = dynamic(() => import('./ClientDetailsModal'))

function Client({ client }) {
    const [areDetailsOpen, setOpenDetails] = useState(false);

    const onClientClicked = useCallback(() => {
        setOpenDetails(!areDetailsOpen);
    }, [areDetailsOpen]);

    const onCloseModal = useCallback(() => {
        setOpenDetails(false);
    }, [areDetailsOpen]);

    return (
        <Box>
            <ListItemButton onClick={onClientClicked}>
                <ListItemAvatar>
                    <Avatar>
                        <Image
                            src={client.avatar}
                            alt={`Picture of ${client.name}`}
                            width={50}
                            height={50}
                        />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={client.name} secondary={client.title} />
            </ListItemButton>
            {areDetailsOpen && (
                // <ClientDetails client={client} />
                <ClientDetailsModal client={client} show={areDetailsOpen} handleClose={onCloseModal} />
            )}
        </Box>
    );
}

export default memo(Client);
