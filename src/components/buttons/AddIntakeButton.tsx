import React from 'react';
import { Button, styled } from '@mui/material';

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: 'grey',
    borderRadius: '30px',
    height: '75%',
    '&:hover': {
        backgroundColor: theme.palette.secondary.light,
    },
}));

const AddIntakeButton: React.FC = () => {
    return <StyledButton>+</StyledButton>;
};

export default AddIntakeButton;
