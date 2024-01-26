import { ButtonProps, ButtonType } from '../../types/ComponentTypes';
import UIButton from './UIButton';
import React from 'react';

const PrimaryButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <UIButton
            type={ButtonType.PRIMARY}
            text={props.text}
            onClick={props.onClick}
        ></UIButton>
    );
};

export default PrimaryButton;
