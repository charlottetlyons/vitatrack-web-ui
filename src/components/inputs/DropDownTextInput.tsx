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
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

type DropDownTextInputProps = {
    options: string[];
};

const StyledDropDownBody = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '10px',
}));

const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.secondary,
        borderRadius: '20px',
        margin: '10px 0',
    },
    '& .MuiOutlinedInput-notchedOutline': {
        border: 'none',
    },
}));

const DropDownTextInput: React.FC<DropDownTextInputProps> = (
    props: DropDownTextInputProps,
) => {
    return (
        <StyledAutocomplete
            disablePortal
            PaperComponent={StyledDropDownBody}
            options={props.options}
            renderInput={(params) => (
                <TextField {...params} placeholder="Food" />
            )}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            renderOption={(props, option: any) => (
                <ListItem alignItems="center" {...props}>
                    <ListItemIcon>
                        <CloseIcon />
                        <ModeEditOutlineIcon />
                    </ListItemIcon>
                    {option}
                </ListItem>
            )}
        />
    );
};

export default DropDownTextInput;
