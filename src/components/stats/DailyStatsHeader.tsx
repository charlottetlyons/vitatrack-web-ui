import { Grid, Menu, MenuItem, Typography, styled } from '@mui/material';
import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import FloatingActionButton from '../buttons/FloatingActionButton';
import { useNavigate } from 'react-router-dom';

const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const StyledKeyboardArrowLeftIcon = styled(KeyboardArrowLeftIcon)(
    ({ theme }) => ({
        color: theme.palette.secondary.main,
    }),
);

const StyledKeyboardArrowRightIcon = styled(KeyboardArrowRightIcon)(
    ({ theme }) => ({
        color: theme.palette.secondary.main,
    }),
);

const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiMenu-list': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const DailyStatsHeader: React.FC = () => {
    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false);
    const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);

    const handleClick = (event: React.MouseEvent<SVGSVGElement>): void => {
        setAnchorEl(event.currentTarget);
        setShowMenu(true);
    };

    const handleClose = (): void => {
        setAnchorEl(null);
        setShowMenu(false);
    };

    const handleAccountButton = (): void => {
        handleClose();
        navigate('/vitatrack/internal/account-details');
    };

    const handleLogoutButton = (): void => {
        handleClose();
        navigate('/vitatrack/external/login');
    };

    return (
        <Grid container item justifyContent="space-between" alignItems="center">
            <Grid item>
                <Grid
                    item
                    container
                    justifyContent="space-evenly"
                    alignItems="center"
                >
                    <FloatingActionButton
                        size="small"
                        styleOverride={{
                            backgroundColor: 'transparent',
                        }}
                    >
                        <StyledKeyboardArrowLeftIcon />
                    </FloatingActionButton>
                    <Typography variant="h2" component="span">
                        January 1st, 2024
                    </Typography>
                    <FloatingActionButton
                        size="small"
                        styleOverride={{
                            backgroundColor: 'transparent',
                        }}
                    >
                        <StyledKeyboardArrowRightIcon />
                    </FloatingActionButton>
                </Grid>
            </Grid>
            <Grid item padding={3}>
                <FloatingActionButton
                    size="medium"
                    styleOverride={{
                        backgroundColor: 'transparent',
                    }}
                >
                    <StyledMenuIcon fontSize="large" onClick={handleClick} />
                </FloatingActionButton>
                <StyledMenu
                    anchorEl={anchorEl}
                    open={showMenu}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleAccountButton}>Account</MenuItem>
                    <MenuItem onClick={handleLogoutButton}>Logout</MenuItem>
                </StyledMenu>
            </Grid>
        </Grid>
    );
};

export default DailyStatsHeader;
