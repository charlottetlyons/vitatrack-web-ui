import { Autocomplete, TextField, styled } from '@mui/material';
import React from 'react';

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.text.secondary,
        borderRadius: '20px',
        margin: '10px 0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));

const DropDownTextInput: React.FC = () => {
    return (
        <StyledAutocomplete
            disablePortal
            options={['Banana', 'Grapes', 'Ears']}
            renderInput={(params) => (
                <TextField {...params} placeholder="Food" />
            )}
        />
    );
};

export default DropDownTextInput;
