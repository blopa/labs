import { Box, Modal } from '@mui/material';

// Styles
import styles from './BasicModal.module.css';

function BasicModal({ handleClose, show, children }) {
    return (
        <Modal
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className={styles['modal-box']}>
                {children}
            </Box>
        </Modal>
    );
}

export default BasicModal;
