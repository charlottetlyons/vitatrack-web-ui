import React from 'react';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';

export interface TextInputProps {
    placeholderText: string;
}

const StyledTextField = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.text.primary,
        color: theme.palette.text.secondary,
        borderRadius: '20px',
        margin: '10px 0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none', // This is the magic line that makes the outline disappear
    },
}));

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
    return (
        <StyledTextField
            fullWidth
            InputProps={{
                notched: false,
            }}
            placeholder={props.placeholderText}
        ></StyledTextField>
    );
};

export default TextInput;
