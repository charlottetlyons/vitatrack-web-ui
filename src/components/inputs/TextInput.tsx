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
        borderRadius: '15px',
        margin: '10px 0',
        boxSizing: 'border-box',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none', // This is the magic line that makes the outline disappear
    },
}));

const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
    return (
        <StyledTextField
            InputProps={{
                notched: false,
            }}
            placeholder={props.placeholderText}
        ></StyledTextField>
    );
};

export default TextInput;
