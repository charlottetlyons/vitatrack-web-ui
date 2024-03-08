import React, { useState } from 'react';
import FloatingActionButton from './FloatingActionButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

type style = {
    backgroundColor?: string;
    position?: string;
    bottom?: string;
    right: string;
};

type MenuButtonProps = {
    sx?: style;
    menuSx?: object;
};

const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiMenu-list': {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const StyledMenuIcon = styled(MenuIcon)(({ theme }) => ({
    color: theme.palette.secondary.main,
}));

const MenuButton: React.FC<MenuButtonProps> = (props: MenuButtonProps) => {
    const sx = props.sx;
    const menuSx = props.menuSx;

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
        <>
            <FloatingActionButton
                size="medium"
                styleOverride={{
                    ...sx,
                    backgroundColor: sx?.backgroundColor
                        ? sx.backgroundColor
                        : 'transparent',
                }}
            >
                <StyledMenuIcon fontSize="large" onClick={handleClick} />
            </FloatingActionButton>
            <StyledMenu
                anchorEl={anchorEl}
                open={showMenu}
                onClose={handleClose}
                sx={{ ...menuSx }}
            >
                <MenuItem onClick={handleAccountButton}>Account</MenuItem>
                <MenuItem onClick={handleLogoutButton}>Logout</MenuItem>
            </StyledMenu>
        </>
    );
};

export default MenuButton;
