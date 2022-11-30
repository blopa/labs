import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';

// Styles
import styles from '../styles/BasicModal.module.css';

const propTypes = {
    handleClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

function BasicModal({ handleClose, show, children }) {
    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles['modal-box']}>{children}</Box>
        </Modal>
    );
}

BasicModal.propTypes = propTypes;

export default BasicModal;
