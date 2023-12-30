import { ButtonProps, ButtonType } from '../../types/ComponentTypes';
import UIButton from './UIButton';
import React from 'react';

const SecondaryButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <UIButton type={ButtonType.SECONDARY} text={props.text}></UIButton>;
};

export default SecondaryButton;
