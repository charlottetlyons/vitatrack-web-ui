import React from 'react';
import FloatingActionButton from './FloatingActionButton';
import AddIcon from '@mui/icons-material/Add';

const AddIntakeButton: React.FC = () => {
    return (
        <FloatingActionButton>
            <AddIcon />
        </FloatingActionButton>
    );
};

export default AddIntakeButton;
