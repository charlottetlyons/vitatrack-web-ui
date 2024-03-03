import React from 'react';
import FloatingActionButton from '../buttons/FloatingActionButton';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CloseIcon from '@mui/icons-material/Close';

const DeleteEditButtonGroup: React.FC = () => {
    return (
        <>
            <FloatingActionButton
                size="small"
                styleOverride={{
                    backgroundColor: 'transparent',
                }}
            >
                <CloseIcon />
            </FloatingActionButton>
            <FloatingActionButton
                size="small"
                styleOverride={{
                    backgroundColor: 'transparent',
                }}
            >
                <ModeEditOutlineIcon />
            </FloatingActionButton>
        </>
    );
};

export default DeleteEditButtonGroup;
