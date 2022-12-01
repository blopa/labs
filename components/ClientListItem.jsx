import { memo, useCallback, useState } from 'react';
import Image from 'next/image';
import {
    Box,
    Avatar,
    ListItemAvatar,
    ListItemText,
    ListItemButton,
} from '@mui/material';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

// Components
const ClientDetailsModal = dynamic(() => import('./ClientDetailsModal'));

const propTypes = {
    client: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        quote: PropTypes.string,
        nationality: PropTypes.string,
    }).isRequired,
};

function ClientListItem({ client }) {
    const [areDetailsOpen, setOpenDetails] = useState(false);

    const onClientClicked = useCallback(() => {
        setOpenDetails(!areDetailsOpen);
    }, [areDetailsOpen]);

    const onCloseModal = useCallback(() => {
        setOpenDetails(false);
    }, []);

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
                <ClientDetailsModal
                    client={client}
                    show={areDetailsOpen}
                    handleClose={onCloseModal}
                />
            )}
        </Box>
    );
}

ClientListItem.propTypes = propTypes;

export default memo(ClientListItem);
