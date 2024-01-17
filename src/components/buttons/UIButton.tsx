import React from 'react';
import { styled } from '@mui/system';
import { Button, InputProps } from '@mui/material';
import { ButtonType, UIButtonProps } from '../../types/ComponentTypes';

interface CustomInputProps {
    buttonType: ButtonType;
}

type StyledButtonInputProps = InputProps & CustomInputProps;

const StyledButton = styled(Button)<StyledButtonInputProps>(
    ({ theme, buttonType }) => ({
        [theme.breakpoints.up('xs')]: {
            color:
                buttonType === ButtonType.PRIMARY
                    ? theme.palette.text.primary
                    : theme.palette.text.secondary,
            backgroundColor:
                buttonType === ButtonType.PRIMARY
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
            borderRadius: '20px',
            textTransform: 'none',
            width: '110px',
            height: '40px',
            margin: '0 5px',
            '&:hover': {
                backgroundColor:
                    buttonType === ButtonType.PRIMARY
                        ? theme.palette.primary.light
                        : theme.palette.secondary.light,
            },
            '&:click': {
                backgroundColor:
                    buttonType === ButtonType.PRIMARY
                        ? theme.palette.primary.dark
                        : theme.palette.secondary.dark,
            },
            '&:active': {
                backgroundColor:
                    buttonType === ButtonType.PRIMARY
                        ? theme.palette.primary.dark
                        : theme.palette.secondary.dark,
            },
        },
    }),
);

const UIButton: React.FC<UIButtonProps> = (props: UIButtonProps) => {
    const text: string = props.text;
    const type: ButtonType = props.type;

    return (
        <StyledButton disableTouchRipple buttonType={type}>
            {text}
        </StyledButton>
    );
};

export default UIButton;
