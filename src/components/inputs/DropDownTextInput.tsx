import {
    Autocomplete,
    ListItem,
    ListItemIcon,
    Paper,
    TextField,
    styled,
} from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

const StyledDropDownBody = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.text.primary,
    padding: '10px',
}));

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
            PaperComponent={StyledDropDownBody}
            options={['Banana', 'Grapes', 'Ears']}
            renderInput={(params) => (
                <TextField {...params} placeholder="Food" />
            )}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            renderOption={(props, option: any) => (
                <ListItem alignItems="center" {...props}>
                    <ListItemIcon>
                        <CloseIcon />
                    </ListItemIcon>
                    {option}
                </ListItem>
            )}
        />
    );
};

export default DropDownTextInput;
