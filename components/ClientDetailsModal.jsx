import { memo } from 'react';
import { Divider, Box, Typography } from '@mui/material';
import BasicModal from './BasicModal';
import Image from 'next/image';
import PropTypes from 'prop-types';

// Styles
import styles from '../styles/ClientDetailsModal.module.css';

const propTypes = {
    client: PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        quote: PropTypes.string,
        nationality: PropTypes.string,
    }).isRequired,
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};

function ClientDetailsModal({ client, show, handleClose }) {
    return (
        <BasicModal show={show} handleClose={handleClose}>
            <div>
                <Typography variant="subtitle1" align="center">
                    Client Details
                </Typography>
                <div className={styles['client-details-wrapper']}>
                    <Image
                        src={client.avatar}
                        alt={`Picture of ${client.name}`}
                        width={128}
                        height={128}
                    />
                    <div className={styles['details-wrapper']}>
                        <Box>
                            <Divider textAlign="left">
                                <Typography variant="subtitle2">
                                    Name
                                </Typography>
                            </Divider>
                            <Typography variant="body1">
                                {client.name}
                            </Typography>
                        </Box>
                        <Box>
                            <Divider textAlign="left">
                                <Typography variant="subtitle2">
                                    Title
                                </Typography>
                            </Divider>
                            <Typography variant="body1">
                                {client.title}
                            </Typography>
                        </Box>
                        {client.nationality && (
                            <Box>
                                <Divider textAlign="left">
                                    <Typography variant="subtitle2">
                                        Nationality
                                    </Typography>
                                </Divider>
                                <Typography variant="body1">
                                    {client.nationality}
                                </Typography>
                            </Box>
                        )}
                        {client.quote && (
                            <Box>
                                <Divider textAlign="left">
                                    <Typography variant="subtitle2">
                                        Quote
                                    </Typography>
                                </Divider>
                                <Typography variant="body1" component="aside">
                                    {client.quote}
                                </Typography>
                            </Box>
                        )}
                    </div>
                </div>
            </div>
        </BasicModal>
    );
}

ClientDetailsModal.propTypes = propTypes;

export default memo(ClientDetailsModal);
