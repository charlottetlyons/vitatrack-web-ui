import { Grid, SxProps, Theme } from '@mui/material';
import React from 'react';

type FormProps = {
    children: React.ReactNode;
};

const Form: React.FC<FormProps> = (props: FormProps) => {
    const formStyle: SxProps<Theme> = (theme: Theme) => ({
        [theme.breakpoints.up('lg')]: {
            width: '75%',
            margin: 'auto',
        },
    });

    return (
        <Grid
            item
            container
            sx={formStyle}
            justifyContent="center"
            marginBottom="30px"
        >
            {props.children}
        </Grid>
    );
};

export default Form;
