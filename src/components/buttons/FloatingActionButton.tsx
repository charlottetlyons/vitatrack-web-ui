import React from 'react';
import { Fab, styled } from '@mui/material';

type FabProps = {
    children: React.ReactNode;
    size?: 'small' | 'medium' | 'large';
    styleOverride?: object;
};

const StyledFab = styled(Fab)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.text.primary,
    '&:hover': {
        backgroundColor: theme.palette.primary.light,
    },
}));

const FloatingActionButton: React.FC<FabProps> = (props: FabProps) => {
    return (
        <StyledFab size={props.size} sx={props.styleOverride}>
            {props.children}
        </StyledFab>
    );
};

export default FloatingActionButton;
